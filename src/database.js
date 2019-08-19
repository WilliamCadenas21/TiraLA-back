const mongoose = require('mongoose')
const config = require('../config/config')

const URI = config.db

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify: false
})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('Db is connected in mode '+config.env)
}).catch((e)=>{
    console.log('Hubo un problema con la base de datos:',e)
})