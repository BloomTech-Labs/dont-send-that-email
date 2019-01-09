
const express = require("express");
const authRouter = require("./routers/auth");

const app = express();

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT || 3000, () => console.log("listening"))
