const path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    }
}