const About = require("../models/About")

const ErrorController = async (req, res) => {
    let about = await About.findAll()

    res.render("404", {about})
}

module.exports = ErrorController;