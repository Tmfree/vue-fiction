let getCategoryDetail = require("../request/getCategoryDetail")
async function getCategoryDetailModule(data = {}) {
    let result = await getCategoryDetail(data)
    return result
}

module.exports = getCategoryDetailModule