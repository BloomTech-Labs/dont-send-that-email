const express = require('express');
const stripe = require('../constants/stripe');
const router = express.Router();
const populateUser = require('../middlewares/populateUser');
const db = require('../data/dbconfig');

router.use(populateUser);

const postStripeCharge = (user, res) => async (stripeErr, stripeRes) => {
  if (stripeErr) {
    console.log(stripeErr);
    res.status(500).send({ error: stripeErr });
  } else {
    try {
      const id = (await db("subscriptions").insert({ user_id: user.id, transaction_id: stripeRes.id, duration: 999 }))[0];
      res.status(200).send({ success: stripeRes, id });
    } catch (err) {
      res.status(500).send({ err: "Unable to persist subscription data." });
      throw err;
    }
  }
}

router.get('/', (req, res) => {
  res.send({ user: req.user, message: 'Transmitting - Stripe checkout server!', timestamp: new Date().toISOString() })
});

router.post('/', async (req, res) => {
  console.log("router response object", res);
  stripe.charges.create(req.body, postStripeCharge(req.user, res));
});

module.exports = router;