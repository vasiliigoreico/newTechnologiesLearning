/// <binding BeforeBuild='default' />
var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    del = require("del"),
    less = require("gulp-less"),
    path = require("path"),
    debug = require("gulp-debug"),
    gutil = require("gulp-util");

var config = {
    appSrc: ["app/**/*.js", "!app/**/*.min.js"],
    vendorScriptsSrcWithOrder: [
        "scripts/jquery-3.1.0.js",
        "scripts/angular.js",
        "scripts/angular-animate.js",
        "scripts/angular-route.js",
        "scripts/angular-sanitize.js",
        "scripts/bootstrap.js",
        "scripts/toastr.js",
        "scripts/moment.js",
        "scripts/ui-bootstrap-tpls-0.10.0.js",
        "scripts/spin.js"],
    ownLessSrc: "Content/styles/own/**",
    outSrc: "app/out",
    cssOutSrc: "app/out/css"
}

var __dirname,
    debugMode = false;

gulp.task("clean", function () {
    return del(["app/out/appScripts.min.js", "app/out/vendorScripts.min.js"]);
});

gulp.task("cleanCss", function () {
    return del([config.cssOutSrc]);
});

gulp.task("appScripts", function () {
    return gulp.src(config.appSrc)
      .pipe(uglify())
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

gulp.task("default", ["compileScripts", "concatStyles"], function () {
    debugMode = debugMode || false;
});

gulp.task("debugMode", function () {
    debugMode = true;
    gutil.log(gutil.colors.green("RUNNING IN DEBUG MODE"));
    gulp.start("default");
});

gulp.task("compileOwnLess", ["cleanCss"], function () {
    return gulp.src(config.ownLessSrc + "/*.less")
      .pipe(debug({ title: "compileOwnLess:" }))
      .pipe(less({
          paths: [path.join(__dirname, "less", "includes")]
      }))
      .pipe(gulp.dest(config.cssOutSrc));
});

gulp.task("concatVendorCss", function () {
    return gulp.src("Content/styles/vendors/*.css")
        .pipe(debug({ title: "concatVendorCss:" }))
        .pipe(concat("vendor-bundle.css"))
        .pipe(gulp.dest(config.cssOutSrc));
});

gulp.task("concatOwnCss", ["compileOwnLess"], function () {
    return gulp.src("app/out/css/*.css")
        .pipe(debug({ title: "concatOwnCss:" }))
        .pipe(concat("own-bundle.css"))
        .pipe(gulp.dest(config.cssOutSrc));
});

gulp.task("watch", function () {
    gulp.watch(config.appSrc, ["appScripts"]);
    gulp.watch(config.ownLessSrc, ["compileOwnLess"]);
});