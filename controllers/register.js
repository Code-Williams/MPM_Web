const aboutMain = require("../models/About");
const User = require("../models/User")
const Point = require("../models/Point")
const { validationResult } = require("express-validator")

const get = async (req, res) => {
    const about = await aboutMain.findAll();

    res.render("register", {
        about, 
        flash : req.flash(),
        user : req.user
    })
}

const post = async (req, res) => {
    let isUserRegistered = true

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        isUserRegistered = false
        const errorsArray = errors.array()
        req.flash("error", `${errorsArray.param} ${errorsArray.msg}`)
    }
    
    const about = await aboutMain.findAll();
    
    const isUsernameFoundInDB = await User.findOne({ where : { username : req.body.username } })
    const isEmailFoundInDB = await User.findOne({ where : { email : req.body.email } })
    const isNumberFoundInDB = await User.findOne({ where : { number : req.body.number } })
    
    

    if(req.body.password !== req.body['password-retype']) {
        if (isUserRegistered) req.flash("error", "پسورد با تکرار آن مطابقت ندارد")
        isUserRegistered = false
    }
    if(isUsernameFoundInDB){
        if (isUserRegistered) req.flash("error", "نام کاربری قبلا استفاده شده است.");
        isUserRegistered = false
    } 
    if(isEmailFoundInDB) {
        if (isUserRegistered) req.flash("error", "ایمیل قبلا استفاده شده است.");
        isUserRegistered = false
    }
    if(isNumberFoundInDB) {
        if (isUserRegistered) req.flash("error", "شماره همراه قبلا استفاده شده است.");
        isUserRegistered = false
    }

    
    if(isUserRegistered){

        const newUser = await User.create({
            username       :     req.body.username,
            password       :     await User.encryptPassword(req.body.password),
            email          :     req.body.email,
            firstName      :     req.body.firstName,
            lastName       :     req.body.lastName,
            number         :     req.body.number,
            userRank       :     "member"
        })

        const newPoint = await Point.create({
            userId         :     newUser.id,
            points         :     0,
            allPoints      :     0
        })

        res.redirect("/login")
    }else{
        res.render("register", {
            about, 
            flash : req.flash(),
            user : req.user
        })
    }

}

module.exports = {
    get, 
    post
}