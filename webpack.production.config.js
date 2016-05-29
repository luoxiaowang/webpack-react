var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: {
    app:path.resolve(__dirname, 'app/main.js'),
    mobile: path.resolve(__dirname, 'app/mobile.js'),
    commons: ['react', 'react-dom']//将经常用的库js包打到commons.js中,此js中的内容不会经常变动
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js' // 注意我们使用了变量
  },
  module: {
    loaders: [{
      test: /\.js$/,
      // 这里再也不需通过任何第三方来加载
      exclude: [node_modules_dir],
      loader: 'babel'
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
  },
   plugins: [
    //这个插件可以将多个打包后的资源中的公共部分打包成单独的文件,公共文件必须引入
    new webpack.optimize.CommonsChunkPlugin({
        name: "commons",   //上面配置的公共内容
        filename: "commons.js",
        minChunks: 2//当项目中引用次数超过2次的包自动打入commons.js中,可自行根据需要进行调整优化
    }),
    new webpack.optimize.UglifyJsPlugin({  //压缩版
        compress: {
            warnings: false
        },
    })  
  ]
};

module.exports = config;