/**
 * 获取排行列表页
 */
let http = require('./http');
async function getRank(data) {
    let url = `/majax/rank/${data.type}`;
    let send = {
        _csrfToken: 'ZO58DAV1cBbMSx5iQHlhzIw87TguvG0TGf5Ca37g',
        catId: data.catId,
        gender: 'male',
        pageNum: data.page
    }
    let result = await http({
        method: 'get',
        url,
        params:send
    })
    return result.data
}

module.exports = getRank