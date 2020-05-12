let http = require('./http');
let resolveCatalog = require('../cheerio/catalog');
let config = require('../config.json');
function getCatalog(data) {
    let url = `${config.bookApi}/${data.bid}${config.catalogApi}`
    return new Promise((resolve, reject) => {
        http({
            method: 'get',
            url
        }).then(res => {
            let result = resolveCatalog(res.data);
            resolve(result)
        })
    })
}
module.exports = getCatalog;