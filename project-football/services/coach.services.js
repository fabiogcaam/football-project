const axios = require('axios')
const FOOTBALL_KEY = process.env.FOOTBALL_KEY

class CoachService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://api-football-v1.p.rapidapi.com',
            headers: {
                'X-RapidAPI-key': FOOTBALL_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        })
    }

    getCoachByTeam(teamId) {
        return this.axiosApp.get(`/v3/coachs`, {
            params: {
                id: teamId
            }
        })
    }

}

const coachService = new CoachService()

module.exports = coachService