// Configure ENV variables immediately
require("dotenv").config();

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const authRouter = require("./routers/auth");

// Configure session
// TODO - move to config/session.js
const sessionConfig = {
  secret: 'CHANGE THIS TO A RANDOM SECRET',
  cookie: {},
  resave: false,
  saveUninitialized: true
};

// Configure Auth0 strategy
// TODO - move to config/auth.js
const strategy = new Auth0Strategy({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  callbackURL: process.env.AUTH0_CALLBACK_URL
}, (token, refresh, params, profile, done) => {
  return done(null, profile);
});

// Configure passport
// TODO - move to config/passport.js
passport.use(strategy);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

const app = express();

// Initialize middlewares
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

if (app.get('env') === 'production') {
  sess.cookie.secure = true; // serve secure cookies, requires https
}

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT || 5000, () => console.log("listening"));