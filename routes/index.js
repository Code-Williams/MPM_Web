const express = require("express")
const { isLoggedIn, isNotLoggedIn, isUserAdmin } = require("../helpers/auth")
const { body } = require("express-validator")
const Router = express.Router()

const adminController = require("../controllers/admin")
Router.get("/admin", isLoggedIn, isUserAdmin, adminController.mainPage)

const HomeController = require("../controllers/homePage")
Router.get("/", HomeController)

const AboutController = require("../controllers/about")
Router.get("/about", AboutController)

const CartController = require("../controllers/cart")
Router.get("/cart", isLoggedIn, CartController)

const CheckoutController = require("../controllers/checkout")
Router.get("/checkout", isLoggedIn, CheckoutController)

const contactController = require("../controllers/contact")
Router.get("/contact", contactController)

const loginController = require("../controllers/login")
Router.get("/login", isNotLoggedIn, loginController.get)
Router.post('/login', loginController.post, loginController.func);


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

const { dashboardController, orders, addresses, newAddresses, newAddressPost } = require("../controllers/dashboard")
Router.get("/dashboard", isLoggedIn, dashboardController)
Router.get("/dashboard/orders", isLoggedIn, orders)
Router.get("/dashboard/addresses", isLoggedIn, addresses)
Router.get("/dashboard/addresses/new", isLoggedIn, newAddresses)
Router.post("/dashboard/addresses/new", isLoggedIn, newAddressPost)

const ShopController = require("../controllers/shop")
Router.get("/products/:id", ShopController.single.get)
Router.post("/products/:id", isLoggedIn, ShopController.single.post)
Router.get("/shop", ShopController.all)

const LogoutController = require("../controllers/logout")
Router.get("/logout", isLoggedIn, LogoutController.get)

const addressController = require("../controllers/addrss")
Router.post("/address", addressController.post)

const errController = require("../controllers/error")
Router.get("/*", errController)


module.exports = Router