const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema } = require('graphql')
const BookModel = require('../model/book')
const NewBookModel = require('../model/newbook')
const HotSaleModel = require('../model/hotsalebook')
const FreeBookModel = require('../model/freebook')
const HHotType = new GraphQLObjectType({
    name: "HHotFiction",
    fields: () => ({
        bid: { type: GraphQLString },
        bName: { type: GraphQLString },
        bAuth: { type: GraphQLString },
        desc: { type: GraphQLString },
        cat: { type: GraphQLString },
        catId: { type: GraphQLString },
        cnt: { type: GraphQLString },
        rankCnt: { type: GraphQLString },
        rankNum:{ type: GraphQLString },
        state:{type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        hotfiction: {
            type: new GraphQLList(HHotType),
            resolve(parent, args) {
                return YPModel.find({}).skip(0).limit(7)
            }
        },
        bestsellfiction: {
            type: new GraphQLList(HHotType),
            resolve(parent, args) {
                return HotSaleModel.find({}).skip(0).limit(3)
            }
        },
        freefiction:{
            type: new GraphQLList(HHotType),
            resolve(parent, args) {
                return FreeBookModel.find({}).skip(0).limit(7)
            }
        },
        newfiction:{
            type: new GraphQLList(HHotType),
            resolve(parent, args) {
                return NewBookModel.find({}).skip(0).limit(3)
            }
        },
        qingfiction:{
            type: new GraphQLList(HHotType),
            resolve(parent, args) {
                return BookModel.find({'catId':'12'}).skip(0).limit(7)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});