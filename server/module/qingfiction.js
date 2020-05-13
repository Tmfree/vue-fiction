let writeData = require('../utils/writeData');
let getQingFiction = require("../request/getQingFiction");
async function getQingFictionModule(data = {}) {
    let result = await writeData(getQingFiction, data, 'qingFiction', true);
    return result;
}

module.exports = getQingFictionModule;