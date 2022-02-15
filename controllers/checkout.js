const About = require("../models/About")
const Order = require("../models/Order")
const Product = require("../models/Products")
const Address = require("../models/Address")

const checkout = async (req, res) => {
    const about = await About.findAll();
    const products = await Product.findAll();
    const addresses = await Address.findAll({
        where : {
            userId : req.user.id
        }
    })
    const orders = await Order.findAll({
        where :{
            status : "in_basket"
        }
    });

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

    res.render("checkout", {
        about,
        orders,
        products,
        addresses,
        convertToPersian,
        convertToEnglish,
        user : req.user
    })
}

module.exports = checkout