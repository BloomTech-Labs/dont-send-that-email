const db = require('../data/dbconfig');
const month = 2629746000;
const validateUserRequest = async (req, res, next) => {
  console.log(req.body);
  try {
    //case to handle user being a subscriber
    if (req.body.user.subscribed) {
      next();
    }
    const now = Date.now();
    if (
      now - req.body.user.currentCycleStart < month &&
      req.body.user.analysesCount < 100
    ) {
      const count = await db('users')
        .where({ username: req.body.user.username })
        .update({
          currentCycleStart: req.body.user.currentCycleStart,
          analysesCount: req.body.user.analysesCount + 1,
        });
      next();
    }
  } catch (err) {
    res.status(429).json(err);
  }
};
module.exports = validateUserRequest;
