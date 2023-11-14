const route = require('express').Router()
const PlayerService = require('../services/player.services')


route.get('/:teamId/team', (req, res, next) => {

    const { teamId } = req.params

    PlayerService
        .getAllPlayersByTeam(teamId)
        .then(players => {
            console.log(teams)
            res.render('teams/teams-list', { players: players.data.response.team })
        })
        .catch(err => next(err))
})

module.exports = route