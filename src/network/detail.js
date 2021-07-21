import request from './request'

// 携带id请求Detail组件数据，参数名必须为iid，因为后面会拼接成query字符串
export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

// 请求推荐数据
export function getRecommend(iid) {
  return request({
    url: '/recommend'
  })
}

export class BaseInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.nowPrice = itemInfo.lowNowPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;

    this.otherInfo = []
    this.otherInfo.push(columns[0]);
    this.otherInfo.push(columns[1]);
    this.otherInfo.push(services[services.length - 1].name);
    
    this.services = services;
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.sales = shopInfo.cSells;
    this.goodsCount = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
}

export class ParamsInfo {
  constructor(itemParams) {
    this.sizeInfo = itemParams.rule.tables[0];
    this.productInfo = itemParams.info.set;
  }
}
