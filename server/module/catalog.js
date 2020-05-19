let getCatalog = require("../request/getCatalog")
async function getCatalogModule(data = {}) {
    let result = await getCatalog(data)
    return result
}

module.exports = getCatalogModule;