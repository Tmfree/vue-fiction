let http = require('./http');
let resolveCatalog = require('../cheerio/catalog');
let config = require('../config.json');
async function getCatalog(data) {
    let url = `${config.bookApi}/${data.bid}${config.catalogApi}`
    let result = await http({ method: 'get', url });
    result = resolveCatalog(result.data);
    return result;
}
module.exports = getCatalog;