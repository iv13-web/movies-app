const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const TerserWebPackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;


const optimization = () => {

    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProd) {
        config.minimizer = [
            new CssMinimizerPlugin(),
            new TerserWebPackPlugin()
        ];
    }

    return config;
};


const filename = extension => isDev 
    ? `[name].${extension}`
    : `[name].[contenthash].${extension}`;

const cssLoaders = loader => {
    const loaders  = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {},
        },
        'css-loader'
    ]

    if (loader) {
        loaders.push(loader);
    }

    return loaders;
}

module.exports = {

    context: path.resolve(__dirname, 'src'), 
    mode: 'development',

    entry: {
        main: ['@babel/polyfill','./index.js']
    },

    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {

        extensions: ['.js', '.json'],
        alias: {
            '@modules': path.resolve(__dirname, 'src/modules'),
            '@': path.resolve(__dirname, 'src')
        }
    },

    optimization: optimization(),


    devtool: isDev ? 'source-map' : '',

    devServer : {
        port: 4200,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            favicon: `favicon.ico`,
        }),

        new CleanWebpackPlugin(),

        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),

        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/i,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.less$/i,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {   
                test: /\.(png|jpe?g|svg|gif|ico|ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
        ]
    }
}; 