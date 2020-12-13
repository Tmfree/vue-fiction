const RankModel = require('../model/rank')
const YuePiaoModel = require('../model/yuepiao')
const HotSaleModel = require('../model/rhotsalebook')
const NewBookModel = require('../model/rnewbook')
const NewFansModel = require('../model/rnewfansbook')
const RrcommendModel = require('../model/rrecommend')
const SignBookModel = require('../model/rsignbook')
const NewAuthorModel = require('../model/rnewauthorbook')
class RankControler {
    async getRank(params = {}) {
        try {
            let result = await RankModel.find({})
            return result
        } catch (error) {
            console.log(error)
        }
    }
    async getRankList(params = {}) {
        try {
            let { type, catId, page } = params
            let ps = 20
            let sk = (page - 1) * ps
            let result = []
            let q = {}
            if (catId != '-1') {
                q = { catId }
            }
            switch (type) {
                case 'yuepiao':
                    result = await YuePiaoModel.find(q).skip(sk).limit(ps)
                    return result
                case 'hotsales':
                    result = await HotSaleModel.find(q).skip(sk).limit(ps)
                    return result
                case 'readIndex':
                    result = await NewBookModel.find(q).skip(sk).limit(ps)
                    return result
                case 'newfans':
                    result = await NewFansModel.find(q).skip(sk).limit(ps)
                    return result
                case 'rec':
                    result = await RrcommendModel.find(q).skip(sk).limit(ps)
                    return result
                case 'reward':
                    result = await YuePiaoModel.find(q).skip(sk).limit(ps)
                    return result
                case 'update':
                    result = await NewBookModel.find(q).skip(sk).limit(ps)
                    return result
                case 'sign':
                    result = await SignBookModel.find(q).skip(sk).limit(ps)
                    return result
                case 'newbook':
                    result = await NewBookModel.find(q).skip(sk).limit(ps)
                    return result
                case 'newauthor':
                    result = await NewAuthorModel.find(q).skip(sk).limit(ps)
                    return result
            }
        } catch (error) {

        }
    }
}
module.exports = new RankControler()