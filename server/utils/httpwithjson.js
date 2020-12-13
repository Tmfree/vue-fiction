class HttpJson {
    constructor(code, msg, status, data) {
        this.code = code
        this.msg = msg
        this.status = status
        this.data = data || null
    }
}
class HttpSuccess extends HttpJson {
    constructor(msg = '操作成功', data) {
        super(2000, msg, 'success', data)
    }
}
class HttpError extends HttpJson {
    constructor(code, msg = '操作失败') {
        super(code, msg, 'error')
    }
}
module.exports = {
    HttpSuccess,
    HttpError
}