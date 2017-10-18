module.exports = {
    context: __dirname,
    entry: __dirname + "/src/client/main.jsx",
    output: {
        path: __dirname + "/www" ,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?/i,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015'
                    ],
                    plugins: [
                        ['transform-react-jsx', { pragma: 'h' }]
                    ]
                }
            }
        ]
    }
}