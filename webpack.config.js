const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    mode: 'development',
    entry: {
        index: './main.js',
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'VUE',
            template: 'public/index.html', //模板文件
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    devServer: {
        host: 'localhost',
        historyApiFallback: true,
        hot: true,
        port: 8000
    },
    devtool: 'eval-cheap-module-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    // filename: '[name].[contenthash].js',
                },
            },
        },
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        }, ],
    },
};