const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PostCssPresetEnv = require('postcss-preset-env');

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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                PostCssPresetEnv({
                                    stage: 0
                                })
                            ]
                        }
                    }
                ]
            }
        ]
    }
};
