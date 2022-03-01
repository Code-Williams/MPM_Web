const About = require("../models/About")
const News = require("../models/News")

const get = async (req, res) => {
    const about = await About.findAll()
    const news = await News.findAll()

    res.render("news", {
       user : req.user,
       about,
       news,
       flash : req.flash() 
    })
}

module.exports = {
    get
}