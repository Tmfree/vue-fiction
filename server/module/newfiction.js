let writeData = require('../utils/writeData');
let getNewFiction = require("../request/getNewFiction");
async function getNewFictionModule(data = {}) {
    let result = await writeData(getNewFiction, data, 'newFiction', true);
    return result;
}

module.exports = getNewFictionModule;