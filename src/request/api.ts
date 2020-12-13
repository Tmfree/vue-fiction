import http from "./http"
import { AxiosResponse } from 'axios'
import { ResInfo } from "@/interface/base"
import { setToken, getToken } from '@/utils/auth'

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

class Ajax {
    async getRank(params = {}) {
        let url = `/api/rank`;
        let result: AxiosResponse<ResInfo> = await http({
            method: 'get',
            url,
            params
        })
        return result.data;
    }
    async getRankDetail(params = {}) {
        let url = `/api/rank/detail`;
        let result: AxiosResponse<ResInfo> = await http({
            method: 'get',
            url,
            params
        })
        return result.data;
    }
    async getCategory(params = {}) {
        let url = `/api/category`;
        let result: AxiosResponse<ResInfo> = await http({
            method: 'get',
            url,
            params
        })
        return result.data;
    }
    async getCategoryList(params = {}) {
        let url = `/api/category/detail`;
        let result: AxiosResponse<ResInfo> = await http({
            method: 'get',
            url,
            params
        })
        return result.data;
    }
    async getBookList(params = {}) {
        let url = `/api/getbooklist`;
        let result: AxiosResponse<ResInfo> = await http({
            method: 'get',
            url,
            params
        })
        return result.data;
    }
    async getBookInfo(params = {}) {
        let url = `/api/book`;
        let result: AxiosResponse<ResInfo> = await http({
            method: 'get',
            url,
            params
        })
        return result.data;
    }
    async getSearch(params = {}) {
        let url = `/api/search`;
        let result: AxiosResponse<ResInfo> = await http({
            method: 'get',
            url,
            params
        })
        return result.data;
    }

    async login(params = {}) {
        let url = '/api/login';
        let result: AxiosResponse<ResInfo> = await http({
            method: 'post',
            url,
            params
        })
        result.data.data.token && setToken('User-Token', result.data.data.token)
        result.data.data.uId && setToken('User-Id', result.data.data.uId)
        return result.data;
    }

    async getUserInfo(params: any = {}) {
        let url = '/api/getUserInfo';
        params.uId = getToken("User-Id");
        let result: AxiosResponse<ResInfo> = await http({
            method: 'post',
            url,
            params
        })
        return result.data.data;
    }

    async getCollectList(params: any) {
        let url = `/api/collect/list`;
        params.uId = getToken('User-Id');
        let result: AxiosResponse<ResInfo> = await http({
            method: 'get',
            url,
            params
        })
        return result.data;
    }
    async addCollect(params: any) {
        let url = `/api/collect/add`;
        params.uId = getToken('User-Id');
        let result: AxiosResponse<ResInfo> = await http({
            method: 'get',
            url,
            params
        })
        return result.data;
    }
    async delCollect(params: any) {
        let url = `/api/collect/del`;
        params.uId = getToken('User-Id');
        let result: AxiosResponse<ResInfo> = await http({
            method: 'get',
            url,
            params
        })
        return result.data;
    }

    async getLikeList(params: any) {
        let url = `/api/like/list`;
        params.uId = getToken('User-Id');
        let result: AxiosResponse<ResInfo> = await http({
            method: 'get',
            url,
            params
        })
        return result.data;
    }
    async addLike(params: any) {
        let url = `/api/like/add`;
        params.uId = getToken('User-Id');
        let result: AxiosResponse<ResInfo> = await http({
            method: 'get',
            url,
            params
        })
        return result.data;
    }
    async delLike(params: any) {
        let url = `/api/like/del`;
        params.uId = getToken('User-Id');
        let result: AxiosResponse<ResInfo> = await http({
            method: 'get',
            url,
            params
        })
        return result.data;
    }
}

export default new Ajax()