const db = require("../data/dbconfig");

const populateUser = (req, res, next) => {
  if (!req.user) {
    return res.json({ err: "No user logged in." });
  }
  db("users")
    // .where()
    // TODO - select only the user associated with the session
    .select("username", "subscriber")
    .then(users => {
      req.db_user = users;
      next();
    })
    .catch(err => res.status(500).json({ err }));
};

module.exports = populateUser;