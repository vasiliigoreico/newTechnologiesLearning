var gulp = require("gulp");
    config = require("../gulp.config"),
    uglify = require("gulp-uglify"),
    stripDebug = require("gulp-strip-debug"),
    concat = require("gulp-concat");

var appScripts = function () {
    return gulp.src(config.appSrc)
      .pipe(uglify())
      .pipe(stripDebug())
      .pipe(concat("appScripts.min.js"))
      .pipe(gulp.dest(config.outSrc));
}

module.exports = appScripts;