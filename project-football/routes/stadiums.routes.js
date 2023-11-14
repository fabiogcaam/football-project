const route = require('express').Router()
const StadiumService = require('../services/stadium.services')


route.get('/:stadiumId', (req, res, next) => {

    const { stadiumId } = req.params

    StadiumService
        .getStadiumById(stadiumId)
        .then(stadium => {
            console.log(stadium.data)
            res.render('stadiums/detail-stadium', { stadium: stadium.data.response[0] })
        })
        .catch(err => next(err))
})



module.exports = route