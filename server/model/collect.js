const Mongoose = require('mongoose')
let Schema = Mongoose.Schema
let collectSchema = new Schema({
    bid: String,
    uId:String,
    bName: String
})
module.exports = Mongoose.model('collect', collectSchema)
