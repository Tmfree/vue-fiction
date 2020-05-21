let http = require('./http');
let resolveHome = require('../cheerio/home')
async function getHotFiction(data) {
    let result = await http({
        method: 'get'
    })
    result = resolveHome.resolveHotFiction(result.data)
    return result
}
module.exports = getHotFiction