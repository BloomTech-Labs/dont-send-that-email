const express = require("express");
const moment = require("moment");
const populateUser = require("../middlewares/populateUser");
const db = require("../data/dbconfig.js");
const router = express.Router();
const timezone = require("moment-timezone");
router.use(populateUser);

// Required fields: {
//    title,
//    addressee
// }
router.post("/", async (req, res) => {
  try {
    const { email, version } = req.body;
    email.user_id = req.user.id;
    if (email.id) {
      const { title, addressee, id } = email;
      await db("emails")
        .where({ id })
        .update({ title, addressee });
      console.log("had an id", id);
    } else {
      email.id = (await db("emails")
        .insert(email)
        .returning("id"))[0];
      console.log("made a new id", email.id);
    }

    if (version) {
      delete version.id; // For saving a new copy of an edited version
      version.email_id = email.id;
      console.log("inserting version with email_id: ", version.email_id);
      version.tone_analysis = JSON.stringify(version.tone_analysis);
      await db("versions").insert(version);
    }

    res.json({ id: email.id });
  } catch (err) {
    res.json({ err });
    throw err;
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await db("versions")
    .where({ email_id: id })
    .del();
  const count = await db("emails")
    .where({ id })
    .del();
  res.json({ count });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const email = await db("emails")
    .where({ id })
    .first();
  // Fetch all versions, and parse their tone analyses
  email.versions = await db("versions")
    .where({ email_id: id })
    .then(vs => {
      console.log(`versions for email ${id}`);
      return vs.map(v => {
        console.log("versiondata:");
        console.log(v.tone_analysis);
        // Postgres will give us an already-parsed JSON object, but SQLite will not
        try {
          v.tone_analysis = JSON.parse(v.tone_analysis);
        } finally {
          return v;
        }
      });
    });
  res.json({ email });
});

router.get("/", async (req, res) => {
  const emails = await db("emails")
    .leftJoin("versions", "versions.email_id", "emails.id")
    .where({ "emails.user_id": req.user.id })
    .select(
      "emails.id",
      "title",
      "addressee",
      "versions.date_created as updated",
      "versions.text as text"
    )
    // Postgres doesn't like groupBy, so we will group them ourselves
    .then(emails => {
      // Convert the list of emails into a hashtable indexed by email ID
      const hashed = {};
      emails.forEach(email => {
        if (!hashed[email.id]) {
          hashed[email.id] = email;
        } else {
          // Replace the existing entry if the associated version is newer
          const updated = moment(email.updated);
          const hashed_updated = moment(hashed[email.id].updated);
          if (updated.isAfter(hashed_updated)) {
            hashed[email.id] = email;
          }
        }
      });
      // Return a list of emails
      return Object.values(hashed);
    })
    // Convert database dates into something readable
    .then(emails => emails.map(processEmail));
  res.json({ emails });
});

processEmail = email => {
  const { updated } = email;

  const m = moment(updated);
  if (m.isValid()) {
    email.updated = m.calendar();
  } else {
    email.updated = "No versions.";
  }
  return email;
};

module.exports = router;
