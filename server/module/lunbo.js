let writeData = require('../utils/writeData');
let getLunBo = require("../request/getLunBo");
let filterResCode = require("../utils/filterResCode")
async function getLunBoModule(data = {}) {
    let result = await writeData(getLunBo, data, 'lunbo', true);
    return filterResCode(0,'成功', result);
}
module.exports = getLunBoModule;