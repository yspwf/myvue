/*
const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry:'./src/app.js',
    output:{
        path: path.resolve(__dirname, './dist'),
        filename:'build.js'
    },
    module:{
        rules:[
           {
               test:/\.vue$/,
               loader:'vue-loader',
               exclude:path.resolve(__dirname,'node_modules')
           },
           {
               test:/\.css$/,
               loader:'style-loader!css-loader',
               exclude:path.resolve(__dirname,'node_modules')
           },
           {
               test:/\.(png|jpg|gif|svg)$/,
               loader:'file-loader!url-loader',
               exclude:path.resolve(__dirname,'node_modules')
           }
        ]
    },
    resolve:{
        extensions: ['*','.js', '.json', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer:{
        port:5005,
        historyApiFallback: true,
        overlay: true
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}
*/

/*
var isProd = process.env.NODE_ENV === 'production';
var isProd = process.env.NODE_ENV === 'production'; 
if(isProd){
    console.log(process.env.NODE_ENV);
}else{
    console.log(process.env.NODE_ENV);
}
*/

if (process.env.NODE_ENV === "development") {
    console.log("开发环境");
  } else {
    console.log("生产环境");
  }