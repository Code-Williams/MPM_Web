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

    res.render("dashboard/index", {
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

    res.render("dashboard/order", {
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

    res.render("dashboard/addresses", {
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
    const points = await Point.findOne({
        where : {
            userId : req.user.id
        }
    })
    const about = await About.findAll()
    const user = await User.findByPk(req.user.id)
    
    res.render("dashboard/newAddress", {
        about,
        user,
        points,
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

const wallet = async (req, res) => {
    const about = await About.findAll()
    const points = await Point.findOne({
        where : {
            userId : req.user.id
        }
    })

    res.render("dashboard/wallet", {
        about,
        user : req.user,
        points,
        flash : req.flash()
    })
}

const accountInfo = async (req, res) => {
    const about = await About.findAll()
    const points = await Point.findOne({
        where : {
            userId : req.user.id
        }
    })

    res.render("dashboard/accountInfo", {
        about,
        points,
        user : req.user,
        flash : req.flash()
    })
}

const accountInfo_post = async (req, res) => {
    const findUser = await User.findByPk(req.user.id)

    if(req.body.lastName) findUser.update({ lastName : req.body.lastName })
    if(req.body.firstName) findUser.update({ firstName : req.body.firstName })
    if(req.body.number) findUser.update({ number : req.body.number })
    if(req.body.email) findUser.update({ email : req.body.email })
    if(req.body.codeMelli) findUser.update({ codeMelli : req.body.codeMelli })
    if(req.body.news) findUser.update({ news : req.body.news })
    if(req.body.cardNumber) findUser.update({ cardNumber : req.body.cardNumber })

    req.flash("success", "با موفقیت آپدیت شد")

    res.redirect("/dashboard/information")
}

module.exports = {
    dashboardController,
    orders,
    addresses,
    newAddresses,
    newAddressPost,
    addressesPost,
    wallet,
    accountInfo,
    accountInfo_post
}