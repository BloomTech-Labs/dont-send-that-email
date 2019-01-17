// Configure ENV variables immediately
require("dotenv").config();

const express = require("express");
const session = require("express-session");
const sessionConfig = require("./config/session")
const passport = require("./config/passport");
const cors = require("./config/cors");
const db = require("./data/dbconfig.js");
const authRouter = require("./routers/auth");
const versionsRouter = require("./routers/versions");
const emailsRouter = require("./routers/emails");
const subscriptionsRouter = require("./routers/subscriptions");
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3')
const SERVER_CONFIGS = require('./constants/server');

const PaymentRouter = require('./routers');
const configureServer = require('./config/corsforstripe.js');

//this sets up the tone analyzer. We use it in the get request.
const toneAnalyzer = new  ToneAnalyzerV3({
  version: '2017-09-21',
  iam_apikey: process.env.API_KEY,
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api'
})

const app = express();

// Initialize middlewares
app.use(express.json());
app.use(cors());
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

//Stripe middleware
// configureServer(app);
PaymentRouter(app);

app.use("/auth", authRouter);
app.use("/versions", versionsRouter);
app.use("/emails", emailsRouter);
app.use("/subscriptions", subscriptionsRouter);
app.use("/billing", PaymentRouter);

app.post('/api/watson', (req, res) => {
  const toneParams = {
    tone_input: {'text': req.body.text},
    content_type: 'application/json'
  };

  toneAnalyzer.tone(toneParams, (err, data) => {
    if(err) {
      //add a better error message.
      res.status(500).json({message: "Sorry, watson is not talking to us right now", err})
    } else {
      res.status(200).json(data)
    }
  })
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/users", (req, res) => {
  db("users")
  .select("username", "subscriber")
  .then(users => {
    res.status(200).json(users)
  })
  .catch(err => res.status(500).json({ errorMsg: "Unable to retrieve users."}))
})

app.post("/users", (req, res) => {
  const user = req.body;
  // console.log(user);
  if(!user.username) {
    res.status(400).json({ errorMsg: "Please enter a username."})
  }
  db("users")
    .insert(user)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => res.status(500).json({ errorMsg: "Unable to add user to user database.", err})
)})

app.listen(SERVER_CONFIGS.PORT || 5000, error => {
  if (error) throw error;
  console.log('Server running on port: ' + SERVER_CONFIGS.PORT);
});