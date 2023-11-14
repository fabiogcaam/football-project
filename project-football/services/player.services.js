const axios = require('axios')
const FOOTBALL_KEY = proceess.env.FOOTBALL_KEY
class PlayerService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://api-football-v1.p.rapidapi.com'
        })
    }

    getAllPlayersByTeam(teamId) {
        return this.axiosApp(`/v3/players/squads/${teamId}`, {
            headers: {
                'X-rapidAPI-key': FOOTBALL_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        })
    }

    getPlayerByIdAndName(playerId, playerName) {
        return this.axiosApp(`/v3/players/${playerId}/${playerName}`,
            {
                headers: {
                    'X-rapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            })
    }

}

const PlayerService = new PlayerService()

module.exports = PlayerService