const aboutMain = require("../models/About")
const passport = require("passport")

const get = async (req, res) => {
    if(req.user) return res.redirect("/")

    const about = await aboutMain.findAll()
    
    res.render("login", {
        about, 
        flash : req.flash(), 
        user : req.user
    })
}

const post = passport.authenticate("local", {
    successRedirect : "/",
    failureRedirect : "/login",
    failureFlash : true,
    session : true
})

module.exports = {
    get,
    post
};