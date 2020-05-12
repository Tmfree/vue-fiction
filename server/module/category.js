const fs = require('fs');
const path = require("path");
let getCategory = require("../request/getCategory");
function getCategoryModule(data = {}) {
    return new Promise((resolve, reject) => {
        let dirPath = path.resolve(__dirname, '../mock/category.js');
        fs.access(dirPath, err => {
            if (err) {
                getCategory(data).then(res => {
                    resolve(res)
                    res.length > 0 && fs.writeFile(dirPath, JSON.stringify(res), err => {
                        console.log(err)
                    })
                })
            } else {
                fs.readFile(dirPath, "utf8", (err, result) => {
                    resolve(JSON.parse(result))
                });
            }
        })
    })
}

module.exports = getCategoryModule;