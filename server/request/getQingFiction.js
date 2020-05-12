let http = require('./http');
let resolveHome = require('../cheerio/home');
function getQingFiction(data) {
    return new Promise((resolve, reject) => {
        http({
            method: 'get'
        }).then(res => {
            let result = resolveHome.resolveQingFiction(res.data);
            resolve(result)
        })
    })
}
module.exports = getQingFiction;