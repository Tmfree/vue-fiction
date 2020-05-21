let http = require('./http');
let resolveCategory = require('../cheerio/category');
let config = require('../config.json');
async function getCategory(data) {
    let result = await http({
        method: 'get',
        url: config.categoryApi
    })
    result = resolveCategory(result.data)
    return result
}
module.exports = getCategory;