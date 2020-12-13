const Mongoose = require("mongoose")
//数据库位置
const dbLocal = "mongodb://127.0.0.1/fiction_20201206"

exports.connect = () => {
    Mongoose.connect(dbLocal)
    let db = Mongoose.connection
    db.once('open', () => {
        console.log("数据库链接成功")
    })
    db.on("disconnected", () => {
        console.log("数据库断开")
    })
    db.on('error', (err) => {
        console.log("链接失败")
    })
    
}