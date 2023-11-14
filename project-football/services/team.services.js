const axios = require('axios')
const FOOTBALL_KEY = proceess.env.FOOTBALL_KEY
class TeamService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://api-football-v1.p.rapidapi.com'
        })
    }

    getAllTeamsByLeague(leagueId) {
        return this.axiosApp(`/v2/teams/league/${leagueId}`,
            {
                headers: {
                    'X-RapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            })
    }

    getTeamById(teamId) {
        return this.axiosApp(`/v3/teams/${teamId}`,
            {
                headers: {
                    'X-RapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            })
    }

}

const teamService = new TeamService()

module.exports = teamService