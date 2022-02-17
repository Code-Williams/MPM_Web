const User = require("../models/User")
const Order = require("../models/Order")
const Product = require("../models/Products")
const Point = require("../models/Point")
const Service = require("../models/Services")
const Ticket = require("../models/Ticket")

const mainPage = async (req, res) => {
    const users = await User.findAll({
        order : [
            ['id', 'ASC']
        ]
    })
    const orders = await Order.findAll()
    const products = await Product.findAll()
    const services = await Service.findAll()
    const ticketCount = await Ticket.count()
    const points = await Point.findAll({
        order : [
            ['points', 'DESC']
        ]
    })

    const lastProducts = products.slice(products.length - 4, products.length)
    const lastOrders = orders.slice(orders.length - 7, orders.length)
    const lastUsers = users.slice(users.length - 8, users.length)

    res.render("admin/index", {
        user : req.user,
        flash : req.flash(),
        users,
        orders,
        products,
        lastProducts,
        lastOrders,
        lastUsers,
        points,
        services,
        ticketCount,
        pageName : "داشبورد"
    })
}

const tickets = async (req, res) => {
    if(!req.query.id){
        const ticketCount = await Ticket.count()
        const tickets = await Ticket.findAll()
    
        res.render("admin/tickets", {
            user : req.user,
            ticketCount,
            tickets, 
            flash : req.flash(),
            pageName : "تیکت ها"
        })
    }else if(req.query.id && req.query.action == "delete"){
        await Ticket.destroy({
            where : {
                id : req.query.id
            }
        })

        req.flash("success", "تیکت با موفقیت حذف شد")
        res.redirect("/admin/tickets")
    }
}

module.exports = {
    mainPage,
    tickets
}