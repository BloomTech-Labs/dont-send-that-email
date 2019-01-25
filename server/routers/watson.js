const express = require('express');
const validateUserRequest = require('../middlewares/validateUserRequest');
const db = require('../data/dbconfig.js');
const router = express.Router();
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

//this sets up the tone analyzer. We use it in the get request.
const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  iam_apikey: process.env.API_KEY,
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api',
});

router.post('/', validateUserRequest, (req, res) => {
  const toneParams = {
    tone_input: { text: req.body.text },
    content_type: 'application/json',
  };

  toneAnalyzer.tone(toneParams, (err, data) => {
    if (err) {
      //add a better error message.
      res.status(500).json(err);
    } else {
      res.status(200).json(data);
    }
  });
});

module.exports = router;
