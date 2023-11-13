const axios = require('axios')
const FOOTBALL_KEY = proceess.env.FOOTBALL_KEY
class CoachService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: 'https://api-football-v1.p.rapidapi.com'
        })
    }
    getAllLeague() {
        return this.axiosApp.get('/v3/coachs',
            {
                headers: {
                    'X-rapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            })
    }
    getOneLeague(coachs_id) {
        return this.axiosApp.get(`/v3/coachs/${coachs_id}`,
            {
                headers: {
                    'X-rapidAPI-key': FOOTBALL_KEY,
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            })
    }
}


const CoachService = new CoachService()

module.exports = CoachService