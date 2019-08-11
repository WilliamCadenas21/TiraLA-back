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
}).catch((e)=>{
    console.log('Hubo un problema con la base de datos:',e)
})