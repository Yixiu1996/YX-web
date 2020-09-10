/*
 * @Author: your name
 * @Date: 2020-09-10 22:18:07
 * @LastEditTime: 2020-09-10 22:23:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \person-app\src\pages\index.js
 */
import React, { Component } from 'react'
import Menu from '../components/menu';
import Content from './content';

export default class index extends Component {
  render() {
    return (
      <div className="app_body">
        <Menu />
        <Content />
      </div>
    )
  }
}
