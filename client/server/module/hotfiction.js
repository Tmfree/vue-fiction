let writeData = require('../utils/writeData');
let getHotFiction = require("../request/getHotFiction");
async function getHotFictionModule(data = {}) {
    let result = await writeData(getHotFiction, data, 'hotFiction', true);
    return result;
}

module.exports = getHotFictionModule;