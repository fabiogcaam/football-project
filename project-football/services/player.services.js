const axios = require('axios')
const FOOTBALL_KEY = process.env.FOOTBALL_KEY

class PlayerService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://api-football-v1.p.rapidapi.com'
        })
    }

    getAllPlayersByTeam(teamId) {
        return this.axiosApp(`/v3/players/squads`, {
            headers: {
                'X-RapidAPI-key': FOOTBALL_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            },
            params: {
                team: teamId
            }
        })
    }

    getPlayerById(playerId) {
        return this.axiosApp(`/v3/players`, {
            headers: {
                'X-RapidAPI-key': FOOTBALL_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            },
            params: {
                id: playerId,
                season: '2020'
            }
        })
    }

}

const playerService = new PlayerService()

module.exports = playerService