// 防抖函数
export function debounce(func, delay) {
  let timer = null;
  // 函数闭包，timer不会被销毁
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}
