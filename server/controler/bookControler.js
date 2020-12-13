const ajax = require('../request/api')
const BookModel = require('../model/book')
const NewBookModel = require('../model/newbook')
const FreeBookModel = require('../model/freebook')
const NewAuthorModel = require('../model/rnewauthorbook')
const HotSaleBookModel = require('../model/hotsalebook')
const YuePiaoModel = require('../model/yuepiao')
const BookDetailModel = require('../model/bookdetail')
const CatModel = require('../model/category')
const cheerioData = require('../cheerio')
const { param } = require('../router')
class BookControler {
    async getBook(params) {
        let { catId, page } = params
        try {
            let tags = (await CatModel.find({ catId }))[0].tags
            for (let item of tags) {
                params.tagId = item.tagId
                let result = await ajax.getBook(params)
                await BookModel.insertMany(result, { ordered: false })
                console.log(`${catId} - ${item.tagId}导入数据成功`)
            }
            console.log(`${catId} - ${page}页成功`)
            return `${catId} - ${page}页成功`
        } catch (error) {
            console.log(error)
        }
    }
    //小说列表
    async getBookList(params) {
        let { type, page } = params
        let ps = 20
        let sk = (page - 1) * ps
        let result = []
        switch (type) {
            case '1':
                result = await FreeBookModel.find({}).skip(sk).limit(ps)
                return result
            case '2':
                result = await NewBookModel.find({}).skip(sk).limit(ps)
                return result
            case '3':
                result = await HotSaleBookModel.find({}).skip(sk).limit(ps)
                return result
            case '4':
                result = await BookModel.find({ 'catId': '12' }).skip(sk).limit(ps)
                return result
        }
    }
    async getCategoryList(params) {
        try {
            let { catId, tagId, page } = params
            let ps = 20
            let sk = (page - 1) * ps
            let result = await BookModel.find({ catId, tagId }).skip(sk).limit(ps)
            return result
        } catch (error) {
            console.log(error)
        }
    }
    async getNewBook(params) {
        let { page } = params
        try {
            let result = await ajax.getNewBook(params)
            await NewBookModel.insertMany(result, { ordered: false })
            console.log(`${page}导入数据成功`)
            return `${page}页成功`
        } catch (error) {
            console.log(error)
        }
    }
    async getFreeBook(params) {
        let { page } = params
        try {
            let result = await ajax.getFreeBook(params)
            await FreeBookModel.insertMany(result, { ordered: false })
            console.log(`${page}导入数据成功`)
            return `${page}页成功`
        } catch (error) {
            console.log(error)
        }
    }
    async getHotSaleBook(params) {
        let { page } = params
        try {
            let result = await ajax.getHotSaleBook(params)
            await HotSaleBookModel.insertMany(result, { ordered: false })
            console.log(`${page}导入数据成功`)
            return `${page}页成功`
        } catch (error) {
            console.log(error)
        }
    }
    async getNewAuthorBook(params) {
        let { page } = params
        try {
            for (let i = 3; i <= 30; i++) {
                params.page = i
                let result = await ajax.getNewAuthorBook(params)
                await NewAuthorModel.insertMany(result, { ordered: false })
                console.log(`${i}导入数据成功`)
            }
            return `${i}页成功`
        } catch (error) {
            console.log(error)
        }
    }
    //详情
    async getBookDetail(params) {
        try {
            let { bid } = params
            let result = (await BookDetailModel.find({ bid }))[0]
            return result
        } catch (error) {
            console.log(error)
        }
    }
    // async getBookDetail(params) {
    //     try {
    //         let sk = (params.page - 1) * params.ps
    //         //let bookList = await BookModel.find({}).skip(sk).limit(params.ps)
    //         let bookList = await NewAuthorModel.find({}).skip(0)
    //         let bookInfo = {}
    //         for (let item of bookList) {
    //             let r = await BookDetailModel.find({ 'bid': item.bid })
    //             console.log(item.bid)
    //             if (r.length >= 1) {
    //                 continue;
    //             }
    //             params.bid = item.bid
    //             let detailHtml = await ajax.getBookDetail(params)
    //             let catalogHtml = await ajax.getCatalog(params)
    //             let bookData = cheerioData.resolveBook(detailHtml)
    //             let catalogData = cheerioData.resolveCatalog(catalogHtml)
    //             bookInfo = { bid: item.bid, ...bookData, ...catalogData }
    //             await BookDetailModel.insertMany(bookInfo, { ordered: false })
    //             console.log(`${item.bName} - 数据导入成功`)
    //         }
    //         console.log(`${params.page} 数据导入成功`)
    //         return bookList
    //     } catch (error) {
    //         console.log(error)

    //     }
    // }
    //搜索
    async searchBook(params = {}) {
        try {
            let { kw,page } = params
            let regexp = new RegExp(kw)
            let ps = 20
            let sk = (page - 1) * ps
            let result = await BookModel.find({ bName: { $regex: regexp } }).skip(sk).limit(ps)
            return result
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new BookControler()