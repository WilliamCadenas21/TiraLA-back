require('dotenv').config()
var env = process.env.NODE_ENV || 'production';

var config = {
    development: {
        env,
        port: process.env.PORT || 3000,
        db: process.env.DATABASE || 'mongodb://localhost/articulosem-development'
    },

    production: {
        env,
        port: process.env.PORT || 3000,
        db: process.env.DATABASE || 'mongodb://will:GJk457@ds259347.mlab.com:59347/tirala'
    }
};

module.exports = config[env];
