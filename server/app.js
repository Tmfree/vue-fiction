const express = require('express');
const app = express();
const router = require('./router/index');
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
    }
    else {
        next();
    }
});
app.use('/api', router);
let server = app.listen(3000, "192.168.1.101", () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('app listening at http://%s:%s', host, port);
});