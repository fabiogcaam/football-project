const router = require('express').Router()
const LeagueService = require('../services/league.services')

router.get('/', (req, res, next) => {

    LeagueService
        .getAllLeagues()
        .then(leagues => res.render('leagues/list', { leagues }))
        .catch(err => next(err))
})

router.get('/:id/details', (req, res, next) => {

    const { id } = req.params

    LeagueService
        .getOneLeague(id)
        .then(league => res.render('leagues/detail-league', league))
        .catch(err => next(err))
})

exports.module = router