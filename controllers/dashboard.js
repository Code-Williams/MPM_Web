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

const addresses = async (req, res) => {
    const about = await About.findAll()
    const user = await User.findByPk(req.user.id)
    let single = false
    const addresses = await Address.findAll({
        where : {
            userId : req.user.id
        }
    })

    if(req.query.id) single = req.query.id;

    res.render("addresses", {
        about,
        user,
        addresses,
        single,
        flash : req.flash()
    })
}

const newAddresses = async (req, res) => {
    const about = await About.findAll()
    const user = await User.findByPk(req.user.id)
    
    res.render("newAddress", {
        about,
        user,
        flash : req.flash()
    })
}

const newAddressPost = async (req, res) => {
    await Address.create({
        userId : req.user.id,
        name : req.body.addressName,
        address : req.body.address,
        code : req.body.addressCode
    })

    req.flash("success", "آدرس جدید با موفقیت ثبت شد")
    res.redirect("/dashboard/addresses")
}

module.exports = {
    dashboardController,
    orders,
    addresses,
    newAddresses,
    newAddressPost
}