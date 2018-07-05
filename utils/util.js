const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  get_index_courses: get_index_courses,
  createURL: createURL
}

// 链接和参数
function createURL(url, obj) {
  let props = "";
  let resultURL = "";
  for (let p in obj) {
    if (obj[p])
      props += "&" + p + "=" + obj[p];
  }
  resultURL = url + "?" + props.substr(1);
  console.log(resultURL);
  return resultURL;
}


// 首页数据
var index_courses = require("../data/data_index_courses.js");
function get_index_courses() {
  return index_courses;
}