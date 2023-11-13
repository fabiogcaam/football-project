const axios = require('axios')

class CoachService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: 'https://api-football-v1.p.rapidapi.com'
        })
    }
    getAllLeague() {
        return this.axiosApp.get('/v3/coachs')
    }
    getOneLeague(coachs_id) {
        return this.axiosApp.get(`/v3/coachs/${coachs_id}`)
    }
}


const CoachService = new CoachService()

module.exports = CoachService