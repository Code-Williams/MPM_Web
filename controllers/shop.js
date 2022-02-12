const aboutMain = require("../models/About");
const Products = require("../models/Products");
const User = require("../models/User")
const Order = require("../models/Order")

const all = async (req, res) => {
    const about = await aboutMain.findAll();
    const products = await Products.findAll();

    res.render("shop", {
        about, 
        products,
        user : req.user
    })
}

const singleGet = async (req, res) => {
    const about = await aboutMain.findAll()
    const product = await Products.findByPk(req.params.id)

    res.render("single-product", {
        about, 
        product,
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
        status : "در سبد خرید"
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