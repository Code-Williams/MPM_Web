const HomeTopObjs = require("../models/HomeTopItems");
const Offers = require("../models/Offers")
const PinnedComments = require("../models/PinnedComments")

const HomeController = async (req, res) => {
    const homeTopItemsMain = await HomeTopObjs.findAll();
    const offersMain = await Offers.findAll();
    const pinnedCommentsMain = await PinnedComments.findAll();

    let homeTopItems = homeTopItemsMain
    let offers = offersMain
    let pinnedComments = pinnedCommentsMain

    if(!offers[0]) offers = undefined
    if(!homeTopItems[0]) homeTopItems = undefined
    if(!pinnedComments[0]) pinnedComments = undefined

    res.render("index", {homeTopItems, offers, pinnedComments})
}

module.exports = HomeController;