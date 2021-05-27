const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "none",
  entry: './index.js',
  // entry: {
  //   'index': ["./index"],
  //   'app': ["./App.vue"],
  //   'test': ["./test"]
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].js'
    filename: '[name].[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // 从右侧往左侧顺序执行
        exclude:/node_modules/
      },
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader'], // 从右向左解析原则
        exclude:/node_modules/
      }
      // {
      //   test:/\.js$/,
      //   use:{
      //     loader:'babel-loader',
      //     options:{
      //       presets:['@babel/preset-env']
      //     }
      //   },
      //   exclude:/node_modules/
      // },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'public/index.html'),
      inject: 'body',
    })
  ]
}
// 去掉console
// optimization: {
//   minimizer: [
//     new TerserPlugin({
//       sourceMap: true, // Must be set to true if using source-maps in production
//       terserOptions: {
//         compress: {
//           drop_console: true,
//         },
//       },
//     }),
//   ],
// },