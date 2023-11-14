const route = require('express').Router()
const TeamService = require('../services/team.services')


route.get('/', (req, res, next) => {

    TeamService
        .getAllTeamsByLeague(leagueId)
        .then(teams => res.render('teams/teams-list', { teams }))
        .catch(err => next(err))
})

module.exports = route