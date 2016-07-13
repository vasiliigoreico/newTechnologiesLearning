var gulp = require("gulp"),
    debug = require("gulp-debug"),
    config = require("../gulp.config"),
    less = require("gulp-less"),
    path = require("path");
var __dirname;

var compileOwnLess = function () {
    return gulp.src(config.ownLessSrc + "/*.less")
       .pipe(debug({ title: "compileOwnLess:" }))
       .pipe(less({
           paths: [path.join(__dirname, "less", "includes")]
       }))
       .pipe(gulp.dest(config.cssOutSrc));
}

module.exports = compileOwnLess;


