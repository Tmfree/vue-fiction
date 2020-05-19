let writeData = require('../utils/writeData')
let getNewFiction = require("../request/getNewFiction")
async function getNewFictionModule(data = {}) {
    let result = await getNewFiction(data)
    return result;
}

module.exports = getNewFictionModule;