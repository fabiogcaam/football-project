const router = require('express').Router()
const PlayerService = require('../services/player.services')
const { isLoggedIn } = require('../middleware/guard-route')
const Comment = require('../models/Comment.model')
router.get('/:teamId/team', isLoggedIn, (req, res, next) => {

    const { teamId } = req.params

    PlayerService
        .getAllPlayersByTeam(teamId)
        .then(({ data }) => {
            res.render('players/players-list', { data: data.response[0].players })
        })
        .catch(err => next(err))
})

router.get('/:playerId', isLoggedIn, (req, res, next) => {
    console.log('Entra en esta')
    const { playerId } = req.params
    const { userId } = req.session.currentUser

    const promises = [
        PlayerService.getPlayerById(playerId),
        Comment.find({ idPlayer: playerId }).populate('user')
    ]

    Promise.all(promises)
        .then(response => {

            const player = response[0].data.response[0]
            const comments = response[1]

            res.render('players/detail-player', { player, comments })

        })
        .catch(err => next(err))
})
module.exports = router