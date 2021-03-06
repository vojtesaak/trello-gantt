'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './public/lib/main'
    },
    output: {
        path: path.join(__dirname, 'public/dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.s[ca]ss$/,
                // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
                loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
                // loader: 'style!css!sass?sourceMap'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};
