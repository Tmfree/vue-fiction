let RankCtrl = require('../controler/rankControler')
async function getRankDetailModule(params = {}) {
    let result = await RankCtrl.getRankList(params)
    return result;
}

module.exports = getRankDetailModule;