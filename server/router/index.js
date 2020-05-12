const router = require('express').Router();
const getLunBo = require('../module/lunbo');
const getFreeFiction = require('../module/freefiction');
const getHotFiction = require('../module/hotfiction');
const getNewFiction = require('../module/newfiction');
const getQingFiction = require('../module/qingfiction');
const getCategoryModule = require('../module/category');
const categoryDetailModule = require('../module/categoryDetail');
const getBookModule = require('../module/book');
const getCatalogModule = require('../module/catalog');
const getArticleModule = require('../module/article');
const getRankModule = require('../module/rank');
const getRankDetailModule = require('../module/rankDetail');
const getSearchModule = require('../module/search');
router.get('/lunbo', (req, res) => {
    let data = {};
    getLunBo(data).then(result => {
        res.send(result)
    })
})
//热门小说
router.get('/hotfiction', (req, res) => {
    let data = {};
    getHotFiction(data).then(result => {
        res.send(result)
    })
})
//免费小说
router.get('/freefiction', (req, res) => {
    let data = {};
    getFreeFiction(data).then(result => {
        res.send(result)
    })
})
//新书抢鲜
router.get('/newfiction', (req, res) => {
    let data = {};
    getNewFiction(data).then(result => {
        res.send(result)
    })
})
//轻小说
router.get('/qingfiction', (req, res) => {
    let data = {};
    getQingFiction(data).then(result => {
        res.send(result)
    })
})
//分类
router.get('/category', (req, res) => {
    let data = {};
    getCategoryModule(data).then(result => {
        res.send(result)
    })
})
//分类详情
router.get('/category/detail', (req, res) => {
    let data = {
        catId: req.query.catId,
        page: req.query.page,
        subCatId: req.query.subCatId
    };
    categoryDetailModule(data).then(result => {
        res.send(result)
    })
})
//小说详情
router.get('/book/:bid', async (req, res) => {
    let data = {
        bid: req.params.bid
    };
    let result = await getBookModule(data);
    let sub = await getCatalogModule(data);
    result.total = sub.total;
    result.catalog = sub.catalog;
    res.send(result);
})
//小说内容
router.get('/article', async (req, res) => {
    let data = {
        bid: req.query.bid,
        aid: req.query.aid
    };
    let result = await getArticleModule(data);
    res.send(result);
})
//排行榜
router.get('/rank', async (req, res) => {
    let data = {};
    let result = await getRankModule(data);
    res.send(result);
})
//排行榜详情
router.get('/rankDetail', async (req, res) => {
    let data = {
        type: req.query.type,
        page: req.query.page,
        catId: req.query.catId
    };
    let result = await getRankDetailModule(data);
    res.send(result);
})

router.get('/search', async (req, res) => {
    let data = {
        page: req.query.page,
        kw: req.query.kw
    };
    let result = await getSearchModule(data);
    res.send(result)
})

module.exports = router;