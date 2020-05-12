/**
 * 获取分类详情
 */
let http = require('./http');
function getCategoryDetail(data) {
    let url = '/majax/category/list';
    let send =  {
        _csrfToken: 'ZO58DAV1cBbMSx5iQHlhzIw87TguvG0TGf5Ca37g',
        catId: data.catId,
        gender: 'male',
        pageNum: data.page,
        subCatId: data.subCatId
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
module.exports = getCategoryDetail;