import http from "./http"
import { UserInfo } from "@/interface/user"
import { Toast } from 'vant'
import { AxiosResponse } from 'axios';
import { ResInfo, LunBoInfo } from "@/interface/base"
//登录
export const postLogin = async (data = {}) => {
    let url = '/api/login';
    let result: AxiosResponse<ResInfo> = await http({
        method: 'post',
        url,
        data
    })
    if (result.data.code !== 0) {
        Toast({
            message: result.data.msg,
            className: 'custom-toast',
            duration: 2000
        })
    }
    return result.data;
}
//获取用户信息
export const getUserInfo = async (data = {}) => {
    let url = '/api/getUserInfo';
    let result: AxiosResponse<ResInfo<UserInfo>> = await http({
        method: 'post',
        url,
        data
    })
    return result.data.data;
}
//轮播
export const getLunbo = async (data = {}) => {
    let url = '/api/lunbo';
    let result: AxiosResponse<ResInfo<Array<LunBoInfo>>> = await http({
        method: 'get',
        url,
        params: data
    })
    return result.data.data;
}
//热门小说
export const getHotFiction = async (data = {}) => {
    let url = '/api/hotfiction';
    let result: AxiosResponse<ResInfo> = await http({
        method: 'get',
        url,
        params: data
    })
    return result.data;
}
//免费小说
export const getFreeFiction = async (data = {}) => {
    let url = '/api/freefiction';
    let result: AxiosResponse<ResInfo> = await http({
        method: 'get',
        url,
        params: data
    })
    return result.data;
}
//新书抢鲜
export const getNewFiction = async (data = {}) => {
    let url = '/api/newfiction';
    let result: AxiosResponse<ResInfo> = await http({
        method: 'get',
        url,
        params: data
    })
    return result.data;
}

//轻小说
export const getQingFiction = async (data = {}) => {
    let url = '/api/qingfiction';
    let result: AxiosResponse<ResInfo> = await http({
        method: 'get',
        url,
        params: data
    })
    return result.data;
}

//小说介绍
export const getBookInfo = async (data = {}) => {
    let url = `/api/book`;
    let result: AxiosResponse<ResInfo> = await http({
        method: 'get',
        url,
        params: data
    })
    return result.data;
}

//小说章节
export const getBookCatalog = async (data = {}) => {
    let url = `/api/catalog`;
    let result: AxiosResponse<ResInfo> = await http({
        method: 'get',
        url,
        params: data
    })
    return result.data;
}

//小说章节内容
export const getArticle = async (data = {}) => {
    let url = `/api/article`;
    let result: AxiosResponse<ResInfo> = await http({
        method: 'get',
        url,
        params: data
    })
    return result.data;
}

//分类
export const getCategory = async (data = {}) => {
    let url = `/api/category`;
    let result: AxiosResponse<ResInfo> = await http({
        method: 'get',
        url,
        params: data
    })
    return result.data;
}

//分类详情
export const getCategoryDetail = async (data = {}) => {
    let url = `/api/category/detail`;
    let result: AxiosResponse<ResInfo> = await http({
        method: 'get',
        url,
        params: data
    })
    return result.data;
}

//排行榜
export const getRank = async (data = {}) => {
    let url = `/api/rank`;
    let result: AxiosResponse<ResInfo> = await http({
        method: 'get',
        url,
        params: data
    })
    return result.data;
}

//排行榜详情
export const getRankDetail = async (data = {}) => {
    let url = `/api/rank/detail`;
    let result: AxiosResponse<ResInfo> = await http({
        method: 'get',
        url,
        params: data
    })
    return result.data;
}

//搜索
export const getSearch = async (data = {}) => {
    let url = `/api/search`;
    let result: AxiosResponse<ResInfo> = await http({
        method: 'get',
        url,
        params: data
    })
    return result.data;
}

//收藏
export const postCollect = async (data = {}) => {
    let url = `/api/collect`;
    let result: AxiosResponse<ResInfo> = await http({
        method: 'post',
        url,
        data
    })
    return result.data;
}
//点赞
export const postLike = async (data = {}) => {
    let url = `/api/like`;
    let result: AxiosResponse<ResInfo> = await http({
        method: 'post',
        url,
        data
    })
    return result.data;
}
//收藏列表
export const getCollectList = async (data = {}) => {
    let url = `/api/getCollectList`;
    let result: AxiosResponse<ResInfo> = await http({
        method: 'get',
        url,
        params: data
    })
    return result.data;
}
//点赞列表
export const getLikeList = async (data = {}) => {
    let url = `/api/getLikeList`;
    let result: AxiosResponse<ResInfo> = await http({
        method: 'get',
        url,
        params: data
    })
    return result.data;
}