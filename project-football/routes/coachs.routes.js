const router = require('express').Router()
const CoachService = require('../services/coach.services')

router.get('/:teamId', (req, res, next) => {
    const { teamId } = req.params

    CoachService
        .getCoachByTeam(teamId)
        .then(({ data }) => {
            res.render('coachs/detail-coach', { coach: data.response[0] })
        })
        .catch(err => next(err))
})

module.exports = router