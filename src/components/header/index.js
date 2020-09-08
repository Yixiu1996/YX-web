/*
 * @Author: your name
 * @Date: 2020-09-08 21:25:07
 * @LastEditTime: 2020-09-08 22:40:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-app\src\components\header\index.js
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Util from '../../utils/utils'
import './index.less';

export default class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'XXF'
    }
  }
  componentDidMount(){
    setInterval(()=>{
      let sysTime = Util.formatTime(new Date())
      this.setState({
        sysTime
      })
    },1000)
  }
  render() {
    return (
      <Row className="content_header">
        <Col className="content_header_left" xs={0} sm={4}>
          <p>先空着</p>
          <p>以后自己设计个logo</p>
        </Col>
        <Col className="content_header_center" xs={24} sm={16}>
          XF的快乐生活
        </Col>
        <Col className="content_header_right" xs={0} sm={4}>
          <div className="right_time">{this.state.sysTime}</div>
        </Col>
      </Row>
    )
  }
}
