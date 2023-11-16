const route = require('express').Router()
const LeagueService = require('../services/league.services')
const { isLoggedIn } = require('../middleware/guard-route')

route.get('/', isLoggedIn, (req, res, next) => {

    LeagueService
        .getAllLeagues()
        .then(data => {
            console.log(data.data.response)
            res.render('leagues/leagues-list', { leagues: data.data.response })
        })
        .catch(err => next(err))
})

route.get('/:id/details', isLoggedIn, (req, res, next) => {

    const { id } = req.params

    LeagueService
        .getOneLeague(id)
        .then(league => {
            res.render('leagues/detail-league', { league: league.data.response })
        })
        .catch(err => next(err))
})

module.exports = route