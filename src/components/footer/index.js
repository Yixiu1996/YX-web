/*
 * @Author: your name
 * @Date: 2020-09-10 22:33:01
 * @LastEditTime: 2020-09-14 20:34:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \person-app\src\components\footer\index.js
 */
import React, { Component } from 'react'
import './index.less'

export default class index extends Component {
  render() {
    return <div className="footer">
      <div className="footer_item">
        <div className="footer_item_left">花&nbsp;&nbsp;&nbsp;&nbsp;名：</div>
        <div className="footer_item_right">Yixiu</div>
      </div>
      <div className="footer_item">
        <div className="footer_item_left">邮&nbsp;&nbsp;&nbsp;&nbsp;箱：</div>
        <div className="footer_item_right">jczcycy@163.com</div>
      </div>
      <div className="footer_item">
        <div className="footer_item_left">github：</div>
        <div className="footer_item_right"><a href="https://github.com/Yixiu1996">https://github.com/Yixiu1996</a></div>
      </div>
    </div>
  }
}
