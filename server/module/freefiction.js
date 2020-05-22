let writeData = require('../utils/writeData');
let getFreeFiction = require("../request/getFreeFiction");
async function getFreeFictionModule(data = {}) {
    let result = await writeData(getFreeFiction, data, 'freeFiction', true);
    return result;
}

module.exports = getFreeFictionModule;