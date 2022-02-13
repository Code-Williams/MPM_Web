const About = require("../models/About")
const User = require("../models/User")
const Address = require("../models/Address")
const Order = require("../models/Order")
const Product = require("../models/Products")

const dashboardController = async (req, res) => {
    const about = await About.findAll();
    const user = await User.findByPk(req.user.id);
    const address = await Address.findAll({
        where : {
            userId : req.user.id
        }
    }) || []

    res.render("user_interface", {
        about, 
        user, 
        address,
        flash : req.flash()
    })
}

const orders = async (req, res) => {
    const about = await About.findAll();
    const user = await User.findByPk(req.user.id);
    const tab = req.query.activeTab || "in_progress"
    const results = await Order.findAll({ where : {userId : req.user.id, status : tab} })
    const products = await Product.findAll();

    res.render("dashboardOrder", {
        about,
        user,
        tab,
        results,
        products,
        flash : req.flash()
    })
}

module.exports = {
    dashboardController,
    orders
}