const HtmlWebpack = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports={
    mode: 'development',
    output: {
        clean:true //ESTO LIMPIA/BORRA TODOS LOS ARCHIVOS CADA VEZ QUE HACEMOS UN NPM RUN BUILD
    },
    module:{
        rules:[
            {
                test:/\.html$/,
                loader: 'html-loader',
                options:{
                    sources:false
                }
            },
            {
                test:/\.css$/,
                exclude:/styles.css$/,
                use: ['style-loader','css-loader']

            },
            {
                test:/styles.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],

            },
            //{
            //   test:/\.(png|gif)$/,
            //    loader:'file-loader'
            //}
        ]
    },
    optimization:{},
    plugins:[
        new HtmlWebpack({
            title: 'Mi webpack app', //LE CAMBIA EL TITULO
            //filename: 'holamundo.html' LE CAMBIA EL NOMBRE AL ARCHIVO
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css',
            ignoreOrder:false
        }),
        new CopyPlugin({
            patterns: [
                {from: "src/assets", to:"assets/"}
            ]
        })
    ],
}