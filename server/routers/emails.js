const express = require("express");
const populateUser = require("../middlewares/populateUser");
const db = require("../data/dbconfig.js");
const router = express.Router();

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
    } else {
      email.id = (await db("emails").insert(email))[0];
    }

    if (version) {
      delete version.id; // For saving a new copy of an edited version
      version.email_id = email.id;
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
    .then(vs =>
      vs.map(v => {
        v.tone_analysis = JSON.parse(v.tone_analysis);
        return v;
      })
    );

  console.log(email.versions);
  res.json({ email });
});

router.get("/", async (req, res) => {
  const emails = await db("emails").where({ user_id: req.user.id });
  res.json({ emails });
});

module.exports = router;
