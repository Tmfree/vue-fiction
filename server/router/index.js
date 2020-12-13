const fs = require('fs');
const path = require('path');
const router = require('express').Router();

fs.readdirSync(path.resolve(__dirname, '../module')).reverse().forEach(file => {
    if (!file.endsWith('.js')) return
    let route = '/' + file.replace(/\.js$/i, '').replace(/_/g, '/')
    let question = require(path.resolve(__dirname, '../module', file))
    router.use(route, async (req, res) => {
        let query = Object.assign({}, req.query, req.body)
        let result = await question(query)
        res.send(result)
    })
})

module.exports = router