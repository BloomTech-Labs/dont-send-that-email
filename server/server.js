const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post('/api/users', (req, res) => {
  // write the code to post the user.

})

app.get('/api/users', (req, res) => {
  //here's where we do the get request.

})
app.listen(process.env.PORT || 3000, () => console.log("listening"))
