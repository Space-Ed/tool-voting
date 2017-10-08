module.exports = {
    context: __dirname,
    entry: __dirname + "/src/client/main.js",
    output: {
        path: __dirname + "/www" ,
        filename: "bundle.js"
    }
}