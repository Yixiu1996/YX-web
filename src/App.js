/*
 * @Author: your name
 * @Date: 2020-09-08 20:43:46
 * @LastEditTime: 2020-09-10 22:50:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work-order\workorder-react\src\App.js
 */
import React from 'react'
import Header from './components/header'
import Body from './pages/index'
import Footer from './components/footer'
import './App.less'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body className="app_body"></Body>
      <Footer></Footer>
    </div>
  )
}

export default App
