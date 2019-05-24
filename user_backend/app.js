const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const users = require('./routes/users')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(users)

module.exports = app