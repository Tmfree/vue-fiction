const cheerio = require('cheerio');
function resolveRank(str) {
    let data = [];
    let $ = cheerio.load(str, { decodeEntities: false });
    $("div.module-toplist").each(function (i, el) {
        let temp = {
            type: $(this).find('a.book-toplist').attr('href').split('/')[2],
            text:$(this).find('h2.book-toplist-title').text(),
            coverImg: $(this).find('img.book-toplist-cover').attr('src')
        }
        temp.topList = [];
        $(this).find('a.book-layout').each(function () {
            let sub = {
                bid: $(this).attr('data-bid'),
                title: $(this).find('h3').text()
            };
            temp.topList.push(sub);
        })
        data.push(temp);
    })
    return data;
}
module.exports = resolveRank;