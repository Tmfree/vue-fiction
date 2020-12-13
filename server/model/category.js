const Mongoose = require('mongoose')
let Schema = Mongoose.Schema
let tagSchema = new Schema({
    tagId: String,
    cName: String
})
let categorySchema = new Schema({
    catId: { type: String, unique: true },
    cName: String,
    total: String,
    tags: [tagSchema]
})

module.exports = Mongoose.model('Category', categorySchema)