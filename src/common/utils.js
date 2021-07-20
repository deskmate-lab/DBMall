// 1. 防抖函数
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

// 2. 时间戳的格式化
// 传入时间戳数字和格式化字符串(如'yyyy-MM-dd hh:mm:ss')
export function formatDate(date, fmt) {
  // 将时间戳转换为Date对象
  date = new Date(date);

  // /(y+)/表示匹配到1个或者多个y
  if (/(y+)/.test(fmt)) {
    // RegExp.$1表示匹配到的该字符串'yyyy'，将'yyyy'替换为'2021'
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    // getMonth()获取的是monthIndex
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      // 1) 如果fmt中为'm'，则直接用str替换，得到如'4'、'10'之类的结果
      // 2) 如果fmt中为'mm'，则str左边补零后替换，得到如'04'、'10'之类的结果
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

// 左边自动补0
// 1) 如果str为'04'，则'0004'截取从2开始截取，得到'04'
// 2) 如果str为'4'，则'004'截取从1开始截取，也得到'04'
function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};
