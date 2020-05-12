let getQingFiction = require("../request/getQingFiction");
function getQingFictionModule(data = {}) {
    return new Promise((resolve, reject) => {
        getQingFiction(data).then(res => {
            resolve(res)
        })
    })
}

module.exports = getQingFictionModule;