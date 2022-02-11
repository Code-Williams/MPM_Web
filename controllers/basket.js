const aboutMain = require("../models/About")
const User = require("../models/User")

const post = async (req, res) => {
    if(!req.user) return res.redirect("/login?redirect=shop");

    const findUser = await User.findByPk(req.user.id)
    findUser.update({
        products : Number(req.user.products) + 1
    })

    res.redirect("/cart")
}

const get = async (req, res) => {

}

module.exports = {
    post,
    get
}