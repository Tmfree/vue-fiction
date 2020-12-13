let http = require('./http')
class Ajax {
    async getCategory(params) {
        try {
            let url = 'https://m.qidian.com/category/male'
            let result = await http({ url, params })
            return result.data
        } catch (error) {
            console.log(error)
        }
    }
    async getBook(params) {
        try {
            let url = `https://m.qidian.com/majax/category/list?_csrfToken=Yr2GT7a1rNukMCmZDhclBvJ9lJxsI4EUrKqTyTqx&gender=male&pageNum=${params.page}&pageSize=${params.pageSize}&catId=${params.catId}&subCatId=${params.tagId}`
            let result = await http({ url })
            return result.data.data.records.map((item) => {
                item.tagId = params.tagId
                return item
            })
        } catch (error) {

        }
    }
    async getNewBook(params) {
        try {
            let url = `https://m.qidian.com/majax/recommend/newBooklist?_csrfToken=Yr2GT7a1rNukMCmZDhclBvJ9lJxsI4EUrKqTyTqx&gender=male&pageNum=${params.page}`
            let result = await http({ url })
            return result.data.data.records
        } catch (error) {

        }
    }
    async getFreeBook(params) {
        try {
            let url = `https://m.qidian.com/majax/recommend/hotFreelist?_csrfToken=Yr2GT7a1rNukMCmZDhclBvJ9lJxsI4EUrKqTyTqx&gender=male&pageNum=${params.page}`
            let result = await http({ url })
            return result.data.data.records
        } catch (error) {

        }
    }
    async getHotSaleBook(params) {
        try {
            let url = `https://m.qidian.com/majax/recommend/bestSelllist?_csrfToken=Yr2GT7a1rNukMCmZDhclBvJ9lJxsI4EUrKqTyTqx&gender=male&pageNum=${params.page}`
            let result = await http({ url })
            return result.data.data.records
        } catch (error) {

        }
    }
    async getNewAuthorBook(params) {
        try {
            let url = `https://m.qidian.com/majax/rank/newauthorlist?_csrfToken=Yr2GT7a1rNukMCmZDhclBvJ9lJxsI4EUrKqTyTqx&gender=male&pageNum=${params.page}&catId=-1`
            let result = await http({ url })
            return result.data.data.records
        } catch (error) {

        }
    }
    async getBookDetail(params) {
        try {
            let url = `https://m.qidian.com/book/${params.bid}`
            let result = await http({ url })
            return result.data
        } catch (error) {

        }
    }
    async getCatalog(params) {
        try {
            let url = `https://m.qidian.com/book/${params.bid}/catalog`
            let result = await http({ url })
            return result.data
        } catch (error) {

        }
    }
    async getRank(params) {
        let url = '/rank/male';
        let result = await http({
            method: 'get',
            url
        })
        return result.data
    }
}
module.exports = new Ajax()