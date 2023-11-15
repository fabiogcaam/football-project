const route = require('express').Router()
const CoachService = require('../services/coach.services')


route.get('/:teamId', (req, res, next) => {

    const { teamId } = req.params

    CoachService
        .getCoachByTeam(teamId)
        .then(coach => {
            console.log(coach.data)
            res.render('coachs/detail-coach', { coach: coach.data.response[0] })
        })
        .catch(err => next(err))
})



module.exports = route