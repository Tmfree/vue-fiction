let Bookctrl = require('../controler/bookControler')
async function getCategoryDetailModule(params = {}) {
    let result = await Bookctrl.getCategoryList(params)
    return result
}

module.exports = getCategoryDetailModule