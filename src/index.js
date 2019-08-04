require('dotenv').config()

const app = require('./app')
require('./database')

//usando codigo moderno de javascript para evitar los callbacks
async function main(){
    const port = app.get('port')
    await app.listen(port)
    console.log(`Server on port ${port}!`)
}

main();