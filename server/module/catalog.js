const fs = require('fs');
const path = require("path");
let getCatalog = require("../request/getCatalog");
function getCatalogModule(data = {}) {
    return new Promise((resolve, reject) => {
        getCatalog(data).then(res => {
            resolve(res)
        })
    })
}

module.exports = getCatalogModule;