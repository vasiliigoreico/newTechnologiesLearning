var gulp = require("gulp"),
    debug = require("gulp-debug"),
    config = require("../gulp.config"),
    concat = require("gulp-concat");

var concatOwnCss = function () {
    return gulp.src("app/out/css/*.css")
         .pipe(debug({ title: "concatOwnCss:" }))
         .pipe(concat("own-bundle.css"))
         .pipe(gulp.dest(config.cssOutSrc));
}

module.exports = concatOwnCss;
