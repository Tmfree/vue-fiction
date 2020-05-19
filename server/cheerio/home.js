const cheerio = require('cheerio');

function resolveLunBo(str) {
    let data = [];
    let $ = cheerio.load(str, { decodeEntities: false });
    let len = $('ul#slideUl').find('a').map(function (i, el) {
        let sub = $(this).attr('href').split('/');
        let temp = {
            bid: sub[sub.length-1],
            imgUrl: i == 0 ? $(this).find('img').attr('src') : $(this).find('img').attr('data-src')
        }
        data.push(temp)
    });
    
    return data;
}
//热门小说
function resolveHotFiction(str) {
    let data = [];
    let $ = cheerio.load(str, { decodeEntities: false });
    let list = $('div.module').eq(0).find("div.module-slide a");
    list.map(function (i, el) {
        let temp = {
            bid: $(this).attr('data-bid'),
            uid: $(this).attr('data-auid'),
            bName: $(this).find('.module-slide-caption').text()
        }
        data.push(temp);
    });
    return data;
}
//首页免费小说
function resolveFreeFiction(str) {
    let data = [];
    let $ = cheerio.load(str, { decodeEntities: false });
    let list = $('div.module').eq(1).find("div.module-slide a");
    list.map(function (i, el) {
        let temp = {
            bid: $(this).attr('data-bid'),
            uid: $(this).attr('data-auid'),
            bName: $(this).find('.module-slide-caption').text()
        }
        data.push(temp);
    });
    return data;
}

//首页新书抢鲜
function resolveNewFiction(str) {
    let data = [];
    let $ = cheerio.load(str, { decodeEntities: false });
    let list = $('div.module').eq(3).find("ol.book-ol a");
    list.map(function (i, el) {
        let tags = [];
        $(this).find(".tag-small").each(function (i, el) {
            tags.push($(this).text())
        })
        let temp = {
            bid: $(this).attr('data-bid'),
            uid: $(this).attr('data-auid'),
            bName: $(this).find('.book-title').text(),
            desc: $(this).find('.book-desc').text(),
            author: $(this).find('.book-author').text(),
            tags
        }
        data.push(temp);
    });
    return data;
}
//轻小说
function resolveQingFiction(str) {
    let data = [];
    let $ = cheerio.load(str, { decodeEntities: false });
    let list = $('div.module').eq(6).find("div.module-slide a");
    list.map(function (i, el) {
        let temp = {
            bid: $(this).attr('data-bid'),
            uid: $(this).attr('data-auid'),
            title: $(this).find('.module-slide-caption').text()
        }
        data.push(temp);
    });
    return data;
}
module.exports = {
    resolveLunBo,
    resolveHotFiction,
    resolveFreeFiction,
    resolveNewFiction,
    resolveQingFiction
};