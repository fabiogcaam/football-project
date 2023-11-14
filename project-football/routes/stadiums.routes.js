const route = require('express').Router()
const StadiumService = require('../services/stadium.services')

route.get('/', (req, res, next) => {
    StadiumService
    getAllStadiumsByCountry(countryName)
        .then(stadium => {
            res.render('stadiums/detail-stadium', { stadium })

        })
        .catch(err => next(err))

    route.get('/:id/details', (req, res, next) => {

        const { stadiumId } = req.params

        StadiumService
            .getStadiumById(stadiumId)
            .then(stadium => {
                res.render('stadiums/detail-stadium', { stadium })
            })
            .catch(err => next(err))
    })
})


module.exports = route