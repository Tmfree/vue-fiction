let getNewFiction = require("../request/getNewFiction");
function getNewFictionModule(data = {}) {
    return new Promise((resolve, reject) => {
        getNewFiction(data).then(res => {
            resolve(res)
        })
    })
}

module.exports = getNewFictionModule;