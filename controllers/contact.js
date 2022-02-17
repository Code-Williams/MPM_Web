const aboutMain = require("../models/About")
const contactMain = require("../models/Contact")
const Ticket = require("../models/Ticket")

const get = async (req, res) => {
    const about = await aboutMain.findAll();
    const contact = await contactMain.findAll()

    res.render("contact", {
        about, 
        contact,
        flash : req.flash(),
        user : req.user
    })
}

const post = async(req, res) => {
    let { name, email, subject, message, number } = req.body;

    if(!name) name = `${req.user.firstName} ${req.user.lastName}`
    if(!email) email = req.user.email
    if(!number) number = req.user.number

    const contact = await Ticket.create({
        name,
        email,
        subject,
        number,
        message,
    })
    req.flash("success", "تیکت شما با موفقیت ارسال شد")
    res.redirect("/contact")
}

module.exports = {
    post,
    get
}