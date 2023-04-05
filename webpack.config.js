const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./index.ts",
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.pcss$/i,
                use: ['style-loader', {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        importLoaders: 1,
                    },

                }, 'postcss-loader'],
                include: /\.module\.pcss$/i,
            },
            {
                test: /\.pcss$/i,
                use: ['style-loader', "css-loader", 'postcss-loader'], 
                exclude: /\.module\.pcss$/i,
            },

     
    {
            
    test: /\.hbs$/,
        use: [
            {
                loader: 'handlebars-template-loader'
            }
        ]
},
{
    test: /\.(ts|js)$/,
        exclude: /node_modules/,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(__dirname, 'tsconfig.json'),
                    },
                },
            ],
            },
{
    test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    } ]} ,

plugins: [
    new HtmlWebpackPlugin({
        template: './index.html'
    }),
    new MiniCssExtractPlugin(),
],

    resolve: {
    extensions: ['.ts', '.js', '.json'],
        alias: {
        handlebars: 'handlebars/dist/handlebars.min.js'
    }
},
devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
        },
    port: 4000,
        historyApiFallback: true,
            open: true,
                compress: true,
    },
};
