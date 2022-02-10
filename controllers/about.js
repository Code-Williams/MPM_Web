const aboutMain = require("../models/About")
const offersMain = require("../models/Offers")
const AboutsTops = require("../models/AboutsTops")
const PinnedComments = require("../models/PinnedComments")
const AboutsTopRanks = require("../models/AboutsTopRanks")

const about = async (req, res) => {
    let about = await aboutMain.findAll();
    let aboutTop = await AboutsTops.findAll();
    let offers = await offersMain.findAll();
    let pinnedComments = await PinnedComments.findAll();
    let aboutTopRanks = await AboutsTopRanks.findAll();

    res.render("about", {about, offers, aboutTop, pinnedComments, aboutTopRanks})
}

module.exports = about