let http = require('./http');
let resolveBook = require('../cheerio/book');
let config = require('../config.json');
function getBook(data) {
    let url = `${config.bookApi}/${data.bid}`
    return new Promise((resolve, reject) => {
        http({
            method: 'get',
            url
        }).then(res => {
            let result = resolveBook(res.data);
            resolve(result)
        })
    })
}
module.exports = getBook;