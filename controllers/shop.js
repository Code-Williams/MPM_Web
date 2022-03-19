const aboutMain = require("../models/About");
const Products = require("../models/Products");
const User = require("../models/User")
const Order = require("../models/Order")
const convert = require("../utils/convert")
const Setting = require("../models/Setting")

const all = async (req, res) => {
    const about = await aboutMain.findAll();
    const products = await Products.findAll();
    let isShopAv = await Setting.findOne({
        where :{
            name : "shop"
        }
    })
    isShopAv = isShopAv.value == "on"

    let userOrders = [];
    if(req.user){
        userOrders = await Order.findAll({
            where : {
                userId : req.user.id
            }
        })
    }


    if(isShopAv){
        res.render("shop/shop", {
            about, 
            products,
            userOrders,
            convert,
            user : req.user
        })
    }else{
        res.render("errors/404", {
            user : req.user,
            about,
            flash : req.flash()
        })
    }
}

const singleGet = async (req, res) => {
    const about = await aboutMain.findAll()
    const product = await Products.findByPk(req.params.id)
    const isShopAv = await Setting.findOne({
        where :{
            name : "shop"
        }
    }).value == "on"

    if(isShopAv){
        res.render("shop/single-product", {
            about, 
            product,
            convert,
            user : req.user
        })
    }else{
        res.render("errors/404", {
            user : req.user,
            flash : req.flash(),
            about
        })
    }
}

const singlePost = async(req, res) => {
    const count = (req.body.count) ? Number(req.body.count) : 1

    const findUser = await User.findByPk(req.user.id)
    findUser.update({
        products : Number(req.user.products) + count
    })

    await Order.create({
        userId : req.user.id,
        productId : req.params.id,
        count,
        status : "in_basket"
    })

    res.redirect("/cart")
}

module.exports = {
    all,
    single : {
        get : singleGet,
        post : singlePost
    }
};