/*
 * @Author: your name
 * @Date: 2020-09-08 20:43:46
 * @LastEditTime: 2020-09-09 22:21:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \person-app\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode> 
  //去掉使用antd组件报错findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Wave which is inside 
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
