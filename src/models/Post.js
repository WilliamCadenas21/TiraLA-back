const { Schema, model } = require('mongoose')

const postSchema = new Schema({
    hashtag: String,
    content: {
        type: String,
        required: true
    },
    author: String
},{
    timestamps: true 
})

module.exports = model('Post', postSchema)