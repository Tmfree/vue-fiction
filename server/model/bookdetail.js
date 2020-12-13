const Mongoose = require('mongoose')
let Schema = Mongoose.Schema
let bookSchema = new Schema({
    bid: { type: String, unique: true },
    title: String,
    tag: String,
    wordCount: String,
    summary: String,
    ticket: String,
    rewardCount: String,
    starScore: String,
    fansNum: String,
    cTotal: String,
    catalog: Array
})
module.exports = Mongoose.model('bookdetail', bookSchema)
