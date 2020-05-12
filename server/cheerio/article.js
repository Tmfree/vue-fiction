const cheerio = require('cheerio');
function resolveArticle(str) {
    let data = {};
    let $ = cheerio.load(str, { decodeEntities: false });
    data.title = $('article#chapterContent h3').text();
    data.content = [];
    $('article#chapterContent p').each(function (i, el) {
        let temp = {
            field: $(this).text().trim(),
            serialNum: i
        }
        data.content.push(temp)
    })
    return data;
}
module.exports = resolveArticle;