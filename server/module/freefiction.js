let getFreeFiction = require("../request/getFreeFiction");
function getFreeFictionModule(data = {}) {
    return new Promise((resolve, reject) => {
        getFreeFiction(data).then(res => {
            resolve(res)
        })
    })
}

module.exports = getFreeFictionModule;