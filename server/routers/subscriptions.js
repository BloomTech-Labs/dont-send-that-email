const express = require("express")
const populateUser = require("../middlewares/populateUser");
const db = require("../data/dbconfig.js");
const router = express.Router();

router.use(populateUser);

// Required fields: {
//   transaction_id
// }
router.post("/", (req, res) => {
  const subscription = {
    user_id: req.user.id,
    ...req.body
  }

  db("subscriptions")
    .insert(subscription)
    .then(() => res.json({ msg: "Saved transaction to database." }))
    .catch(err => res.json(err));
});

module.exports = router;