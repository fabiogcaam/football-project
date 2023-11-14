const route = require('express').Router()
const StadiumService = require('../services/stadium.services')

route.get('/', (req, res) => {
    StadiumService
    getAllStadiumsByCountry(countryName)
        .then(stadium => {
            res.render('stadiums/detail-stadium')

        })

})
