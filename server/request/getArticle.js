let http = require('./http');
let resolveArticle = require('../cheerio/article');
let config = require('../config.json');
function getArticle(data) {
    let url = `${config.bookApi}/${data.bid}/${data.aid}`;
    return new Promise((resolve, reject) => {
        http({
            method: 'get',
            url
        }).then(res => {
            let result = resolveArticle(res.data);
            resolve(result)
        })
    })
}
module.exports = getArticle;