var path = require('path');
var config = {
  entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',   //热启动
      path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      	test: /\.(js|jsx)$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      	loader: 'babel-loader' // 加载模块 "babel" 是 "babel-loader" 的缩写   
    },{
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
    },{
    	test: /\.less$/,
    	loader: 'style-loader!css-loader!postcss-loader!less-loader'
    }, {
      	test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
    }]
  }
};

module.exports = config;