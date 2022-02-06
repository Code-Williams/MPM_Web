const HomeTopObjs = require("../models/HomeTopItems");
const Offers = require("../models/Offers")
const PinnedComments = require("../models/PinnedComments")
const About = require("../models/About")
const News = require("../models/News")

const HomeController = async (req, res) => {
    const homeTopItemsMain = await HomeTopObjs.findAll();
    const offersMain = await Offers.findAll();
    const pinnedCommentsMain = await PinnedComments.findAll();
    const aboutMain = await About.findAll();
    const newsMain = await News.findAll();

    let homeTopItems = homeTopItemsMain
    let offers = offersMain
    let pinnedComments = pinnedCommentsMain
    let about = aboutMain
    let news = [newsMain[0] || null, newsMain[1] || null, newsMain[2] || null]

    if(!offers[0]) offers = undefined
    if(!homeTopItems[0]) homeTopItems = undefined
    if(!pinnedComments[0]) pinnedComments = undefined
    if(!about[0]) about = undefined
    if(!news[0]) news = undefined

    res.render("index", {homeTopItems, offers, pinnedComments, about, news})
}

module.exports = HomeController;