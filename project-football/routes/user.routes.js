const router = require("express").Router()
const { isLoggedIn, checkRole } = require('../middleware/guard-route')
const User = require('../models/User.model')



router.get("/perfil", isLoggedIn, (req, res) => {
    res.render("user/detail-user", { user: req.session.currentUser })

})
// router.get("/admin", isLoggedIn, checkRole('ADMIN'), (req, res) => {
//     res.render("user/   ", { user: req.session.currentUser })
// })


router.post('/addPlayer/:idPlayer', isLoggedIn, (req, res, next) => {

    const { idPlayer } = req.params

    const isFavourite = []

    User
        .findById(idPlayer)
        .then(player => {

        })
})

