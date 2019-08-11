require('dotenv').config()

const app = require('./app')
require('./database')

//usando codigo moderno de javascript para evitar los callbacks
async function main(){
    try{
        const port = app.get('port')
        await app.listen(port)
        console.log(`Server on port ${port}!`)
    } catch (e) {
        console.log('Error que viene desde la funcion Main:',e)
    }
}

main();