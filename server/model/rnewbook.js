const Mongoose = require('mongoose')
let Schema = Mongoose.Schema
let bookSchema = new Schema({
    bid: { type: String, unique: true },
    catId: String,
    bAuth: String,
    bName: String,
    cat: String,
    cnt: String,
    desc: String,
    rankCnt: String,
    rankNum: String
})
module.exports = Mongoose.model('rnewbook', bookSchema)
