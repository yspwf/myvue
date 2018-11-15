const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode:'development',
    devServer:{
        port:5005,
        historyApiFallback: true,
        overlay: true
    }
}); 