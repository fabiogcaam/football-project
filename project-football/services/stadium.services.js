const axios = require('axios')
const FOOTBALL_KEY = process.env.FOOTBALL_KEY
class StadiumService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://api-football-v1.p.rapidapi.com'
        })
    }

    getAllStadiumsByCountry(countryName) {
        return this.axiosApp(`/v3/venues/${countryName}`,
            {
                headers: {
                    'X-RapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                },
                params: {

                }
            })
    }

    getStadiumById(stadiumId) {
        return this.axiosApp(`/v3/venues/${stadiumId}`,
            {
                headers: {
                    'X-RapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            })
    }

}

const stadiumService = new StadiumService()

module.exports = stadiumService