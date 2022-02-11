const aboutMain = require("../models/About")
const contactMain = require("../models/Contact")

const contact = async (req, res) => {
    const about = await aboutMain.findAll();
    const contact = await contactMain.findAll()

    res.render("contact", {
        about, 
        contact,
        user : req.user
    })
}

module.exports = contact