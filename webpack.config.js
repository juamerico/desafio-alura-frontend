const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: ["./src/js/comunidade.js", "./src/js/hl.js", "./src/js/index.js", "./src/js/menu_mobile.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true
    },

    plugins: [new HtmlWebpackPlugin()]
}