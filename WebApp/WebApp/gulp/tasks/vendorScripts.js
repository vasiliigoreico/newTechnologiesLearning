var gulp = require("gulp");
    config = require("../gulp.config"),
    uglify = require("gulp-uglify"),
    debug = require("gulp-debug"),
    concat = require("gulp-concat");

var vendorScripts = function () {
    return gulp.src(config.vendorScriptsSrcWithOrder)
        .pipe(debug({ title: "vendorScripts:" }))
        .pipe(uglify())
        .pipe(concat("vendorScripts.min.js"))
        .pipe(gulp.dest(config.outSrc));
}

module.exports = vendorScripts;