const router = require("express").Router()
const { isLoggedIn, checkRole, isOwner } = require('../middleware/guard-route')
const User = require('../models/User.model')



router.get('/profile', isLoggedIn, (req, res) => {

    res.render('user/detail-user', { user: req.session.currentUser })

})

router.get('/:id/edit', isLoggedIn, isOwner, (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => res.render('user/edit-user', user))
        .catch(err => next(err))


})

router.post('/:id/edit', isLoggedIn, isOwner, (req, res, next) => {
    const { username, email, avatar, description } = req.body
    const { id } = req.params

    User
        .findByIdAndUpdate(id, { username, email, avatar, description })
        .then(() => res.redirect(`/user/profile`))
        .catch(err => console.log(err))
})


module.exports = router