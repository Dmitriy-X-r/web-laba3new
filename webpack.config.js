const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
    return {
        module: {
            rules: [
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
            ],
          },
        mode: env.mode ?? 'development',
          entry:{
            page1: path.resolve(__dirname, 'src', 'index.js'),
            page2: path.resolve(__dirname, 'src', 'test.js'),
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        
        plugins: [
           // new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
          //  new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'second.html') }),
            new HtmlWebpackPlugin({ 
                template: path.resolve(__dirname, 'public', 'index.html'), 
                filename: 'index.html', 
                chunks: ['page1'] 
            }), 
            new HtmlWebpackPlugin({ 
                template: path.resolve(__dirname, 'public', 'second.html'), 
                filename: 'second.html', 
                chunks: ['page2'] 
            }),
            new webpack.ProgressPlugin(),
        ],
        devServer:{
            // "start": "webpack serve --open",
            port: 5000,
            open: true
        }
        
    }
}