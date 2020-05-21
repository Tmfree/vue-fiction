let writeData = require('../utils/writeData');
let getCategory = require("../request/getCategory");
async function getCategoryModule(data = {}) {
    let result = await writeData(getCategory, data, 'category', true);
    return result;
}

module.exports = getCategoryModule;