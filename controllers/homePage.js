const HomeTopObjs = require("../models/HomeTopItems");
const Offers = require("../models/Offers")
const PinnedComments = require("../models/PinnedComments")
const About = require("../models/About")
const News = require("../models/News")
const HomeMainItems = require("../models/HomeMainItems");

const HomeController = async (req, res) => {
    console.log("user", req.user)
    const homeTopItemsMain = await HomeTopObjs.findAll();
    const offersMain = await Offers.findAll();
    const pinnedCommentsMain = await PinnedComments.findAll();
    const aboutMain = await About.findAll();
    const newsMain = await News.findAll();
    const homeMainItemsMain = await HomeMainItems.findAll();

    let homeTopItems = homeTopItemsMain
    let offers = offersMain
    let pinnedComments = pinnedCommentsMain
    let about = aboutMain
    let news = [newsMain[0] || null, newsMain[1] || null, newsMain[2] || null]
    let homeMainItems = homeMainItemsMain

    if(!offers[0]) offers = undefined
    if(!homeTopItems[0]) homeTopItems = undefined
    if(!pinnedComments[0]) pinnedComments = undefined
    if(!about[0]) about = undefined
    if(!news[0]) news = undefined
    if(!homeMainItems[0]) homeMainItems = undefined

    res.render("index", {
        homeTopItems, offers, 
        pinnedComments, 
        about, 
        news, 
        homeMainItems, 
        user : req.user
    });
}

module.exports = HomeController;