const isLoggedIn = (req, res, next) => {
    if(!req.user){
        req.flash("warning", "شما باید وارد حساب کاربری خود شوید")
        res.redirect("/login?redirect=" + req.originalUrl)
        return;
    }

    next()
}

const isNotLoggedIn = (req, res, next) => {
    if(req.user){
        res.redirect("/")
        return;
    }

    next()
}

module.exports = {
    isLoggedIn,
    isNotLoggedIn
}