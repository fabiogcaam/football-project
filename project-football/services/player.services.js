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

    getPlayerByIdAndName(playerId, playerName) {
        return this.axiosApp(`/v3/players/${playerId}/${playerName}`,
            {
                headers: {
                    'X-RapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            })
    }

}

const playerService = new PlayerService()

module.exports = playerService