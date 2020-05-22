let http = require('./http');
let resolveHome = require('../cheerio/home');
async function getQingFiction(data) {
    let result = await http({
        method: 'get'
    })
    result = resolveHome.resolveQingFiction(result.data)
    return result
}
module.exports = getQingFiction