const router = require("express").Router()
const { isLoggedIn, checkRole, isOwner } = require('../middleware/guard-route')
const User = require('../models/User.model')



router.get('/profile', isLoggedIn, (req, res) => {

    res.render('user/detail-user', {
        user: req.session.currentUser,
        isAdminOrOwner: req.session.currentUser.role,
        isAdmin: req.session.currentUser.role === 'ADMIN'
    })

})

router.get("/admin", isLoggedIn, checkRole('ADMIN'), (req, res) => {
    res.render("user/admin", { user: req.session.currentUser })
})


router.post('/addPlayer/:idPlayer', isLoggedIn, (req, res, next) => {

    const { idPlayer } = req.params

    const isFavourite = []

    User
        .findById(idPlayer)
        .then(player => {

        })
})



router.get('/:id/edit', isLoggedIn, isOwner, (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => res.render('user/edit-user', { user: req.session.currentUser }))
        .catch(err => next(err))


})

router.post('/:id/edit', isLoggedIn, isOwner, (req, res, next) => {
    const { username, email, avatar, description } = req.body
    req.session.currentUser.username = username
    req.session.currentUser.email = email
    req.session.currentUser.avatar = avatar
    req.session.currentUser.description = description
    const { id } = req.params

    User
        .findByIdAndUpdate(id, { username, email, avatar, description })
        .then(() => res.redirect(`/user/profile`))
        .catch(err => console.log(err))
})

//Delete

router.post('/:id', isLoggedIn, (req, res) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})


module.exports = router