/*
 * @Author: your name
 * @Date: 2020-09-09 22:40:16
 * @LastEditTime: 2020-09-09 22:45:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \person-app\src\store\index.js
 */
import {createStore} from 'redux';
import reducer from './reducer';
const store = createStore(reducer) // 创建数据存储仓库
export default store; // 暴露出去仓库