const aboutMain = require("../models/About")
const passport = require("passport")

const get = async (req, res) => {
    const about = await aboutMain.findAll()
    
    res.render("login", {
        about, 
        flash : req.flash(), 
        user : req.user
    })
}

const post = passport.authenticate("local", {
    failureRedirect : "/login",
    failureFlash : true,
    session : true
})

const func = (req, res) => {
    var redirectTo = req.session.redirectTo || "/"
    delete req.session.redirectTo
    res.redirect(redirectTo)
}

module.exports = {
    get,
    post,
    func
};