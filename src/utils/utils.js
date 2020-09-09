/*
 * @Author: your name
 * @Date: 2020-09-08 22:29:36
 * @LastEditTime: 2020-09-09 22:24:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-app\src\utils\utils.js
 */
export default {
  formatTime(time) {
    if (!time) return "";
    let secStr = time.getSeconds()
    if (secStr < 10) {
      secStr = '0' + secStr
    }
    let timeStr =
      time.getFullYear() +
      "年" +
      (time.getMonth() + 1) +
      "月" +
      time.getDay() +
      "日 " +
      time.getHours() +
      ":" +
      time.getMinutes() +
      ":" +
      secStr;
    return timeStr;
  },
};