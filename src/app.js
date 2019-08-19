const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require('morgan')
const config = require('../config/config')


//Settings
const port = config.port
app.set('port', port)

//Middleware
app.use(morgan('dev'))
app.use(express.json()) //servidor en formato json
app.use(cors())

//Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/posts', require('./routes/posts'))


module.exports = app;