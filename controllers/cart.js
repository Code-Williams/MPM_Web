const About = require("../models/About")
const Order = require("../models/Order")
const Product = require("../models/Products")
const OfferCode = require("../models/OfferCode")
const User = require("../models/User")
const convert = require("../utils/convert")

const cart = async (req, res) => {
    if(req.query.delete){
        const orderData = await Order.findByPk(req.query.delete)
        const userData = await User.findByPk(req.user.id)

        if(orderData){
            await userData.update({
                products : Number(req.user.products) - Number(orderData.count)
            })

            await Order.destroy({
                where : {
                    id : req.query.delete
                }
            })
        }

        res.redirect("/cart")
        return;
    }

    const about = await About.findAll();
    const products = await Product.findAll();
    const offerCodes = await OfferCode.findAll();
    const orders = await Order.findAll({
        where :{
            userId : req.user.id,
            status : "in_basket"
        }
    })

    var persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
    arabicNumbers  = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
    convertToEnglish = function (str){
        str = String(str)

        for(var i=0; i<10; i++){ str = str.replaceAll(persianNumbers[i], i).replaceAll(arabicNumbers[i], i); }

        return str;
    },

    convertToPersian = function(str){
        str = String(str)

        for(var i=0; i<10; i++){ str = str.replaceAll(i, persianNumbers[i]).replaceAll(arabicNumbers[i], persianNumbers[i]); }

        return str
    };

    res.render("shop/cart", {about, orders, user : req.user, products, convertToEnglish, convertToPersian, offerCodes})
}

module.exports = cart