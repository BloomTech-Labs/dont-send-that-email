const cors = require("cors");

const config = {
  "origin": ["http://localhost:3000", "https://dont-send-that-email.netlify.com/"],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "credentials": true
}


module.exports = () => cors(config);