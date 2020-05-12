/**
 * 获取排行
 */
let http = require('./http');
let resolveRank = require('../cheerio/rank');
function getRank(data) {
    let url = '/rank/male';
    return new Promise((resolve, reject) => {
        http({
            method: 'get',
            url
        }).then(res => {
            let result = resolveRank(res.data);
            resolve(result)
        })
    })
}
module.exports = getRank;