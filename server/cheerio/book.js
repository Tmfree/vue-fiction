const cheerio = require('cheerio');
function resolveBook(str) {
    let data = {};
    let $ = cheerio.load(str, { decodeEntities: false });
    data ={
        title: $('h2.book-title').text(),
        tag: $('p.book-meta').eq(0).text(),
        wordCount: parseFloat($('p.book-meta').eq(1).text()),
        summary: $('#bookSummary').find('content').text(),
        ticket:$('span.recomm-ticket-cnt').text(),
        rewardCount: $('span.reward-week-cnt').text(),
        starScore: $('span.star-score').attr('data-score') ? $('span.star-score').attr('data-score') : 0
    }
    return data;
}
module.exports = resolveBook;