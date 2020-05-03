const path = require("path");
module.exports = {
    entry: path.resolve(__dirname, './src'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build')
    }
};