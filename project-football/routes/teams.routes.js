const route = require('express').Router()
const TeamService = require('../services/team.services')
const { isLoggedIn } = require('../middleware/guard-route')

route.get('/league/:leagueId', isLoggedIn, (req, res, next) => {

    const { leagueId } = req.params

    TeamService
        .getAllTeamsByLeague(leagueId)
        .then(teams => {
            console.log(teams)
            res.render('teams/teams-list', { teams: teams.data.api.teams })
        })
        .catch(err => next(err))
})

route.get('/:teamId/details', isLoggedIn, (req, res, next) => {

    const { teamId } = req.params

    TeamService
        .getTeamById(teamId)
        .then(team => {
            console.log(team.data.response[0])
            res.render('teams/detail-team', { team: team.data.response[0] })
        })
        .catch(err => next(err))
})

module.exports = route