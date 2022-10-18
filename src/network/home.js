import { requestInfo } from "./request";

//获取头部数据(轮播图、推荐)
export function getHomeMultiData() {
  return requestInfo({
    url: "/home/multidata",
    method: "get",
  });
}

//获取商品数据
export function getHomeGoodsInfo(type, page) {
  return requestInfo({
    url: "/home/data",
    method: "get",
    params: {
      type, //商品类别
      page, //商品页码
    },
  });
}
