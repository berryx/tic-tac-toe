const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    devServer: {
        static: './dist',
    },
    plugins: [new HtmlWebpackPlugin({
        hash: true,
        title: 'TicTacToe',
        template: "./src/index.html",
        filename: "./index.html"
    }),],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {

        rules: [
            {
                test: /\.js$/i,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"]
            }]
    },
    optimization: {
        runtimeChunk: 'single',
    },
};