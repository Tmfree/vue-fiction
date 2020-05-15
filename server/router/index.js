const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const config = require('../config.json');
const jwt = require('jsonwebtoken');
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
//判断是否存在文件
function isExitFile(filePath) {
    try {
        fs.accessSync(filePath);
    } catch (e) {
        return false;
    }
    return true;
}
//创建文件
function createFile(filePath) {
    let data = [];
    try {
        fs.writeFileSync(filePath, JSON.stringify(data));
    }
    catch (e) {
        return false;
    }
    return true;
}
//读取文件
function readFile(filePath) {
    let data = [];
    try {
        data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
        return [e, null];
    }
    return [null, data];
}
//写入文件
function writeFile(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data), 'utf8');
    }
    catch (e) {
        return false;
    }
    return true;
}
//是否匹配到数据
function isMatch(origin, target) {
    let keys = Object.keys(target);
    return keys.every(item => target[item] == origin[item])
}
function find(filePath, obj = {}) {
    let result = [];
    return new Promise((resolve, reject) => {
        let [err, data] = readFile(filePath);
        if (err) {
            resolve(result)
            return;
        } else {
            //查询全部
            if (!obj) {
                resolve(result);
                return;
            }
            //过滤匹配的数据
            result = data.filter(item => isMatch(item, obj));
            resolve(result);
        }
    })
}
function create() {

}
function insert(filePath, data) {
    let [err, result] = readFile(filePath);
    result.push(data);
    if (writeFile(filePath, result)) {
        return true;
    }
    return false;

}
//登录
router.post('/login', async (req, res) => {
    let { username, password } = req.body;
    //数据路径
    let mockFilePath = path.resolve(__dirname, '../mock/user.js');
    let result = await find(mockFilePath, { username });
    let user = result[0];
    if (!user) {
        let result = {
            code: -1,
            msg: '账号不存在'
        }
        return res.send(result);
    }
    //判断密码是否正确
    if (user.password === password) {
        //jwt生成加密token，username是公文，密钥是“secret”，1小时后过期
        let token = jwt.sign({ username }, config.secretOrKey, { expiresIn: 60 * 60 * 1 });
        let result = {
            code: 0,
            msg: '登录成功',
            token
        }
        return res.send(result);
    } else {
        let result = {
            code: -1,
            msg: '密码错误'
        }
        return res.send(result);
    }
})
//收藏
router.post('/collect', async (req, res) => {
    let token = req.headers.authorization;
    if (token) {
        jwt.verify(token, config.secretOrKey, (err, decoded) => {
            if (err) {
                switch (err.name) {
                    case 'JsonWebTokenError':
                        res.send({ code: -1, msg: '无效的token' });
                        break;
                    case 'TokenExpiredError':
                        res.send({ code: -1, msg: 'token过期' });
                        break;
                }
            } else {
                res.send({ code: 0, msg: '成功' });
            }
        })
    } else {
        res.send({ code: -1, msg: '无效的token' });
    }
})
//轮播
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