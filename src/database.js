const mongoose = require('mongoose')
const config = require('../config/config')

const URI = config.db
const URI2 = config.db2

connection = (uri) => {
    console.log(uri)
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify: false
    })
    
    const connection = mongoose.connection
    
    connection.once('open', () => {
        console.log('Db is connected at first attempt in mode '+config.env)
    }).catch((e)=>{
        connection(URI2)
    })
}

connection(URI)