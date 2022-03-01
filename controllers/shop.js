const aboutMain = require("../models/About");
const Products = require("../models/Products");
const User = require("../models/User")
const Order = require("../models/Order")
const convert = require("../utils/convert")

const all = async (req, res) => {
    const about = await aboutMain.findAll();
    const products = await Products.findAll();
    let userOrders = [];
    if(req.user){
        userOrders = await Order.findAll({
            where : {
                userId : req.user.id
            }
        })
    }

    res.render("shop/shop", {
        about, 
        products,
        userOrders,
        convert,
        user : req.user
    })
}

const singleGet = async (req, res) => {
    const about = await aboutMain.findAll()
    const product = await Products.findByPk(req.params.id)

    res.render("shop/single-product", {
        about, 
        product,
        convert,
        user : req.user
    })
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