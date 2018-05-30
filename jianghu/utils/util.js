const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/* 封装request */
const request = (url, data = {}, method = "GET") => {
  return new Promise((resolve, reject) =>{
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json',
        'X-Nideshop-Token': wx.getStorageSync('token')
      },
      success: function(res){
        console.log('请求成功');
        
        if (res.statusCode == 200) {
          resolve(res.data)
        }else {
          reject(res.errMsg)
        }
      },
      fail: function (err) {
        reject(err)
        console.log("failed")
      }
    })
  })
 }
/** 调用微信登入 */

const login = () => {
  return new Promise((resolve, reject)=>{
    wx.login({
      success: function(res){
        if(res.code){
          console.log('远程')
          resolve(res.code)
        }else{
          reject(res)
        }
      },
      fail: function(err) {
        reject(err)
      }
    })

  })
}

/** 获取用户信息 */
const getUserInfo = () => {
  return new Promise((resolve, reject)=>{
    wx.getUserInfo({
      success: function(res){
        console.log('用户信息')
        resolve(res)
      },
      fail: function(err){
        reject(err)
      }
    })
  })
}
// 设置选择时间picker组件数据
function getLoopArray(start, end) {
  var start = start || 0;
  var end = end || 1;
  var array = [];
  for (var i = start; i <= end; i++) {
    array.push(formatNumber(i));
  }
  return array;
}
function getMonthDay(year, month) {
  var flag = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0), array = null;

  switch (month) {
    case '01':
    case '03':
    case '05':
    case '07':
    case '08':
    case '10':
    case '12':
      array = getLoopArray(1, 31)
      break;
    case '04':
    case '06':
    case '09':
    case '11':
      array = getLoopArray(1, 30)
      break;
    case '02':
      array = flag ? getLoopArray(1, 29) : getLoopArray(1, 28)
      break;
    default:
      array = '月份格式不正确，请重新输入！'
  }
  return array;
}
function getNewDateArry() {
  // 当前时间的处理
  var newDate = new Date();
  var year = formatNumber(newDate.getFullYear()),
    mont = formatNumber(newDate.getMonth() + 1),
    date = formatNumber(newDate.getDate()),
    hour = formatNumber(newDate.getHours()),
    minu = formatNumber(newDate.getMinutes()),
    seco = formatNumber(newDate.getSeconds());

  return [year, mont, date, hour, minu, seco];
}
function dateTimePicker(startYear, endYear, date) {
  // 返回默认显示的数组和联动数组的声明
  var dateTime = [], dateTimeArray = [[], [], [], [], [], []];
  var start = startYear || 2017;
  var end = endYear || 2018;
  // 默认开始显示数据
  var defaultDate = date ? [...date.split(' ')[0].split('-'), ...date.split(' ')[1].split(':')] : getNewDateArry();
  // 处理联动列表数据
  /*年月日 时分秒*/
  dateTimeArray[0] = getLoopArray(start, end);
  dateTimeArray[1] = getLoopArray(1, 12);
  dateTimeArray[2] = getMonthDay(defaultDate[0], defaultDate[1]);
  dateTimeArray[3] = getLoopArray(0, 23);
  dateTimeArray[4] = getLoopArray(0, 59);
  dateTimeArray[5] = getLoopArray(0, 59);

  dateTimeArray.forEach((current, index) => {
    dateTime.push(current.indexOf(defaultDate[index]));
  });

  return {
    dateTimeArray: dateTimeArray,
    dateTime: dateTime
  }
}

module.exports = {
  formatTime: formatTime,
  getUserInfo: getUserInfo,
  login: login,
  request: request,
  dateTimePicker: dateTimePicker,
  getMonthDay: getMonthDay
}
