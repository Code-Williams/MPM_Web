const About = require("../models/About")

const ErrorController = async (req, res) => {
    let about = await About.findAll()

    res.render("errors/404", {
        about,
        user : req.user
    })
}

module.exports = ErrorController;