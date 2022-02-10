const aboutMain = require("../models/About")
const passport = require("passport")

const get = async (req, res) => {
    const about = await aboutMain.findAll()
    
    res.render("login", {about, flash : req.flash()})
}

const post = passport.authenticate("local", {
    successRedirect : "/",
    failureRedirect : "/login",
    failureFlash : true,
    session : false
})

module.exports = {
    get,
    post
};