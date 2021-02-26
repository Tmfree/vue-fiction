const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();
const router = require('./router/index')
const userToken = require('./utils/userToken')
//const cache = require('apicache').middleware
//const crawRouter = require('./router/craw')
const { connect } = require('./utils/connect')
const { graphqlHTTP } = require('express-graphql')
const graphschema = require('./graphql/schema')
//链接数据库
connect()
//跨域
app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': req.headers.origin || '*',
        'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type,Authorization',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
    })
    req.method === 'OPTIONS' ? res.status(204).end() : next()
})
//静态资源
app.use('/static', express.static(path.join(__dirname, 'static')))

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//graphql
app.use('/graphql', graphqlHTTP({
    schema: graphschema,
    graphiql: true
}))
// cache
//app.use(cache('3 minutes', ((req, res) => res.statusCode === 200)))

//拦截需要token验证的路由
app.use(async (req, res, next) => {
    let token = req.headers.authorization
    let code = await userToken.verifyToken(token)
    req.query.tokenCode = code
    req.query.token = token
    next()
})
//app.use('/craw', crawRouter)
app.use('/api', router)

const port = process.env.PORT || 3000
const host = process.env.HOST || ''

app.server = app.listen(port, host, () => {
    console.log(`server running @ http://${host ? host : 'localhost'}:${port}`)
})
