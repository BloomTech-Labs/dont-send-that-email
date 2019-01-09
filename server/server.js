const express = require("express");

const app = express();
app.use(express.json());
const db = require("./data/dbconfig.js");

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

app.listen(process.env.PORT || 3000, () => console.log("listening"))