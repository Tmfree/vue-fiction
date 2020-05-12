let getHotFiction = require("../request/getHotFiction");
function getHotFictionModule(data = {}) {
    return new Promise((resolve, reject) => {
        getHotFiction(data).then(res => {
            resolve(res)
        })
    })
}

module.exports = getHotFictionModule;