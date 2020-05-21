let writeData = require('../utils/writeData');
let getLunBo = require("../request/getLunBo");
async function getLunBoModule(data = {}) {
    let result = await writeData(getLunBo, data, 'lunbo', true);
    return result;
}
module.exports = getLunBoModule;