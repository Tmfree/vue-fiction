const Mongoose = require('mongoose')
let Schema = Mongoose.Schema
let likeSchema = new Schema({
    bid: String,
    uId:String,
    bName: String
})
module.exports = Mongoose.model('like', likeSchema)
