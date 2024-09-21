const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: false,
    entry: './src/index.js',
    // 模块加载的路径
    resolve: {},
    // loader的路径
    resolveLoader: {
        modules: [path.resolve(__dirname, 'loaders'), path.resolve(__dirname, './node_modules')],
    },
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // --------- 以下是lg-file-loader
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
            {
                test: /\.png|gif|jpg$/,
                use: [
                    {
                        loader: 'lg-file-loader',
                        options: {
                            esModule: false,
                        }
                    }
                ]
            }
            // --------- 以下是file-loader
            // {
            //     test: /\.js$/,
            //     use: ['babel-loader'],
            // },
            // {
            //     test: /\.png|gif|jpg$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 esModule: false,
            //             }
            //         }
            //     ]
            // }
            // --------- 以下是loader的配置参数
            // {
            //     test: /\.js$/,
            //     use: [
            //         {
            //             loader: 'test-loader',
            //             options: {
            //                 name: 'mjt',
            //                 age: 18
            //             }
            //         }
            //     ]
            //
            // }
            // --------- 以下的loader.pitch的执行顺序
            // {
            //     test: /\.js$/,
            //     use: ['post-loader', 'inline-loader', 'normal-loader', 'pre-loader'],
            // }
            // --------- 以下的loader的执行顺序
            // {
            //     test: /\.js$/,
            //     use: ['normal-loader']
            // },
            // {
            //     test: /\.js$/,
            //     enforce: 'post',
            //     use: ['post-loader']
            // },
            // {
            //     test: /\.js$/,
            //     enforce: 'pre',
            //     use: ['pre-loader']
            // },
            // ------- 以下的入门配置
            // {
            //     test: /\.js$/,
            //     use: [
            //         {
            //             loader: 'normal-loader',
            //             // loader: path.resolve(__dirname, './loaders/test-loader.js'),
            //             // loader: 'babel-loader',
            //             options: {
            //                 presets: ['@babel/preset-env']
            //             }
            //         },
            //     ],
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]
}