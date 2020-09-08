/*
 * @Author: your name
 * @Date: 2020-09-08 21:00:01
 * @LastEditTime: 2020-09-08 21:04:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \work-order\workorder-react\craco.config.js
 */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#DD001B' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};