const db = require("../data/dbconfig");

const populateUser = (req, res, next) => {
  if (!req.user) {
    return res.status(400).json({ err: "No user logged in." });
  }
  
  // Look up user in db using email address from session
  const emailaddress = req.user.emails[0].value;
  db("users")
  .where({ emailaddress })
  .select("id", "username", "subscriber", "emailaddress")
  .then(users => {
    const user = users[0];
    console.log("[populateUser] - found ", user);
    req.db_user = user;
    next();
  })
  .catch(err => res.status(500).json({ err }));
};

module.exports = populateUser;