const isLoggedIn = (req, res, next) => {
    if (req.session.currentUser) {
        next()
    } else {
        res.redirect('/auth/login')
    }
}

const isLoggedOut = (req, res, next) => {
    if (!req.session.currentUser) {
        next()
    } else {
        res.redirect('/')
    }
}

const checkRole = (...admittedRoles) => (req, res, next) => {

    const { role } = req.session.currentUser

    if (admittedRoles.includes(role)) {
        next()
    } else {
        res.redirect('/login')
    }
}

const isOwner = (req, res, next) => {
    const { id } = req.params
    const { role } = req.session.currentUser

    if (id == req.session.currentUser._id || role == "ADMIN") {
        next()
    } else {
        res.render('/')
    }
}

module.exports = {
    isLoggedIn,
    isLoggedOut,
    checkRole,
    isOwner
}