const About = require("../models/About")
const Service = require("../models/Services")

const get = async (req, res) => {
    const about = await About.findAll()

    res.render("services", {
        about,
        user : req.user,
        flash : req.flash()
    })
}

const post = async (req, res) => {
    await Service.create({
        file : req.file.filename,
        username : req.body.name,
        number : req.body.number,
        email : req.body.email
    })
    req.flash("success", "فایل با موفقیت آپلود شد. مدیریت سایت به زودی با شما تماس خواهند گرفت.")
    res.redirect("/services")
}

module.exports = {
    get,
    post
}