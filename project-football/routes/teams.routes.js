const router = require('express').Router()
const TeamService = require('../services/team.services')
const { isLoggedIn } = require('../middleware/guard-route')

router.get('/league/:leagueId', isLoggedIn, (req, res, next) => {

    const { leagueId } = req.params

    TeamService
        .getAllTeamsByLeague(leagueId)
        .then(({ data }) => {
            res.render('teams/teams-list', { teams: data.api.teams })
        })
        .catch(err => next(err))
})

router.get('/:teamId/details', isLoggedIn, (req, res, next) => {

    const { teamId } = req.params

    TeamService
        .getTeamById(teamId)
        .then(({ data }) => {
            res.render('teams/detail-team', { team: data.response[0] })
        })
        .catch(err => next(err))
})

module.exports = router