const aboutMain = require("../models/About")
const User = require("../models/User")

const get = async (req, res) => {
    const about = await aboutMain.findAll();

    res.render("register", {about, flash : req.flash()})
}

const post = async (req, res) => {
    const about = await aboutMain.findAll();
    
    const isUsernameFoundInDB = await User.findOne({ where : { username : req.body.username } })
    const isEmailFoundInDB = await User.findOne({ where : { email : req.body.email } })
    const isNumberFoundInDB = await User.findOne({ where : { number : req.body.number } })
    
    let isUserRegistered = true

    if(req.body.password !== req.body['password-retype']) {
        req.flash("error", "پسورد با تکرار آن مطابقت ندارد")
        isUserRegistered = false
    }
    if(isUsernameFoundInDB){
        req.flash("error", "نام کاربری قبلا استفاده شده است.");
        isUserRegistered = false
    } 
    if(isEmailFoundInDB) {
        req.flash("error", "ایمیل قبلا استفاده شده است.");
        isUserRegistered = false
    }
    if(isNumberFoundInDB) {
        req.flash("error", "شماره همراه قبلا استفاده شده است.");
        isUserRegistered = false
    }

    
    if(isUserRegistered){

        const newUser = await User.create({
            username       :     req.body.username,
            password       :     req.body.password,
            email          :     req.body.email,
            firstName      :     req.body.firstName,
            lastName       :     req.body.lastName,
            number         :     req.body.number,
            userRank       :     "member"
        })

        res.redirect("/login")
    }else{
        res.render("register", {about, flash : req.flash()})
    }

}

module.exports = {
    get, 
    post
}