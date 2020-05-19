const config = require('../config.json');
const jwt = require('jsonwebtoken');
/**
 * //添加token验证
 * @param {Object} payload //载体信息,额外加密的信息
 * @param {Date} expiresIn //过期时间
 * @return {String} //返回一个sign的token
 */
function addToken(payload, expiresIn) {
    return jwt.sign(payload, config.secretOrKey, expiresIn);
}
/**
 * //验证token
 * @param {String} token //前台带过来的token
 * @return {Number} //返回一个自定义的状态码 50001：token无效，50002：过期
 */
function verifyToken(token) {
    return new Promise((resolve, reject) => {
        if (token) {
            jwt.verify(token, config.secretOrKey, (err, decoded) => {
                if (err) {
                    switch (err.name) {
                        case 'JsonWebTokenError':
                            resolve(50001)
                            break;
                        case 'TokenExpiredError':
                            resolve(50002)
                            break;
                    }
                } else {
                    return resolve(0);
                }
            })
        } else {
            resolve(50001)
        }

    })

}
module.exports = {
    addToken,
    verifyToken
}