const About = require("../models/About")
const User = require("../models/User")
const Address = require("../models/Address")
const Order = require("../models/Order")
const Product = require("../models/Products")
const Point = require("../models/Point")

const dashboardController = async (req, res) => {
    const about = await About.findAll();
    const user = await User.findByPk(req.user.id);
    const points = await Point.findOne({
        where : {
            userId : req.user.id
        }
    })
    const address = await Address.findAll({
        where : {
            userId : req.user.id
        }
    }) || []

    res.render("user_interface", {
        about, 
        user, 
        address,
        points,
        flash : req.flash()
    })
}

const orders = async (req, res) => {
    const about = await About.findAll();
    const user = await User.findByPk(req.user.id);
    const tab = req.query.activeTab || "in_progress"
    const points = await Point.findOne({
        where : {
            userId : req.user.id
        }
    })
    const results = await Order.findAll({ where : {userId : req.user.id, status : tab} })
    const products = await Product.findAll();

    res.render("dashboardOrder", {
        about,
        user,
        tab,
        results,
        products,
        points,
        flash : req.flash()
    })
}

const addresses = async (req, res) => {
    const about = await About.findAll()
    const user = await User.findByPk(req.user.id)
    const points = await Point.findOne({
        where : {
            userId : req.user.id
        }
    })
    let single = false
    let addresses = await Address.findAll({
        where : {
            userId : req.user.id
        }
    })

    if(req.query.id) single = req.query.id;

    if(single) addresses = await Address.findByPk(single)

    res.render("addresses", {
        about,
        user,
        addresses,
        single,
        points,
        flash : req.flash()
    })
}

const addressesPost = async (req, res) => {

    const address = await Address.findByPk(req.query.id)

    if(address){
        await address.update({
            name : req.body.addressName,
            address : req.body.address,
            code : req.body.addressCode
        })

        req.flash("success", "آدرس با موفقیت ویرایش شد")
        res.redirect("/dashboard/addresses")
    }else{
        req.flash("error", "آدرس مورد نظر پیدا نشد")
        res.redirect("/dashboard/addresses")
    }

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
    newAddressPost,
    addressesPost
}