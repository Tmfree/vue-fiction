//点赞
const path = require('path')
const dataIO = require('../utils/dataio')
const filterResCode = require('../utils/filterResCode')
async function postLike(data = {}) {
    let { bid, like, tokenCode } = data
    if (tokenCode !== 0) {
        return filterResCode(tokenCode, '失败', null)
    }
     //数据路径
     let likeFilePath = path.resolve(__dirname, '../mock/like.json')
    if (like) {
        return dataIO.insert(likeFilePath, { bid }) ? filterResCode(0, '成功', null) : filterResCode(-1, '失败', null)
    } else {
        return dataIO.del(likeFilePath, { bid }) ? filterResCode(0, '成功', null) : filterResCode(-1, '失败', null)
    }
}
module.exports = postLike