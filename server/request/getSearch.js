/**
 * 获取搜索内容
 */
let http = require('./http');
async function getSearch(data) {
    let url = '/majax/search/list';
    let params = {
        _csrfToken: 'ZO58DAV1cBbMSx5iQHlhzIw87TguvG0TGf5Ca37g',
        kw: data.kw,
        pageNum: data.page
    }
    let result = await http({
        method: 'get',
        url,
        params
    })
    return result.data
}
module.exports = getSearch