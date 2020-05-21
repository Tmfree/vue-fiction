const cheerio = require('cheerio');
function resolveCatalog(str) {
    let data = {};
    data.sub=[];
    let $ = cheerio.load(str, { decodeEntities: false });
    let total = $('h4.chapter-sub-title').find('output').text();
    let strData = $('script')[10].children[0].data.split('g_data.volumes = ')[1].trim();
    data.catalog = JSON.parse(strData.substr(0, strData.length - 1));
    data.total = total;
    return data;
}
module.exports = resolveCatalog;