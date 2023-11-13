const axios = require('axios')

class LeagueService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: 'https://api-football-v1.p.rapidapi.com/v3/'
        })
    }
}




const LeagueService = new LeagueService()

module.exports = LeagueService