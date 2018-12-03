# myvue
webpack + vue2.X 构建项目

前端：vue2.X

cnpm  install  webpack webpack-cli  webpack-dev-server  --save   webpack打包基本组件

cnpm install babel-core babel-loader babel-preset-env  --save  
es6语法转化为es5语法 babel 默认是不进行转换的，需要设置插件，这里通过 presets 设置插件指定代码的转换规则
使用片段

use:{
      loader:'babel-loader',
      oprtions:{
          presets:['env']
      }
 }
 
 原来上面的配置只能转换ES的新语法，对于新的API（Promise、Set、Map 等新增对象，Object.assign、Object.entries等静态方法。）
 却没有作用，需要使用 babel-plugin-transform-runtime
  
 cnpm install babel-plugin-transform-runtime --save
 使用片段
 use:{
     loader:'babel-loader',
     oprtions:{
          presets:['env'],
         plugins:['transform-runtime']
     }
 }


uglifyjs-webpack-plugin 是用来对js代码进行压缩体积的，在webpack4.0中，
 默认的配置是压缩，可以通过 mode 模式的 development 来设置成不进行压缩，默认模式是 production
 
 cnpm install uglifyjs-webpack-plugin --save
 使用片段
 const UglifyjsPlugin = require('uglifyjs-webpack-plugin'); 
 optimization:{
      minimizer:[
          new UglifyjsPlugin();
      ]
 }

cnpm  install vue vue-loader vue-template-complier  --save       webpack打包支持vue文件组件

 webpack打包方式默认是不支持css的，需要使用webpack包来支持 css 解析
cnpm install style-loader css-loader --save 
module:{
      rules:[
          {
              test:/\.css$/,
              use:{
                 loader:'style-loader!css-loader'
              }
          }
     ]
}

mini-css-extract-plugin     css 与文件分离成为单独文件 
 cnpm install mini-css-extract-plugin --save
 const MiniCssExtractPlugin = require('mini-css-extract-plugin);
 
 plugins:[
    new MiniCssExtractPlugin({
          filename:"[name].[contenthash].css",
          chunkFilename:"[id].css"
      })
],
 module:{
     rules:[
         test:/\.css$/,
          use:[
              MiniCssExtractPlugin.loader,
               'css-loader'
           ]
       ]
}

 html-webpack-plugin 的用处就是一个html文件生成器
 
 
 cnpm install html-webpack-plugin --save
 
 const HtmlWebpaclPlugin = require('html-webpack-plugin');
 plugins:[
         new HtmlWebpackPlugin({
              title: "this is title", //用于生成的HTML文档的标题。
                filename: "index.html", // 生成的模板文件的名字 默认index.html
                template: "index.html", //模板来源文件
                inject: false, //注入位置'head','body',true,false
                favicon: "", //指定页面图标
                minify: {
                    caseSensitive: false, ////是否大小写敏感
                    collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled 
                    collapseWhitespace: true //是否去除空格
                },
                hash: true, //是否生成hash添加在引入文件地址的末尾，类似于我们常用的时间戳，这个可以避免缓存带来的麻烦
                cache: true, //是否需要缓存，如果填写true，则文件只有在改变时才会重新生成
                showErrors: true, //是否将错误信息写在页面里，默认true，出现错误信息则会包裹在一个pre标签内添加到页面上
                chunks: ['a', 'b'], //引入的a,b模块，这里指定的是entry中设置多个js时，在这里指定引入的js，如果不设置则默认全部引入,数组形式传入
                chunksSortMode: "auto", //引入模块的排序方式
                excludeChunks: ['a', 'b'], //排除的模块,引入的除a,b模块以外的模块，与chunks相反
                xhtml: false //生成的模板文档中标签是否自动关闭，针对xhtml的语法，会要求标签都关闭，默认false
          });
]


后端：koa2.X  

cnpm  install koa --save   koa框架

cnpm  install koa-router --save   koa路由解析组件

cnpm  install koa-bodyparser --save koa http post方式参数解析

cnpm  install koa-static --save   koa 静态文件存放组件

以上本项目基本的npm包

项目基本的创建流程为：

测试环境：

npm install

npm run dev

正式环境：

npm run build








