let getLunBo = require("../request/getLunBo");
function getLunBoModule(data = {}) {
    return new Promise((resolve, reject) => {
        getLunBo(data).then(res => {
            resolve(res)
        })
    })
}

module.exports = getLunBoModule;