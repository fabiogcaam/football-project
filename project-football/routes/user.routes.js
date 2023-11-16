const router = require("express").Router()
const { isLoggedIn, checkRole, isOwner } = require('../middleware/guard-route')
const User = require('../models/User.model')

router.get('/profile', isLoggedIn, (req, res) => {

    res.render('user/profile', { user: req.session.currentUser })

})

router.get('/:id/detail', isLoggedIn, checkRole("ADMIN"), (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => {
            res.render('user/detail-user', user)
        })
        .catch(err => next(err))
})

router.get("/list", isLoggedIn, checkRole("ADMIN"), (req, res, next) => {

    User
        .find()
        .then(users => {
            console.log("entramos aquí")
            res.render('user/user-list',
                {
                    users: users,
                    isAdmin: req.session.currentUser.role === 'ADMIN'
                })
        })
        .catch(err => next(err))

})

router.post('/addPlayer/:idPlayer', isLoggedIn, (req, res, next) => {

    const { idPlayer } = req.params

    User
        .findById(req.session.currentUser.id)
        .then(user => {
            isFavourite.push(idPlayer)
            console.log(isFavourite)
        })
        .catch(err => next(err))

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

router.post('/:id', isLoggedIn, (req, res) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

module.exports = router