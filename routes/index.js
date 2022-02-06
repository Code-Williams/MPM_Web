const express = require("express")
const Router = express.Router()

const HomeController = require("../controllers/homePage")
Router.get("/", HomeController)

Router.get("/about", (req, res) => {
    res.render("about")
})

Router.get("/cart", (req, res) => [
    res.render("cart")
])

Router.get("/checkout", (req, res) => {
    res.render("checkout")
})

Router.get("/contact", (req, res) => {
    res.render("contact")
})

Router.get("/login", (req, res) => [
    res.render("login")
])

Router.get("/register", (req, res) => {
    res.render("register")
})

Router.get("/news", (req, res) => {
    res.render("news")
})

Router.get("/single-news", (req, res) => {
    res.render("single-news")
})

Router.get("/single-product", (req, res) => {
    res.render("single-product")
})

Router.get("/dashboard", (req, res) => {
    res.render("user_interface")
})

Router.get("/shop", (req, res) => {
    res.render("shop")
})

const errController = require("../controllers/error")
Router.get("/*", errController)

module.exports = Router