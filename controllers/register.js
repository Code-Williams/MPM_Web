const aboutMain = require("../models/About")

const register = async (req, res) => {
    const about = await aboutMain.findAll();

    res.render("register", {about})
}

module.exports = register