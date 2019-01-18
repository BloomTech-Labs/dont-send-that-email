const express = require("express")
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
      await db("emails").where({ id }).update({ title, addressee });
    } else {
      email.id = (await db("emails").insert(email))[0];
    } 

    if (version) {
      version.email_id = email.id;
      await db("versions").insert(version);
    }

    res.json({ id: email.id });
  } catch (err) {
    res.json({ err });
    throw err;
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const email = await db("emails").where({ id }).first();
  email.versions = await db("versions").where({ email_id: id });
  res.json({ email });
});

router.get("/", async (req, res) => {
  const emails = await db("emails").where({ user_id: req.user.id });
  res.json({ emails });
})

module.exports = router;