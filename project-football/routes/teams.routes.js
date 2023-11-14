const router = require('express').Router()
const TeamService = require('../services/team.services')

router.get('/', (req, res, next) => {

    TeamService
        .getAllTeamsByLeague(leagueId)
        .then(teams => res.render('teams/teams-list', { teams }))
})