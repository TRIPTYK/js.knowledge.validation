const path = require('path');

module.exports = {
    entry: {
        '01_jsvalidation': './test/jsvalidation.js',
        '02_jsadvancedvalidation': './test/jsadvancedvalidation.js',
        '03_es6validation': './test/es6validation.js'
    },
    output: {
        filename: '[name].spec.js',
        path: path.join(__dirname, 'test/dist')
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_module/ },
        ]
    },
};