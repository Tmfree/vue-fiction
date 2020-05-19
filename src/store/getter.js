export default {
    navBar: state => state.generalModule.navBar,//导航头信息
    rankDataList: state => state.rankModule.dataList,
    lunboList: state => state.generalModule.lunboList,//轮播数据列
    hotFictionList: state => state.generalModule.hotFictionList,//热门小说
    freeFictionList: state =>  state.generalModule.freeFictionList,//免费小说
    newFictionList: state => state.generalModule.newFictionList,//新书抢先
    qingFictionList: state => state.generalModule.qingFictionList,//轻小说
    bookInfo: state => state.bookModule.bookInfo,//小说介绍
    articleContent: state => state.bookModule.articleContent,//小说章节内容
    categoryList: state => state.categoryModule.categoryList,//小说分类
    categoryDetailList: state => state.categoryModule.categoryDetail,//小说分类详情
    searchList: state => state.generalModule.searchList,//搜索结果
    searchKW: state => state.generalModule.searchKW,//搜索关键字
    rank: state => state.rankModule.rank,//排行榜
    rankDetail: state => state.rankModule.rankDetail,//排行榜详情
    isLogin: state => state.userModule.isLogin,//是否登录
    loginInfo: state => state.userModule.loginInfo,//登录信息
    isCollect: state => state.userModule.isCollect,//收藏
    userInfo: state => state.userModule.userInfo,//用户信息
    collectList: state => state.userModule.collectList,//收藏列表
    likeList: state => state.userModule.likeList,//点赞列表
}