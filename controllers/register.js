const aboutMain = require("../models/About")
const User = require("../models/User")

const get = async (req, res) => {
    const about = await aboutMain.findAll();

    res.render("register", {about})
}

const post = async (req, res) => {
    const about = await aboutMain.findAll();

    if(req.body.password !== req.body['password-retype']) return res.render("register", {error : "کلمه عبور با تکرار آن یکسان نیست.", about});

    const newUser = await User.create({
        username : req.body.username,
        password : req.body.password,
        email : req.body.email,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        number : req.body.number
    })

    res.redirect("/login")

}

module.exports = {
    get, 
    post
}