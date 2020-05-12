/**
 * 获取排行列表页
 */
let http = require('./http');
function getRank(data) {
    let url = `/majax/rank/${data.type}`;
    let send = {
        _csrfToken: 'ZO58DAV1cBbMSx5iQHlhzIw87TguvG0TGf5Ca37g',
        catId: data.catId,
        gender: 'male',
        pageNum: data.page
    }
    return new Promise((resolve, reject) => {
        http({
            method: 'get',
            url,
            params:send
        }).then(res => {
            resolve(res.data)
        })
    })
}
module.exports = getRank;