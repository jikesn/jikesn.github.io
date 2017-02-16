/**
 * Created by Administrator on 2017/2/16.
 */
var webpack = require('webpack')

module.exports = {
    //页面入口文件配置
    entry: './css/style.css', //入口文件名字
    //入口文件输出配置
    output: {
        path: './3', //出口位置
        filename: 'bundle.js' //出口文件名字
    },
    //加载器配置
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
}