const axios = require('axios')
const FOOTBALL_KEY = proceess.env.FOOTBALL_KEY

class LeagueService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: 'https://api-football-v1.p.rapidapi.com'
        })
    }

    getAllLeagues() {
        return this.axiosApp.get('/v3/leagues',
            {
                headers: {
                    'X-rapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            })
    }

    getOneLeague(league_id) {
        return this.axiosApp.get(`/v3/leagues/${league_id}`,
            {
                headers: {
                    'X-rapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            })
    }

}


const leagueService = new LeagueService()

module.exports = leagueService