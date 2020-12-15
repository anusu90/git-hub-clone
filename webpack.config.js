const path = require('path')

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
        extensions: [".tsx",".ts", ".js"]
    }

}