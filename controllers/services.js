const About = require("../models/About")

const get = async (req, res) => {
    const about = await About.findAll()

    res.render("services", {
        about,
        user : req.user,
        flash : req.flash()
    })
}

const post = async (req, res) => {

}

module.exports = {
    get,
    post
}