let http = require('./http');
async function getNewFiction(data) {
    let url = '/majax/recommend/newBooklist'
    let params = {
        _csrfToken: 'ZO58DAV1cBbMSx5iQHlhzIw87TguvG0TGf5Ca37g',
        gender: 'male',
        pageNum: data.page
    }
    let result = await http({
        url,
        method: 'get',
        params
    })
    return result.data
}
module.exports = getNewFiction