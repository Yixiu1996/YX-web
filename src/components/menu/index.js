/*
 * @Author: your name
 * @Date: 2020-09-10 21:59:15
 * @LastEditTime: 2020-09-15 22:02:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \person-app\src\components\menu\index.js
 */
import React, { Component } from 'react'
import { Menu } from 'antd';
import './index.less';
// import { NavLink } from "react-router-dom";
import Nav from '../../mock/menu'
const { SubMenu } = Menu;
export default class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      navList: Nav.navList
    }
  }
  componentDidMount(){
    console.log(this.state.navList)
    const menuNode = this.renderMenu(Nav.navList)
    console.log(menuNode)
    this.setState({
      menuNode
    })
    console.log(this.state.menuNode)
  }
  renderMenu(data){
    // 递归循环创建节点
    return data.map((item)=>{
      if(item.children){
        return (
          <SubMenu title={item.label} key={item.name}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item title={item.label} key={item.name}>
            {item.label}
          </Menu.Item>
        )
      }
      
    })
  }
  render(){
    return (
      <div className="menu">
        <Menu mode="vertical">
          {this.state.menuNode}
        </Menu>
      </div>
    )
  }
 
}
