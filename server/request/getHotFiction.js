let http = require('./http');
let resolveHome = require('../cheerio/home');
function getHotFiction(data) {
    return new Promise((resolve, reject) => {
        http({
            method: 'get'
        }).then(res => {
            let result = resolveHome.resolveHotFiction(res.data);
            resolve(result)
        })
    })
}
module.exports = getHotFiction;