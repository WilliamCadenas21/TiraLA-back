const express = require('express')
require('dotenv').config()

//initialization
const app = express()

//Settings
const port = process.env.PORT || 3000
app.set('port', port)

//Middleware
app.use(express.json())

//Routes
app.get('/', (req, res) => res.send('Aqui estoy encendido'))

app.listen(port, () => console.log(`app listening on port ${port}!`))