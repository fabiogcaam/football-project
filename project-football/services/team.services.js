const axios = require('axios')

class TeamService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://api-football-v1.p.rapidapi.com'
        })
    }

    getAllTeamsByLeague(leagueId) {
        return this.axiosApp(`/v2/teams/league/${leagueId}`, {
            headers: {
                'X-rapidAPI-key': 'clave',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        })
    }

    getTeamById(teamId) {
        return this.axiosApp(`/v3/teams/${teamId}`, {
            headers: {
                'X-RapidAPI-Key': 'clave',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        })
    }

}

const TeamService = new TeamService()

module.exports = TeamService