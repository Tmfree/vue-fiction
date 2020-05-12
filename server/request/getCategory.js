let http = require('./http');
let resolveCategory = require('../cheerio/category');
let config = require('../config.json');
function getCategory(data) {
    return new Promise((resolve, reject) => {
        http({
            method: 'get',
            url: config.categoryApi
        }).then(res => {
            let result = resolveCategory(res.data);
            resolve(result)
        })
    })
}
module.exports = getCategory;