require('dotenv').config()
const env = process.env.NODE_ENV || 'production';

const config = {
    development: {
        env,
        port: process.env.PORT || 4000,
        db: 'mongodb://localhost/testdb'
    },

    production: {
        env,
        port: process.env.PORT || 4000,
        db: process.env.DATABASE,
        db2: process.env.DATABASE2 
    }
}

module.exports = config[env]
