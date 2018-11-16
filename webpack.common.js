const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry:{
        app:'./src/app.js'
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets:["env"],
                        plugins:["transform-runtime"]
                    }
                },
                exclude:path.resolve(__dirname,'node_modules')
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
                exclude:path.resolve(__dirname,'node_modules')
            },
            {
                test:/\.css$/,
                //loader:'style-loader!css-loader',
                //use: ['style-loader','css-loader'],
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ],
                exclude:path.resolve(__dirname,'node_modules')
            },
            {
                test: /\.scss/,
                use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
                }]
            },
            {
                test: /\.less$/,
                use: [{
                       loader: "style-loader" 
                    },{
                        loader: "css-loader"
                    },{
                        loader: "less-loader"
                    }]
            }, 
            // {
            //     test:/\.(png|jpg|gif|jpeg|svg)$/,
            //     //loader:'file-loader!url-loader',
            //     use:[
            //         {
            //             loader:'url-loader',
            //             options:{
            //                 name:"[name].[hash:5].[ext]",
            //                 limit:1024,
            //             }
            //         }
            //     ],
            //     exclude:path.resolve(__dirname,'node_modules')
            // }
            {
                test:/\.(png|jpg|gif|jpeg|svg)$/,
                // use:[
                //     {
                //         loader: "url-loader",
                //         options: {
                //             limit: 1024, 
                //         }
                //     }
                // ]
                loader:'url-loader',
            }
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}