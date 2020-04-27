// 在cli中配置 -r @babel/register 支持在node中使用es6的import/export模块
import webpack from 'webpack';
import path from 'path';
import isWsl from 'is-wsl';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import safePostCssParser from 'postcss-safe-parser';
import TerserPlugin from 'terser-webpack-plugin';
import SpeedMeasurePlugin from "speed-measure-webpack-plugin"
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

// import { CheckerPlugin } from 'awesome-typescript-loader';
import proxy from './src/config/apiConfig';

const smp = new SpeedMeasurePlugin();

const devMode = process.env.NODE_ENV === 'development';
// const prodMode = process.env.NODE_ENV === 'production';
// Variable used for enabling profiling in Production
// passed into alias object. Uses a flag if passed into the build command
const isEnvProductionProfile =
    devMode && process.argv.includes('--profile');

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
        { loader: "less-loader", options: { javascriptEnabled: true } } // compiles Less to CSS
    ]
    return loaders;
};

// 通用
const COMMON_PLUGIN = [
		// 在单独的进程上运行ts类型检查器
    new ForkTsCheckerWebpackPlugin({
				reportFiles: ['src/**/*.{ts,tsx}', '!src/skip.ts']
		}),
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
        filename: devMode ? 'static/css/[name].css' : 'static/css/[name].[hash:8].css',
        chunkFilename: devMode ? 'static/css/[name].css' : 'static/css/[name].[contenthash:8].css',
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

module.exports = smp.wrap({
    entry: {
        main: './src/index.tsx'
    },
    devtool: devMode ? 'eval-source-map' : 'eval-cheap-source-map',
    // production mode(生产模式) 可以开箱即用地进行各种优化。 包括压缩，作用域提升，tree-shaking 等。
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: devMode ? 'static/js/bundle.js' : 'static/js/[name].[hash:8].bundle.js',
        chunkFilename:devMode ? 'static/js/bundle.js' : 'static/js/[name].[contenthash:8].chunk.js',
        publicPath: '/'
    },
    optimization: {
        minimizer: [
          // This is only used in production mode
          new TerserPlugin({
            terserOptions: {
              parse: {
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
              },
              mangle: {
                safari10: true,
              },
              // Added for profiling in devtools
              keep_classnames: isEnvProductionProfile,
              keep_fnames: isEnvProductionProfile,
              output: {
                ecma: 5,
                comments: false,
                ascii_only: true,
              },
            },
            // Use multi-process parallel running to improve the build speed
            // Default number of concurrent runs: os.cpus().length - 1
            // Disabled on WSL (Windows Subsystem for Linux) due to an issue with Terser
            // https://github.com/webpack-contrib/terser-webpack-plugin/issues/21
            parallel: !isWsl,
            // Enable file caching
            cache: true,
            sourceMap: devMode,
          }),
          // This is only used in production mode
          new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: {
              parser: safePostCssParser,
              map: devMode
                ? {
                    // `inline: false` forces the sourcemap to be output into a
                    // separate file
                    inline: false,
                    // `annotation: true` appends the sourceMappingURL to the end of
                    // the css file, helping the browser find the sourcemap
                    annotation: true,
                  }
                : false,
            },
          }),
        ],
        // 将node_modules中的包和项目代码分割
        // https://webpack.js.org/plugins/split-chunks-plugin/
        splitChunks: {
          // 默认为async(异步分割), all(同步、异步都打包)
          chunks: 'all',
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 6,
          maxInitialRequests: 4,
          automaticNameDelimiter: '~',
          cacheGroups: {
            // 单独打包的第三方库的优先级一定要大于匹配 /[\\/]node_modules[\\/]/ 的common-chunks, 不然会被打包进去。
            "lodash-chunk": {
                // When files paths are processed by webpack, they always contain / on Unix systems and \ on Windows.
                // That's why using [\\/] in {cacheGroup}.test fields is necessary to represent a path separator.
                // / or \ in {cacheGroup}.test will cause issues when used cross-platform.
                test: /[\\/]node_modules[\\/]lodash[\\/]/,
                name: 'lodash-chunk', // 单独将 lodash 拆包
                priority: 10,
            },
            "react-chunks": {
                test: /[\\/]node_modules[\\/](react|react-dom|scheduler|react-is|react-redux|redux|react-router-dom)[\\/]/,
                name: 'react-chunks', // 单独将 react 相关拆包
                // chunks: 'all',
                priority: 10,
            },
            "antd-chunk": {
                test: /[\\/]node_modules[\\/](antd)[\\/]/,
                name: 'antd-chunk', // 单独将 antd 拆包
                // chunks: 'all',
                priority: 10,
            },
            // 将node_modules中剩余的第三方库一起打包
            "common-chunks": {
              test: /[\\/]node_modules[\\/]/,
              name: 'common-chunks',
              priority: -10,
            },
            // 默认行为
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true // 如果当前块已从主模块拆分出来，则将重用它而不是生成新的块
            }
          }
        },
        // splitChunks: {
        //     chunks: 'all',
        //     name: false,
        // },
    },
    resolve: {
        // Currently we need to add '.ts' to the resolve.extensions array.
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        // 设置别名
        alias: {
            "@src": path.resolve(__dirname, 'src')
        }
    },
    context: __dirname, // to automatically find tsconfig.json
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
              test: /\.tsx?$/,
            // awesome-typescript-loader 编译ts的速度比ts-loader + fork-ts-checker-webpack-plugin 要慢大约至少3秒+，依据项目体积增加时间
            // loader: 'awesome-typescript-loader',
              loader: 'ts-loader',
              options: {
                // disable type checker - we will use it in fork plugin
                transpileOnly: true
              }
            },
            {
                test: /\.(png|jpe?g|gif|pdf)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2048,
                            name: 'static/images/[name].[hash:8].[ext]' // 配置自定义文件名模板
                        },
                    },
                ],
            },
            {
                // ant-design css
                test: /\.css$/,
                include: [path.resolve(__dirname, 'node_modules/antd/dist')],
                use: getStyleLoaders({
                    sourceMap: devMode,
                    modules: false
                }).slice(0,2)
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
        contentBase: path.join(__dirname, 'dev'),
        compress: true,
        historyApiFallback: true, // 当使用 HTML5 History API 时,任意的 404 响应都可能需要被替代为 index.html
        port: 3002,
        proxy: proxy,
        hot: true, // 热重载
    }
})
