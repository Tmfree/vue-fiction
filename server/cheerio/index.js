const cheerio = require('cheerio')
class CheerioData {
    resolveCategory(str) {
        try {
            let data = []
            let $ = cheerio.load(str, { decodeEntities: false })
            $('ul.sort-ul').find('li').map(function (i, el) {
                let tags = []
                $(this).find('div.sort-li-detail a').each(function (i, el) {
                    let sub = {
                        cName: $(this).text(),
                        tagId: $(this).attr("href").split('&')[1].split('=')[1],
                    }
                    tags.push(sub)
                })
                let temp = {
                    catId: $(this).find('a.sort-li-header').attr('href').split('/')[2],
                    cName: $(this).find('h3.module-title').text(),
                    total:$(this).find('output').text(),
                    tags
                }
                data.push(temp)
            });
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    resolveBook(str) {
        let data = {};
        let $ = cheerio.load(str, { decodeEntities: false });
        data = {
            title: $('h2.book-title').text(),
            tag: $('p.book-meta').eq(0).text(),
            wordCount: $('p.book-meta').eq(1).text().split('字')[0],
            summary: $('#bookSummary').find('content').text(),
            ticket: $('span.recomm-ticket-cnt').text(),
            fansNum: $('span#ariaFansNum').text().split('：')[1],
            rewardCount: $('span.reward-week-cnt').text(),
            starScore: $('span.star-score').attr('data-score') ? $('span.star-score').attr('data-score') : 0
        }
        return data;
    }

    resolveCatalog(str) {
        
        let data = {};
        data.sub=[];
        let $ = cheerio.load(str, { decodeEntities: false });
        let total = $('h4.chapter-sub-title').find('output').text();
        let strData = $('script')[11].children[0].data.split('g_data.volumes = ')[1].trim();
        data.catalog = JSON.parse(strData.substr(0, strData.length - 1));
        data.cTotal = total;
       
        return data;
    }
}
module.exports = new CheerioData()