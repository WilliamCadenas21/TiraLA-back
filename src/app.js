const express = require('express')
const app = express()
const cors = require('cors')

//Settings
const port = process.env.PORT || 4000
app.set('port', port)

//Middleware
app.use(express.json()) //servidor en formato json
app.use(cors())

//Routes
app.get('/', (req, res) => res.send('User routes'))


module.exports = app;