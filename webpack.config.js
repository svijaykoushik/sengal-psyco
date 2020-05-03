const path = require("path");
module.exports = {
    entry: './src/main.ts',
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
        extentions: ['.ts']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build')
    }
};