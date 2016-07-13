var gulp = require("gulp");
var debug = require("gulp-debug");
var ts = require("gulp-typescript");
var config = require("../gulp.config");

var compileTS = function () {
    return gulp.src(config.typescriptSrc)
        .pipe(debug({ title: "compileTS:" }))
        .pipe(ts({
            noImplicitAny: true,
            out: "compiledTSOutput.js",
            target: "ES6",
            module: "amd",
            experimentalAsyncFunctions: true,
            experimentalDecorators: true
        }))
        .pipe(gulp.dest("dest/tsCompiled"));
}

module.exports = compileTS;