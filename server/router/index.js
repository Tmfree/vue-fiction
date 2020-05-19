const fs = require('fs');
const path = require('path');
const router = require('express').Router();

fs.readdirSync(path.resolve(__dirname, '../module')).reverse().forEach(file => {
    if (!file.endsWith('.js')) return
    let route = '/' + file.replace(/\.js$/i, '').replace(/_/g, '/')
    let question = require(path.resolve(__dirname, '../module', file))
    router.use(route, (req, res) => {
        let query = Object.assign({}, req.query, req.body)
        question(query).then(result => {
            res.send(result)
        })
    })
})

module.exports = router