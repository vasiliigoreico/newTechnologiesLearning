const config = require("./gulp/gulp.config");
const gulp = require("gulp");

var debugMode = false;

var del = require("del"),
    gutil = require("gulp-util");

gulp.task("compileTS", require("./gulp/tasks/compileTS"));
gulp.task("compileOwnLess", require("./gulp/tasks/compileOwnLess"));
gulp.task("concatOwnCss", require("./gulp/tasks/concatOwnCss"));
gulp.task("todo", require("./gulp/tasks/toDo"));
gulp.task("concatVendorCss", require("./gulp/tasks/concatVendorCss"));
gulp.task("appScripts", require("./gulp/tasks/appScripts"));
gulp.task("vendorScripts", require("./gulp/tasks/vendorScripts"));
gulp.task("cleanCss", require("./gulp/tasks/cleanCss"));
gulp.task("clean", require("./gulp/tasks/clean"));


gulp.task("default", function () {
    debugMode = debugMode || false;
    gulp.start("clean", "vendorScripts", "appScripts", "cleanCss", "compileOwnLess", "compileTS", "todo", "concatVendorCss", "concatOwnCss");
});

//gulp.task("debugMode", function () {
//    debugMode = true;
//    gutil.log(gutil.colors.green("RUNNING IN DEBUG MODE"));
//    gulp.start("default");
//});

gulp.task("watch", function () {
    gulp.watch(config.appSrc, ["appScripts"]);
    gulp.watch(config.ownLessSrc, ["compileOwnLess"]);
});


