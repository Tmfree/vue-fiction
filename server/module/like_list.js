//喜欢
const UserCtrl = require('../controler/userControler')
const { HttpSuccess, HttpError } = require('../utils/httpwithjson')
async function getLikeList(params = {}) {
    try {
        let { tokenCode } = params
        if (tokenCode == 4001) {
            return new HttpSuccess('操作成功',[])
        } else {
            let result = await UserCtrl.getLikeList(params)
            return new HttpSuccess('操作成功', result)
        }
    } catch (error) {
        console.log(error)
    }

}
module.exports = getLikeList