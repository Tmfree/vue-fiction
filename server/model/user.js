const Mongoose = require('mongoose')
let Schema = Mongoose.Schema
let userSchema = new Schema({
    uId: { type: String, unique: true },
    uAccount: { type: String, unique: true },
    uPassword: String
})
module.exports = Mongoose.model('user', userSchema)
