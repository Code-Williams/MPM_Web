const aboutMain = require("../models/About");
const Products = require("../models/Products")

const all = async (req, res) => {
    const about = await aboutMain.findAll();
    const products = await Products.findAll();

    res.render("shop", {
        about, 
        products,
        user : req.user
    })
}

const single = async (req, res) => {
    const about = await aboutMain.findAll()
    const product = await Products.findByPk(req.params.id)

    res.render("single-product", {
        about, 
        product,
        user : req.user
    })
}

module.exports = {
    all,
    single
};