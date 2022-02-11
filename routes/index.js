const express = require("express")
const { isLoggedIn, isNotLoggedIn } = require("../helpers/auth")
const { body } = require("express-validator")
const Router = express.Router()

const HomeController = require("../controllers/homePage")
Router.get("/", HomeController)

const AboutController = require("../controllers/about")
Router.get("/about", AboutController)

Router.get("/cart", (req, res) => [
    res.render("cart")
])

Router.get("/checkout", (req, res) => {
    res.render("checkout")
})

const contactController = require("../controllers/contact")
Router.get("/contact", contactController)

const loginController = require("../controllers/login")
Router.get("/login", isNotLoggedIn, loginController.get)
Router.post('/login', loginController.post);


const registerController = require("../controllers/register")
Router.get("/register", isNotLoggedIn, registerController.get)
Router.post("/register",
    body('email').isEmail().normalizeEmail().toLowerCase(),
    registerController.post
)

Router.get("/news", (req, res) => {
    res.render("news")
})

Router.get("/single-news", (req, res) => {
    res.render("single-news")
})

Router.get("/single-product", (req, res) => {
    res.render("single-product")
})

const { dashboardController } = require("../controllers/dashboard")
Router.get("/dashboard", isLoggedIn, dashboardController)

const ShopController = require("../controllers/shop")
Router.get("/products/:id", ShopController.single)
Router.get("/shop", ShopController.all)

const BasketController = require("../controllers/basket")
Router.post("/dashboard/basket", BasketController.post)

const LogoutController = require("../controllers/logout")
Router.get("/logout", isLoggedIn, LogoutController.get)

const errController = require("../controllers/error")
Router.get("/*", errController)


module.exports = Router