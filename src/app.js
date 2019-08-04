const express = require('express')
const cors = require('cors')
const app = express()


//Settings
const port = process.env.PORT || 4000
app.set('port', port)

//Middleware
app.use(express.json()) //servidor en formato json
app.use(cors())

//Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/posts', require('./routes/posts'))


module.exports = app;