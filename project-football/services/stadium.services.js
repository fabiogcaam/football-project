const axios = require('axios')
const FOOTBALL_KEY = proceess.env.FOOTBALL_KEY
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
                    'X-rapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            })
    }

    getStadiumById(stadiumId) {
        return this.axiosApp(`/v3/venues/${stadiumId}`,
            {
                headers: {
                    'X-rapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            })
    }

}

const StadiumService = new StadiumService()

module.exports = StadiumService