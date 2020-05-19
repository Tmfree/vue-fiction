/**
 * 获取排行
 */
let http = require('./http');
let resolveRank = require('../cheerio/rank');
async function getRank(data) {
    let url = '/rank/male';
    let result = await http({
        method: 'get',
        url
    })
    result = resolveRank(result.data)
    return result
}

module.exports = getRank;