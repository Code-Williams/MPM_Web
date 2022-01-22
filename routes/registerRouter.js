const express = require("express");
const Router = express.Router();

// For render main register page (if user open register page using url)
Router.get("/", (req, res) => {
  res.render("register");
});

Router.post("/", (req, res) => {});

module.exports = Router;
