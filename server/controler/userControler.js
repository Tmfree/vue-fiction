const UserModel = require('../model/user')
const UserInfoModel = require('../model/userinfo')
const CollcetModel = require('../model/collect')
const LikeModel = require('../model/like')
class UserControler {
    async getUser(params) {
        try {
            let { account } = params
            let result = (await UserModel.find({ 'uAccount': account }))[0]
            return result
        } catch (error) {
            console.log(error)
        }
    }
    async getUserInfo(params) {
        try {
            let { uId } = params
            let result = (await UserInfoModel.find({ uId }))[0]
            return result
        } catch (error) {
            console.log(error)
        }
    }
    async getCollectList(params) {
        try {
            let { uId, bid } = params
            let q = { uId }
            bid && (q.bid = bid)
            let result = await CollcetModel.find(q)
            return result
        } catch (error) {
            console.log(error)
        }
    }
    async addCollect(params) {
        try {
            let { uId, bid, bName } = params
            await CollcetModel.insertMany({ uId, bid, bName })
        } catch (error) {
            console.log(error)
        }
    }
    async delCollect(params) {
        try {
            let { uId, bid } = params
            await CollcetModel.remove({ uId, bid })
        } catch (error) {
            console.log(error)
        }
    }
    async getLikeList(params) {
        try {
            let { uId, bid } = params
            let q = { uId }
            bid && (q.bid = bid)
            let result = await LikeModel.find(q)
            return result
        } catch (error) {
            console.log(error)
        }
    }
    async addLike(params) {
        try {
            let { uId, bid, bName } = params
            await LikeModel.insertMany({ uId, bid, bName })
        } catch (error) {
            console.log(error)
        }
    }
    async delLike(params) {
        try {
            let { uId, bid } = params
            await LikeModel.remove({ uId, bid })
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new UserControler()