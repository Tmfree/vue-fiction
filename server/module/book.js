const fs = require('fs');
const path = require("path");
let getBook = require("../request/getBook");
function getBookModule(data = {}) {
    return new Promise((resolve, reject) => {
        getBook(data).then(res => {
            resolve(res)
        })
    })
}

module.exports = getBookModule;