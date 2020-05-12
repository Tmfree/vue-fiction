let getArticle = require("../request/getArticle");
function getArticleModule(data = {}) {
    return new Promise((resolve, reject) => {
        getArticle(data).then(res => {
            resolve(res)
        })
    })
}

module.exports = getArticleModule;