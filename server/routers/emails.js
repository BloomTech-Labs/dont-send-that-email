const express = require("express")
const populateUser = require("../middlewares/populateUser");
const db = require("../data/dbconfig.js");
const router = express.Router();

router.use(populateUser);

// Required fields: {
//    title,
//    addressee
// }
router.post("/", (req, res) => {
  const email = {
    user_id: req.db_user.id,
    ...req.body
  };
  
  db("emails")
    .insert(email)
    .then(() => res.json({ msg: "Saved a new email" }))
    .catch(err => res.json({ err }));
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const email = await db("emails").where({ id }).first();
  email.versions = await db("versions").where({ email_id: id });
  res.json({ email });
});

router.get("/", async (req, res) => {
  const emails = await db("emails").where({ user_id: req.db_user.id });
  res.json({ emails });
})

module.exports = router;