const BookCntl = require('../controler/bookControler')
async function getbooklist(params){
    return await BookCntl.getBookList(params)
}
module.exports = getbooklist