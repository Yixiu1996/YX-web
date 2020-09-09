/*
 * @Author: your name
 * @Date: 2020-09-08 21:25:07
 * @LastEditTime: 2020-09-09 23:06:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-app\src\components\header\index.js
 */
import React, { Component } from 'react';
import { Row, Col, Switch } from 'antd';
import store from '../../store'
import Util from '../../utils/utils'
import './index.less';

export default class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'XXF',
      style: store.getState().style
    }
    this.storeChange = this.storeChange.bind(this) // 改变这个方法的this指向
    store.subscribe(this.storeChange) // 订阅store的变化
  }
  componentDidMount(){
    setInterval(()=>{
      let sysTime = Util.formatTime(new Date())
      this.setState({
        sysTime
      })
    },1000)
  }
  onChange(checked) {
    // 创建action 提交变化
    const action ={
      type: 'changeStyle',
      value: checked ? 'study' : 'recreation'
    }
    store.dispatch(action)
  }
  storeChange(){
    this.setState({
      style: store.getState().style
    })
    console.log(this.state)
  }
  render() {
    return (
      <Row className="content_header">
        <Col className="content_header_left" xs={0} sm={4}>
          <p>{this.state.style === 'recreation' ? '娱乐模式' : '学习模式'}</p>
        </Col>
        <Col className="content_header_center" xs={24} sm={16}>
          XF的快乐生活
        </Col>
        <Col className="content_header_right" xs={0} sm={4}>
          <Row>
            <Col span="18">
            <div className="right_time">{this.state.sysTime}</div>
            </Col>
            <Col span="6">
              <Switch checkedChildren="娱乐" unCheckedChildren="学习" defaultChecked onChange={this.onChange} />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
