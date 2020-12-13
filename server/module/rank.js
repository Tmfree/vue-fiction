let RankCtrl = require('../controler/rankControler')
async function getRankModule(params = {}) {
    let result = await RankCtrl.getRank(params);
    return result;
}

module.exports = getRankModule;