const config = require("./gulp/gulp.config");
const gulp = require("gulp");

var concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    del = require("del"),
    path = require("path"),
    debug = require("gulp-debug"),
    stripDebug = require("gulp-strip-debug"),
    gutil = require("gulp-util"),
    ts = require("gulp-typescript");

var compileTS = require("./gulp/tasks/compileTS");
var compileOwnLess = require("./gulp/tasks/compileOwnLess");
var concatOwnCss = require("./gulp/tasks/concatOwnCss");
var toDo = require("./gulp/tasks/toDo");
var concatVendorCss = require("./gulp/tasks/concatVendorCss");

var __dirname,
    debugMode = false;

gulp.task("clean", function () {
    return del(["app/out/*/*.*"]);
});

gulp.task("cleanCss", function () {
    return del([config.cssOutSrc]);
});

gulp.task("appScripts", function () {
    return gulp.src(config.appSrc)
      .pipe(uglify())
      .pipe(stripDebug())
      .pipe(concat("appScripts.min.js"))
      .pipe(gulp.dest(config.outSrc));
});

gulp.task("vendorScripts", function () {
    return gulp.src(config.vendorScriptsSrcWithOrder)
        .pipe(debug({ title: "vendorScripts:" }))
        .pipe(uglify())
        .pipe(concat("vendorScripts.min.js"))
        .pipe(gulp.dest(config.outSrc));
});

gulp.task("compileScripts", ["clean"], function () {
    gulp.start("vendorScripts");
    gulp.start("appScripts");
});

gulp.task("concatStyles", ["cleanCss", "compileOwnLess"], function () {
    gulp.start("concatVendorCss");
    gulp.start("concatOwnCss");
});


gulp.task("default", function () {
    debugMode = debugMode || false;
    gulp.start("compileScripts");
    gulp.start("concatStyles");
    gulp.start("compileTS");
});

gulp.task("debugMode", function () {
    debugMode = true;
    gutil.log(gutil.colors.green("RUNNING IN DEBUG MODE"));
    gulp.start("default");
});

gulp.task("watch", function () {
    gulp.watch(config.appSrc, ["appScripts"]);
    gulp.watch(config.ownLessSrc, ["compileOwnLess"]);
});

gulp.task("compileTS", compileTS);
gulp.task("compileOwnLess", compileOwnLess);
gulp.task("concatOwnCss", concatOwnCss);
gulp.task("todo", toDo);
gulp.task("concatVendorCss", concatVendorCss);
