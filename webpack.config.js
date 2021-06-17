const path = require("path")

module.exports = {
    entry: [
        "./src/index/js/index.js",
        "./src/index/js/menuMobile.js",
        "./src/index/js/hl.js",
        "./src/index/js/domToImage",
        "./src/index/js/fileSaver.js"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true
    }
}