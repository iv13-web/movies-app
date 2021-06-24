const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// данные плагины нужны для минификации кода js и css
const TerserWebPackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

/* Чтобы переменная isDev корректно работала при переключении режимов, 
необходимо либо сдлелать module.exports функцией (https://webpack.js.org/configuration/mode/), 
либо установить cross-env -D и добавить параметры в script в package.json ( cross-env NODE_ENV=...) для каждого скрипта. 
Также надо добавить проверку на isDev в devServer */

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

// функция для блока " optimization: "
const optimization = () => {
    /* splitChunks чтобы не дублировать библиотеки, если мы будем 
    одну и ту же подключать к разным файлам */
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

// функция для создание имен с хешем только для Prod режима
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
    // context - можно не указывать папку src далее в main и template
    target: 'web',
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
        /* расширения, которые webpack должен понимать по умолчанию, чтобы
        не писать расширения файлов, которые укажем в массиве */
        extensions: ['.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'icons': path.resolve(__dirname, 'src/assets/icons')
        }
    },

    optimization: optimization(),

    // для того, чтобы можно было видеть исходный код в консоли разработчика
    devtool: isDev ? 'source-map' : false,

    /* для webpack-dev-server надо создать отдельный скрипт в package.json: 
    "start": "webpack serve --mode development --open"
    dist во время работы будет пустой, все файлы будут в оперативке */
    devServer : {
        port: 4200,
        contentBase: path.join(__dirname, 'src/assets'),
        hot: isDev
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            favicon: `favicon.ico`,
        }),

        new CleanWebpackPlugin(),

        // copy нужен для переноса статических файлов в dist,в т.ч. favicon
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/icons'),
                    to: path.resolve(__dirname, 'dist/assets/icons')
                },
                {
                    from: path.resolve(__dirname, 'src/plugins'),
                    to: path.resolve(__dirname, 'dist/plugins')
                },
            ]
        }),

        /* чтобы стили отражались не в head, а отдельным файлом
        параметры копируем из output, изменив расширение на css */
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],

    /* лоадеры нужны для работы с другими типами файлов
    webpack идет спрва налево, сначала будет css-loader, 
    а потом style-loader добавит стили в head в html 
    Код для css, sass и less внутри массива дублируется, поэтому можно создать функцию
    Для babel также надо установить preset-env и добавить not dead в package.json и установить полифилл и подключить его в entry. Также можно добавить плагин proposal*/

    module: {
        rules: [
            {
                test: /\.css$/,
                // use: [ чтобы не дублировать, используем фукнцию
                //     {
                //         loader: MiniCssExtractPlugin.loader,
                //         options: {},
                //     },
                //     'css-loader'
                // ]
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/i,
                // use: [
                //     MiniCssExtractPlugin.loader,
                //     'css-loader',
                //     'sass-loader',
                // ],
                use: cssLoaders('sass-loader')
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
            {   //file-loader работает в т.ч. со шрифтами 
                test: /\.(png|jpe?g|svg|gif|ico|ttf|woff|woff2|eot)$/,
                use: ['file-loader'],
            },
        ]
    }
}; 