const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    // webpack4默认值
    entry: {
        main: './src/index.js'
    },
    // production mode(生产模式) 可以开箱即用地进行各种优化。 包括压缩，作用域提升，tree-shaking 等。
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].js',
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            // 默认为async, 异步分割
            chunks: 'all', // 同步、异步都打包
            cacheGroups: {
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
      new CleanWebpackPlugin() // 默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。
    ]
}