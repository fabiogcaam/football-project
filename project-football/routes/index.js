module.exports = app => {

    const indexRoutes = require("./index.routes")
    app.use("/", indexRoutes)

    const authRoutes = require("./auth.routes")
    app.use("/users", authRoutes)

    const leaguesRoutes = require("./leagues.routes")
    app.use("/leagues", leaguesRoutes)

    const teamsRoutes = require("./teams.routes")
    app.use("/teams", teamsRoutes)

    const playersRoutes = require("./players.routes")
    app.use("/players", playersRoutes)

    const stadiumsRoutes = require("./stadiums.routes")
    app.use("/stadium", stadiumsRoutes)

    const coachsRoutes = require("./coachs.routes")
    app.use("/coach", coachsRoutes)

    const userRoutes = require("./user.routes")
    app.use("/user", userRoutes)

}