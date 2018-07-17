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
var index_ztcourses = require("../data/data_index_ztcourses.js");
var index_zxcourses = require("../data/data_index_zxcourses.js");
var user_ztcourses = require("../data/data_user_ztcourses.js");
var user_zxcourses = require("../data/data_user_zxcourses.js");
var user_zscourses = require("../data/data_user_zscourses.js");

function get_index_ztcourses() {
  return index_ztcourses;
}

function get_index_zxcourses() {
  return index_zxcourses;
}
function get_user_ztcourses() {
  return user_ztcourses;
}

function get_user_zxcourses() {
  return user_zxcourses;
}
function get_index_zscourses() {
  return user_zscourses;
}





module.exports = {
  formatTime: formatTime,
  get_index_ztcourses: get_index_ztcourses,
  get_index_zxcourses: get_index_zxcourses,
  get_user_ztcourses: get_user_ztcourses,
  get_user_zxcourses: get_user_zxcourses,
  get_index_zscourses: get_index_zscourses,
  createURL: createURL
}