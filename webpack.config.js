const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        host: process.env.HOST, // use 0.0.0.0 to make it available on network
        port: process.env.PORT,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'doStart'
        })
    ]
};
