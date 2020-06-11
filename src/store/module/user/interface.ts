import { UserInfo } from "@/interface/user"
export interface Iuser {
    isLogin?: boolean,
    loginInfo?: any,
    isCollect?: boolean,
    userInfo?: UserInfo,
    collectList?: Array<any>,
    likeList?: Array<any>
}
