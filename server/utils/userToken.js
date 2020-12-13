const config = require('../config.json');
const jwt = require('jsonwebtoken');
/**
 * //添加token验证
 * @param {Object} payload //载体信息,额外加密的信息
 * @param {Date} expiresIn //过期时间
 * @return {String} //返回一个sign的token
 */
function addToken(payload, expiresIn) {
    return jwt.sign(payload, config.secretOrKey, { expiresIn });
}
/**
 * //验证token
 * @param {String} token //前台带过来的token
 * @return {Promise} //返回一个自定义的状态码 50001：token无效，50002：过期
 */
async function verifyToken(token) {
    try {
        jwt.verify(token, config.secretOrKey)
        return 2000
    } catch (error) {
        return 4001
    }
}
module.exports = {
    addToken,
    verifyToken
}