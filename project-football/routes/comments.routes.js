const router = require('express').Router()
const { isLoggedIn } = require('../middleware/guard-route')
const Comment = require('../models/Comment.model')

router.post('/players/:idPlayer', isLoggedIn, (req, res, next) => {

    const { body } = req.body
    const { idPlayer } = req.params
    const user = req.session.currentUser

    Comment
        .create({ body, idPlayer, user })
        .then(() => {
            res.redirect(`/players/${idPlayer}`)
        })
        .catch(err => next(err))

})

router.post('/:id/delete-comment', isLoggedIn, (req, res, next) => {

    const { id } = req.params

    Comment
        .findByIdAndDelete(id)
        .then(
            res.redirect('/')
        )
        .catch(err => next(err))
})

module.exports = router