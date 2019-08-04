const mongoose = require('mongoose')

const URI = process.env.DATABASE || 'mongodb://localhost/databasetest'

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify: false
})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('Db is connected')
})