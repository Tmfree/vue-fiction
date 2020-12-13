const CateModel = require('../model/category')
class CommControler {
    async getCategory(params = {}) {
        try {
            let result = await CateModel.find({})
            return result
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new CommControler()