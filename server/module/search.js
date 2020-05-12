let getSearch = require("../request/getSearch");
function getSearchModule(data = {}) {
    return new Promise((resolve, reject) => {
        getSearch(data).then(res => {
            resolve(res)
        })
    })
}

module.exports = getSearchModule;