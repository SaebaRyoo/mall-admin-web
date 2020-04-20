const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.jsx', // webpack4默认值
    },
    // production mode(生产模式) 可以开箱即用地进行各种优化。 包括压缩，作用域提升，tree-shaking 等。
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].js',
        publicPath: './'
    },
    optimization: {
        // 将node_modules中的包和项目代码分割
        splitChunks: {
            // 默认为async(异步分割)
            // 同步、异步都打包
            chunks: 'all',
            cacheGroups: {
                lodash: {
                  name: 'chunk-lodash', // 单独将 lodash 拆包
                  priority: 10, // 优先级要大于 verdors 不然会被打包进 verdors
                  test: /[\\/]node_modules[\\/]lodash[\\/]/
                },
                // webpack4的默认配置是通过test: /[\\/]node_modules[\\/]/分割通过node_modules导入的模块
                vendors: {
                    name: 'vendors'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            }
        ]
    },
    plugins: [
        // 默认情况删除 webpack output.path目录中的所有文件
        new CleanWebpackPlugin(),
        // 生成html页面
        new HtmlWebpackPlugin({
            // 打包输出HTML
            title: 'mall-admin',
            minify: {
              // 压缩 HTML 文件
              removeComments: true, // 移除 HTML 中的注释
              collapseWhitespace: true, // 删除空白符与换行符
              minifyCSS: true // 压缩内联 css
            },
            filename: 'index.html', // 生成后的文件名
            template: 'src/index.html' // 根据此模版生成 HTML 文件
        }),
    ]
}