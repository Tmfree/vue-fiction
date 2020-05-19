/**
 * 获取分类详情
 */
let http = require('./http');
async function getCategoryDetail(data) {
    let url = '/majax/category/list';
    let params = {
        _csrfToken: 'ZO58DAV1cBbMSx5iQHlhzIw87TguvG0TGf5Ca37g',
        catId: data.catId,
        gender: 'male',
        pageNum: data.page,
        subCatId: data.subCatId
    }
    let result = await http({
        method: 'get',
        url,
        params
    })
    return result.data
}
module.exports = getCategoryDetail