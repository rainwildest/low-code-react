// const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
// const path = require("path");
const withTM = require("next-transpile-modules")(["monaco-editor"]);

module.exports = withTM({});
