let getCategoryDetail = require("../request/getCategoryDetail");
function getCategoryDetailModule(data = {}) {
    return new Promise((resolve, reject) => {
        getCategoryDetail(data).then(res => {
            resolve(res)
        })
    })
}

module.exports = getCategoryDetailModule;