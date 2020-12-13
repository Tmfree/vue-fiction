const Mongoose = require('mongoose')
let Schema = Mongoose.Schema
let userInfoSchema = new Schema({
    uId: { type: String, unique: true },
    nickName: String,
    gender: String,
    avatarUrl: String
}, { timestamps: true })
module.exports = Mongoose.model('userinfo', userInfoSchema)
