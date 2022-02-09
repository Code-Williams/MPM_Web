const aboutMain = require("../models/About")
const offersMain = require("../models/Offers")

const about = async (req, res) => {
    let about = await aboutMain.findAll();
    let offers = await offersMain.findAll();

    res.render("about", {about, offers})
}

module.exports = about