/**
 * 获取搜索内容
 */
let http = require('./http');
function getSearch(data) {
    let url = '/majax/search/list';
    let send =  {
        _csrfToken: 'ZO58DAV1cBbMSx5iQHlhzIw87TguvG0TGf5Ca37g',
        kw: data.kw,
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
module.exports = getSearch;