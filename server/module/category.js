let CommCtrl= require('../controler/commControler')
async function getCategoryModule(params = {}) {
    let result = await CommCtrl.getCategory(params);
    return result;
}

module.exports = getCategoryModule;