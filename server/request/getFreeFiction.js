let http = require('./http')
let resolveHome = require('../cheerio/home')
async function getFreeFiction(data) {
    let result = await http({
        method: 'get'
    })
    result = resolveHome.resolveFreeFiction(result.data)
    return result
}
module.exports = getFreeFiction