const Address = require("../models/Address")

const post = (req, res) => {
    if(req.body.delete){
        Address.destroy({
            where: {
                id: req.query.id
            }
        })
        .then(() => {
            req.flash("success", "آدرس مورد نظر حذف شد")
            res.redirect("/dashboard")
        })
    }else if(req.body.edit){
        res.redirect(`/dashboard/addresses?id=${req.query.id}&action=edit`)
    }
}

module.exports = {
    post
}