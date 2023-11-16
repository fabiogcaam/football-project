const router = require('express').Router()
const LeagueService = require('../services/league.services')
const { isLoggedIn } = require('../middleware/guard-route')

router.get('/', isLoggedIn, (req, res, next) => {

    LeagueService
        .getAllLeagues()
        .then(({ data }) => {
            res.render('leagues/leagues-list', { leagues: data.response })
        })
        .catch(err => next(err))
})

router.get('/:id/details', isLoggedIn, (req, res, next) => {

    const { id } = req.params

    LeagueService
        .getOneLeague(id)
        .then(({ data }) => {
            res.render('leagues/detail-league', { league: data.response })
        })
        .catch(err => next(err))
})

module.exports = router