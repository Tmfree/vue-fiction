let BCtrl = require('../controler/bookControler')
const { param } = require('../router')
async function getSearchModule(params = {}) {
    try {
        let result = await BCtrl.searchBook(params)
        return result
    } catch (error) {
        console.log(error)
    }

}

module.exports = getSearchModule