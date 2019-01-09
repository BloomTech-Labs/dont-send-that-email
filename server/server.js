const express = require("express");

const app = express();

const db = require('./data/dbconfig.js');

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/users", (req, res) => {

})

app.post("/users", (req, res) => {
  const user = req.body;

  if(!user.username) {
    res.status(400).json({ errorMsg: "Please enter a username."})
  }

})

app.listen(process.env.PORT || 3000, () => console.log("listening"))