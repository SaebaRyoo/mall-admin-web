const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const proxy = require('./src/config/apiConfig');


const devMode = process.env.NODE_ENV === 'development';

const getStyleLoaders = (cssOptions) => {
    const loaders = [
        {
            loader: ExtractCssChunks.loader,
            options: {
                // only enable hot in development
                hmr: devMode,
            },
        },
        {
            loader: 'css-loader',
            options: cssOptions
        },
        {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: (loader) => [
                    require('postcss-import')({ root: loader.resourcePath }),
                    require('postcss-cssnext')(),
                    require('cssnano')()
                ]
            }
        },
        { loader: "less-loader" } // compiles Less to CSS 
    ]
    return loaders;
};

// 通用
const COMMON_PLUGIN = [
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
    // 分离出js中的css代码
    new ExtractCssChunks({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? 'styles/[name].css' : 'styles/[name].[hash].css',
        chunkFilename: devMode ? 'styles/[id].css' : 'styles/[id].[hash].css',
    })
]

// 开发
const DEV_PLUGIN = [
    new webpack.HotModuleReplacementPlugin(),
]

// 生产
const PROD_PLUGIN = [
    // 默认情况删除 webpack output.path目录中的所有文件
    new CleanWebpackPlugin(),
]

const getPlugins = () => {
    return devMode ? COMMON_PLUGIN.concat(DEV_PLUGIN) : COMMON_PLUGIN.concat(PROD_PLUGIN);
}

module.exports = {
    entry: {
        main: './src/index.jsx',
    },
    // production mode(生产模式) 可以开箱即用地进行各种优化。 包括压缩，作用域提升，tree-shaking 等。
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:16].bundle.js',
        chunkFilename: '[name].[hash:16].js',
        publicPath: '/'
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
                },
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
                test: /\.(png|jpe?g|gif|pdf)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2048,
                            name: 'images/[name].[hash:8].[ext]' // 配置自定义文件名模板
                        },
                    },
                ],
            },
            {
                // global less
                test: /^(.*\.global).*\.less$/,
                exclude:[path.resolve(__dirname, 'node_modules')],
                use: getStyleLoaders({
                    sourceMap: devMode,
                    modules: false,
                    importLoaders: 2,
                })
            },
            {
                //less module
                test: /^(?!.*\.global).*\.less$/,
                exclude:[path.resolve(__dirname, 'node_modules')],
                use: getStyleLoaders({
                    sourceMap: devMode,
                    modules: {
                        localIdentName: '[path][name]__[local]--[hash:base64:5]', // class名称格式
                    },
                    importLoaders: 2,
                })
            },
        ]
    },
    plugins: getPlugins(),

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true, // 当使用 HTML5 History API 时,任意的 404 响应都可能需要被替代为 index.html
        port: 3000,
        proxy: proxy,
        hot: true, // 热重载
    },
    resolve: {
        // 设置别名
        alias: {
            "@src": path.resolve(__dirname, 'src')
        }
    }
}