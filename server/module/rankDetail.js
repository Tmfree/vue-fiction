let getRankDetail = require("../request/getRankDetail");
function getRankDetailModule(data = {}) {
    return new Promise((resolve, reject) => {
        getRankDetail(data).then(res => {
            resolve(res)
        })
    })
}

module.exports = getRankDetailModule;