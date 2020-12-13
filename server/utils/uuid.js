const { v4: uuidv4 } = require('uuid');

function generateUId() {
    let strUUID = uuidv4()
    let strUUID2 = strUUID.replace(/-/g, '')
    return strUUID2
}
module.exports = generateUId