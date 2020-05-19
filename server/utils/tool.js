//判断对象是否为空
function isEmptyObj(obj) {
    return Object.keys(obj).length > 0
}
//json数据解析
function formatData(data) {
    if (Object.prototype.toString.call(data) == "[object String]") {
        return JSON.parse(data)
    }
    return JSON.stringify(data)
}
module.exports = {
    isEmptyObj,
    formatData
}