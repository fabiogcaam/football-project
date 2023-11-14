const axios = require('axios')
const FOOTBALL_KEY = process.env.FOOTBALL_KEY

class LeagueService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: `https://api-football-v1.p.rapidapi.com`
        })
    }

    getAllLeagues() {
        return this.axiosApp.get(`/v3/leagues`,
            {
                headers: {
                    'X-RapidAPI-Key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            })
    }

    getOneLeague(league_id) {
        return this.axiosApp.get(`/v3/leagues/`,
            {
                headers: {
                    'X-RapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                },
                params: {
                    id: league_id
                }
            })
    }

}


const leagueService = new LeagueService()

module.exports = leagueService