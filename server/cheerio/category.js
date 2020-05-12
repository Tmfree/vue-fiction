const cheerio = require('cheerio');
function resolveCategory(str) {
    let data = [];
    let $ = cheerio.load(str, { decodeEntities: false });
    let len = $('ul.sort-ul').find('li').map(function (i, el) {
        let catList = [];
        $(this).find('div.sort-li-detail a').each(function (i, el) {
            let sub = {
                text: $(this).text(),
                subCatId: $(this).attr("href").split('&')[1].split('=')[1]
            }
            catList.push(sub);
        })
        let temp = {
            catId: $(this).find('a.sort-li-header').attr('href').split('/')[2],
            title: $(this).find('h3.module-title').text(),
            total: $(this).find("output").text(),
            catList
        }
        data.push(temp);
    });
    return data;
}
module.exports = resolveCategory;