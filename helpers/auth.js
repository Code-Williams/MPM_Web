const isLoggedIn = (req, res, next) => {
    if(!req.user){
        req.flash("warning", "شما باید وارد حساب کاربری خود شوید")
        res.redirect("/login?redirect=" + req.originalUrl)
    }

    next()
}

const isNotLoggedIn = (req, res, next) => {
    if(req.user){
        res.redirect("/")
    }

    next()
}

module.exports = {
    isLoggedIn,
    isNotLoggedIn
}