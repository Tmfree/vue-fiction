const Mongoose = require('mongoose')
let Schema = Mongoose.Schema
let rankSchema = new Schema({
    coverImg:String,
    title:String,
    type:String,
    topList:Array
})
module.exports = Mongoose.model('rank', rankSchema)
