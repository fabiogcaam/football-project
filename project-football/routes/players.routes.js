const route = require('express').Router()
const PlayerService = require('../services/player.services')


route.get('/:teamId/team', (req, res, next) => {

    const { teamId } = req.params

    PlayerService
        .getAllPlayersByTeam(teamId)
        .then(data => {
            console.log(data.data.response)
            res.render('players/players-list', { data: data.data.response[0].players })
        })
        .catch(err => next(err))
})

route.get('/:playerId', (req, res, next) => {

    const { playerId } = req.params

    PlayerService
        .getPlayerById(playerId)
        .then(player => {
            console.log(player.data.response)
            res.render('players/detail-player', { player: player.data.response[0].player })
        })
})

module.exports = route