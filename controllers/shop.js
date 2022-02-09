const aboutMain = require("../models/About");

const shop = async (req, res) => {
    const about = await aboutMain.findAll();
    res.render("shop", {about})
}

module.exports = shop;