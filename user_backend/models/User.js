const { Schema, model } = require('mongoose')

const userShema = new Schema({
    firstName: String,
    lastName: String,
    avatar: String
})

module.exports = model('User', userShema)