let http = require('./http');
let resolveHome = require('../cheerio/home');
function getLunBo(data) {
    return new Promise((resolve, reject) => {
        http({
            method: 'get'
        }).then(res => {
            let result = resolveHome.resolveLunBo(res.data);
            resolve(result)
        })
    })
}
module.exports = getLunBo;