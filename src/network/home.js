import {requestInfo} from "./request"

//获取头部数据(轮播图、推荐)
export function getHomeMultiData(){
    return requestInfo({
        url: "/home/multidata",
        method: "get",
    })
}