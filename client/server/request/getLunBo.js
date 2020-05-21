let http = require('./http')
let resolveHome = require('../cheerio/home')
async function getLunBo(data) {
    let result = await http({
        method: 'get'
    })
    result = resolveHome.resolveLunBo(result.data)
    return result
}
module.exports = getLunBo