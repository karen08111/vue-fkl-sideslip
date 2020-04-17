
const path = require('path');
const webpack = require('webpack');

module.exports = {
    // baseUrl: './',
    lintOnSave: false,
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 输出文件名
            filename: 'index.html'
        }
    }
};