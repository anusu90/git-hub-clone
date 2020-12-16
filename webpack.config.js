const path = require('path')
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: path.join(__dirname, "scripts/index.ts"),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, "scripts/")
    },
    devtool: "source-map",
    module: {
        rules:[
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: [".tsx",".ts", ".js"],
        fallback: { "path": false,
     }
    },

    plugins : [new Dotenv()]

}