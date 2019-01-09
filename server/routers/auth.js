const express = require("express")
const passport = require("passport");

const router = express.Router();

// Beginning of login flow. Sends user to Auth0 to authenticate
router.get("/login", passport.authenticate("auth0", {
  scope: "openid email profile"
}), (req, res) => {
  res.redirect("/")
});

// Auth0 will redirect the user-agent here after authentication
// This route will redirect to the client homepage (or possibly client document list)
router.get("/callback", (req, res, next) => {
  passport.authenticate("auth0", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/login");
    }

    // Initialize a session for the user on the back end
    // Subsequent requests from the user will have a `req.user` object
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      // Redirects to /auth/profile for the time being
      res.redirect("/auth/profile");
      // res.redirect(process.env.FRONT_END_URL);
    });
  })(req, res, next);
});

// Provides information about the user to the client app, which can then
// determine what content to show the user
router.get("/profile", (req, res) => {
  const data = {};
  if (req.user) {
    data.user = req.user;
  } else {
    data.err = "No available user session.";
  }
  res.json(data);
});

module.exports = router;