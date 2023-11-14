const route = require('express').Router()
const TeamService = require('../services/team.services')


route.get('/league/:leagueId', (req, res, next) => {

    const { leagueId } = req.params

    TeamService
        .getAllTeamsByLeague(leagueId)
        .then(teams => {
            console.log(teams)
            res.render('teams/teams-list', { teams: teams.data.api.teams })
        })
        .catch(err => next(err))
})

module.exports = route