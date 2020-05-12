const fs = require('fs');
const path = require("path");
let getRank = require("../request/getRank");
function getRankModule(data = {}) {
    return new Promise((resolve, reject) => {
        getRank(data).then(res => {
            resolve(res)
        })
    })
}

module.exports = getRankModule;