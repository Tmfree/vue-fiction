let http = require('./http');
let resolveHome = require('../cheerio/home');
function getFreeFiction(data) {
    return new Promise((resolve, reject) => {
        http({
            method: 'get'
        }).then(res => {
            let result = resolveHome.resolveFreeFiction(res.data);
            resolve(result)
        })
    })
}
module.exports = getFreeFiction;