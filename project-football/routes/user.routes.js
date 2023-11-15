const router = require("express").Router()
const { isLoggedIn, checkRole } = require('../middleware/guard-route')


router.get("/perfil", isLoggedIn, (req, res) => {
    res.render("user/detail-user", { user: req.session.currentUser })

})
// router.get("/admin", isLoggedIn, checkRole('ADMIN'), (req, res) => {
//     res.render("user/   ", { user: req.session.currentUser })
// })


