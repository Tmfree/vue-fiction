let http = require('./http');
let resolveArticle = require('../cheerio/article')
let config = require('../config.json')
async function getArticle(data) {
    let url = `${config.bookApi}/${data.bid}/${data.aid}`
    let result = await http({ method: 'get', url })
    result = resolveArticle(result.data)
    return result
}
module.exports = getArticle