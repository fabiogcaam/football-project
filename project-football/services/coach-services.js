const axios = require('axios')
const FOOTBALL_KEY = proceess.env.FOOTBALL_KEY

class CoachService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: 'https://api-football-v1.p.rapidapi.com'
        })
    }

    getByTeam(teamId) {
        return this.axiosApp.get(`/v3/coachs/${teamId}`,
            {
                headers: {
                    'X-rapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            })
    }

    getCoachById(coachs_id) {
        return this.axiosApp.get(`/v3/coachs/${coachs_id}`,
            {
                headers: {
                    'X-rapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            })
    }
}


const coachService = new CoachService()

module.exports = coachService