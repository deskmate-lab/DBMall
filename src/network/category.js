import request from './request'

export function getMenu() {
  return request({
    url: '/category'
  })
}

export function getSubmenu(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
