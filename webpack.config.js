const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devServer: {
        host: process.env.HOST, // use 0.0.0.0 to make it available on network
        port: process.env.PORT,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'doStart',
            template: 'src/template.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',options: {
                            plugins: () => ([])
                        }
                    }
                ]
            }
        ]
    }
};
