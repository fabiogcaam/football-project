const router = require('express').Router()
const StadiumService = require('../services/stadium.services')
const { isLoggedIn } = require('../middleware/guard-route')

router.get('/:stadiumId', isLoggedIn, (req, res, next) => {

    const { stadiumId } = req.params

    StadiumService
        .getStadiumById(stadiumId)
        .then(({ data }) => {
            res.render('stadiums/detail-stadium', { stadium: data.response[0] })
        })
        .catch(err => next(err))
})

module.exports = router