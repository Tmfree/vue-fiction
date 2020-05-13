const fs = require('fs');
const path = require('path');
/**
 * @param {Function} requestA 
 * @param {Object} data 
 * @param {String} fileName //写入数据的 文件名
 * @param {Boolean} isCache //是否从本地拿数据
 */
function preAjax(requestA, data = {}, fileName, isCache = true) {
    let currFile = path.resolve(__dirname, `../mock/${fileName}.js`);
    return new Promise((resolve, reject) => {
        if (isCache) {
            fs.access(currFile, (err, data) => {
                if (err) {
                    requestA(data).then(res => {
                        resolve(res);
                        fs.writeFileSync(currFile, JSON.stringify(res), 'utf-8');
                    })
                    return;
                }
                let result = JSON.parse(fs.readFileSync(currFile));
                resolve(result);
            })
        } else {
            requestA(data).then(res => {
                resolve(res);
            })
        }
    })
}
module.exports = preAjax;