/*
 * @Author: your name
 * @Date: 2020-09-09 22:42:31
 * @LastEditTime: 2020-09-09 23:02:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \person-app\src\store\reducer.js
 */
const defaultState = {
  style: 'recreation'  // 默认是娱乐模式
} // 默认数据
export default (state = defaultState,action)=>{
  if(action.type === 'changeStyle'){
    let newState = JSON.parse(JSON.stringify(state))
    newState.style = action.values
    return newState
  }
  return state
}