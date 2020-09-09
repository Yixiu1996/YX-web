/*
 * @Author: your name
 * @Date: 2020-09-08 21:25:07
 * @LastEditTime: 2020-09-09 22:22:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-app\src\components\header\index.js
 */
import React, { Component } from 'react';
import { Row, Col, Switch } from 'antd';
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
  onChange(checked) {
    console.log(checked);
  }
  render() {
    return (
      <Row className="content_header">
        <Col className="content_header_left" xs={0} sm={4}>
          <p>娱乐模式</p>
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
