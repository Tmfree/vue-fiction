let http = require('./http');
let resolveHome = require('../cheerio/home');
function getNewFiction(data) {
    return new Promise((resolve, reject) => {
        http({
            method: 'get'
        }).then(res => {
            let result = resolveHome.resolveNewFiction(res.data);
            resolve(result)
        })
    })
}
module.exports = getNewFiction;