module.exports = {

    // This is the entry point or start of our react applicaton
    entry: "./app/app.js",

    output: {
        filename: "public/bundle.js"
    },

    module: {
        loaders: [{
                test: /\.jsx?$/,
                include: /app/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: "eval-source-map"
};