import request from './request'

// 请求轮播图数据
export function getMultidata() {
  return request({
    url: '/home/multidata'
  })
}

// 请求首页展示的商品列表数据
export function getGoodsList(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
