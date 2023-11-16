require("dotenv").config()
require("./db")

const express = require("express")
const app = express()

require("./config/index")(app)
require("./config/session.config")(app)


const capitalize = require("./utils/capitalize");
const projectName = "Iron Football";

app.locals.appTitle = `${capitalize(projectName)}`

require('./routes')(app)

require("./error-handling")(app)

module.exports = app
