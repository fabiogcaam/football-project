const axios = require('axios')

class StadiumService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://api-football-v1.p.rapidapi.com'
        })
    }

    getAllStadiumsByCountry(countryName) {
        return this.axiosApp(`/v3/venues/${countryName}`, {
            headers: {
                'X-rapidAPI-key': 'clave',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        })
    }

    getStadiumById(stadiumId) {
        return this.axiosApp(`/v3/venues/${stadiumId}`, {
            headers: {
                'X-RapidAPI-Key': 'clave',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        })
    }

}

const StadiumService = new StadiumService()

module.exports = StadiumService