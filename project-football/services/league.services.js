const axios = require('axios')

class LeagueService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: 'https://api-football-v1.p.rapidapi.com'
        })
    }

    getAllLeague() {
        return this.axiosApp.get('/v3/leagues')
    }

    getOneLeague(league_id) {
        return this.axiosApp.get(`/v3/leagues/${league_id}`)
    }

}


const LeagueService = new LeagueService()

module.exports = LeagueService