const User = require("../models/User")
const Order = require("../models/Order")
const Product = require("../models/Products")
const Point = require("../models/Point")
const Service = require("../models/Services")

const mainPage = async (req, res) => {
    const users = await User.findAll({
        order : [
            ['id', 'ASC']
        ]
    })
    const orders = await Order.findAll()
    const products = await Product.findAll()
    const services = await Service.findAll()
    const points = await Point.findAll({
        order : [
            ['points', 'DESC']
        ]
    })

    const lastProducts = products.slice(products.length - 4, products.length)
    const lastOrders = orders.slice(orders.length - 7, orders.length)
    const lastUsers = users.slice(users.length - 8, users.length)

    res.render("admin/index", {
        user : req.user,
        users,
        orders,
        products,
        lastProducts,
        lastOrders,
        lastUsers,
        points,
        services
    })
}

module.exports = {
    mainPage
}