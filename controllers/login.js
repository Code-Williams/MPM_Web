const aboutMain = require("../models/About")

const login = async (req, res) => {
    const about = await aboutMain.findAll()

    res.render("login", {about})
}

module.exports = login;