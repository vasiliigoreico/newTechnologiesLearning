// include plug-ins
var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var del = require("del");
var less = require("gulp-less");
var path = require("path");

var config = {
    src: ["app/**/*.js", "!app/**/*.min.js"]
}

//delete the output file(s)
gulp.task("clean", function () {
    return del(["app/all.min.js"]);
});

// Combine and minify all files from the app folder
// This tasks depends on the clean task which means gulp will ensure that the 
// Clean task is completed before running the scripts task.
gulp.task("scripts", ["clean"], function () {

    return gulp.src(config.src)
      .pipe(uglify())
      .pipe(concat("all.min.js"))
      .pipe(gulp.dest("app/"));
});

gulp.task("default", ["scripts"], function () { });

gulp.task("compileOwnLess", function () {
    return gulp.src("Content/styles/own/**/*.less")
      .pipe(less({
          paths: [path.join(__dirname, "less", "includes")]
      }))
      .pipe(gulp.dest("app/out/css"));
});

gulp.task("concatVendorCss", function () {
    return gulp.src("Content/styles/vendors/*.css")
      .pipe(concat("vendor-bundle.css"))
      .pipe(gulp.dest("app/out"));
});

gulp.task("concatOwnCss", function () {
    return gulp.src("app/out/css/*.css")
      .pipe(concat("own-bundle.css"))
      .pipe(gulp.dest("app/out"));
});

gulp.task("watch", function () {
    return gulp.watch(config.src, ["scripts"]);
});