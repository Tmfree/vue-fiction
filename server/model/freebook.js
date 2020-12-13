const Mongoose = require('mongoose')
let Schema = Mongoose.Schema
let bookSchema = new Schema({
    bid: { type: String, unique: true },
    catId: String,
    tagId: String,
    bAuth: String,
    bName: String,
    cat: String,
    cid: String,
    cnt: String,
    desc: String,
    state: String
})
module.exports = Mongoose.model('freebook', bookSchema)
