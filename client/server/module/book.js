const path = require('path')
const tool = require('../utils/tool')
const dataIO = require('../utils/dataio')
let getBook = require("../request/getBook")
let getCatalog = require("../request/getCatalog")
async function getBookModule(data = {}) {
    let { tokenCode, bid } = data
    let bookInfo = {}, osInfo = { collect: 0, like: 0 }
    //已登录
    if (tokenCode == 0) {
        let collectFilePath = path.resolve(__dirname, '../mock/collect.json')
        let likeFilePath = path.resolve(__dirname, '../mock/like.json')
        let collectList = await dataIO.find(collectFilePath, { bid })
        let likeList = await dataIO.find(likeFilePath, { bid })
        osInfo.collect = collectList.length > 0 ? 1 : 0
        osInfo.like = likeList.length > 0 ? 1 : 0
    }
    //未登录
    let bookFilePath = path.resolve(__dirname, '../mock/book.json')
    let bookList = await dataIO.find(bookFilePath, { bid })
    bookInfo = bookList.length > 0 ? bookList[0] : {}
    if (!tool.isEmptyObj(bookInfo)) {
        bookInfo = await getBook({ bid })
        bookInfo.bid = bid
        dataIO.insert(bookFilePath, bookInfo)
    }
    bookInfo.like = osInfo.like
    bookInfo.collect = osInfo.collect
    let sub = await getCatalog({ bid })
    bookInfo.total = sub.total
    bookInfo.catalog = sub.catalog
    return bookInfo
}

module.exports = getBookModule