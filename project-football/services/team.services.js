const axios = require('axios')
const FOOTBALL_KEY = process.env.FOOTBALL_KEY

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
        return this.axiosApp(`/v3/teams`,
            {
                headers: {
                    'X-RapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                },
                params: {
                    id: teamId
                }
            })
    }

}

const teamService = new TeamService()

module.exports = teamService