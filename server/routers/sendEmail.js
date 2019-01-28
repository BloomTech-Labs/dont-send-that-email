const express = require('express');
const populateUser = require('../middlewares/populateUser');
const router = express.Router();
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

router.use(populateUser);

const options = {
  auth: {
    api_user: process.env.SENDGRID_USERNAME,
    api_key: process.env.SENDGRID_PASSWORD,
  },
};
const client = nodemailer.createTransport(sgTransport(options));

router.post('/', async (req, res) => {
  const email = {
    from: req.body.username,
    to: req.body.addressee,
    subject: req.body.title,
    text: req.body.text,
  };
  client.sendEmail(email, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Message sent ' + info.response);
    }
  });
});
module.exports = router;
