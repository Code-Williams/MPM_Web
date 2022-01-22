const express = require("express");
const Router = express.Router();

// For render main login page (if user is open login page using url)
Router.get("/", (req, res) => {
  res.render("login");
});

// For login a user (when a user enter username and password and hit submit)
Router.post("/", (req, res) => {});

module.exports = Router;
