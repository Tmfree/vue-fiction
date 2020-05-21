let getSearch = require("../request/getSearch")
async function getSearchModule(data = {}) {
    let result = await getSearch(data)
    return result
}

module.exports = getSearchModule