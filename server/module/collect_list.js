//收藏
const UserCtrl = require('../controler/userControler')
const { HttpSuccess, HttpError } = require('../utils/httpwithjson')
async function getCollectList(params = {}) {
    try {
        let { tokenCode } = params
        if (tokenCode == 4001) {
            return new HttpSuccess('操作成功',[])
        } else {
            let result = await UserCtrl.getCollectList(params)
            return new HttpSuccess('操作成功', result)
        }
    } catch (error) {
        console.log(error)
    }

}
module.exports = getCollectList