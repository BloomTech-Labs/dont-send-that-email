// Configure ENV variables immediately
require("dotenv").config();

const express = require("express");
const session = require("express-session");
const sessionConfig = require("./config/session")
const passport = require("./config/passport");
const authRouter = require("./routers/auth");

const app = express();

// Initialize middlewares
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());


app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT || 5000, () => console.log("listening"));