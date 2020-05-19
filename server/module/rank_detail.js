let getRankDetail = require("../request/getRankDetail");
async function getRankDetailModule(data = {}) {
    let result = await getRankDetail(data);
    return result;
}

module.exports = getRankDetailModule;