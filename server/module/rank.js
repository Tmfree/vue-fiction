let writeData = require('../utils/writeData');
let getRank = require("../request/getRank");
async function getRankModule(data = {}) {
    let result = await writeData(getRank, data, 'rank', true);
    return result;
}

module.exports = getRankModule;