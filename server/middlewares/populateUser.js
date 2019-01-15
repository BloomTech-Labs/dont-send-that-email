const moment = require("moment");
const db = require("../data/dbconfig");

const populateUser = async (req, res, next) => {
  if (!req.user) {
    return res.status(400).json({ err: "No user logged in." });
  }
  
  try {
    // Look up user in db using email address from session
    const emailaddress = req.user.emails[0].value;
    const users = await db("users").where({ emailaddress })
    req.user = users[0];
    
    // Look up the latest subscription for the user
    const subscription = await db("subscriptions")
    .orderBy("date_created", "desc")
    .first()
    req.user.subscribed = isSubscriptionActive(subscription);
    
    console.log("[populateUser] - found ", req.user);
    next();
  } catch (err) {
    res.status(500).json({ err });
    throw err;
  }
};

const isSubscriptionActive = (subscription) => {
  // Force moment to treat datestring from the database as UTC
  // TODO: fix this in the knex configuration
  const datestring = subscription.date_created + "+0000"

  // Check to see if user is within the subscription window
  const start = moment(datestring);
  const end = moment(datestring).add(subscription.duration, "days");
  return moment().isBetween(start, end);
}

module.exports = populateUser;