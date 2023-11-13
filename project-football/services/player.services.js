const axios = require('axios')

class PlayerService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://api-football-v1.p.rapidapi.com/v3/'
        })
    }

    getAllPlayersByTeam() {
        return this.axiosApp('/players/squads', {
            headers: {
                'X-rapidAPI-key': 'clave',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        })
    }

    getPlayerByIdAndSeason(playerId, playerSeason) {
        return this.axiosApp('/players', {
            headers: {
                'X-rapidAPI-key': 'clave',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        })
    }

}

const PlayerService = new PlayerService()

module.exports = PlayerService