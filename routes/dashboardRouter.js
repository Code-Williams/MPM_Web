const express = require("express");
const Router = express.Router();

// For render the main dashboard page (if user open dashboard url in browser)
Router.get("/", (req, res) => {
  res.render("user_interface");
});

// For login to dashboard page (request sent from ejs and form tag)
Router.post("/", (req, res) => {});

module.exports = Router;
