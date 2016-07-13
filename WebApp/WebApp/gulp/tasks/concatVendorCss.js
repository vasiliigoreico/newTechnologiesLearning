var gulp = require("gulp"),
    debug = require("gulp-debug"),
    config = require("../gulp.config");

var concatVendorCss = function () {
    return gulp.src("Content/styles/vendors/*.css")
        .pipe(debug({ title: "concatVendorCss:" }))
        .pipe(concat("vendor-bundle.css"))
        .pipe(gulp.dest(config.cssOutSrc));
}

module.exports = concatVendorCss;


