require("dotenv").config()
require("./db")

const express = require("express")
const app = express()

require("./config/index")(app)
require("./config/session.config")(app)

<<<<<<< HEAD
const capitalize = require("./utils/capitalize")
const projectName = "project-football"
=======
// default value for title local
const capitalize = require("./utils/capitalize");
const projectName = "Iron Football";
>>>>>>> 90b1b996d708a443a5fc301257a752fc3b9fe167

app.locals.appTitle = `${capitalize(projectName)}`

require('./routes')(app)

require("./error-handling")(app)

module.exports = app
