/// <binding BeforeBuild='default' />
const config = require("./gulp/gulp.config");
const gulp = require("./gulp")([
    "compileTS",
    "compileOwnLess",
    "concatOwnCss",
    "todo",
    "concatVendorCss",
    "appScripts",
    "vendorScripts",
    "cleanCss",
    "clean"
]);

var debugMode = false;

gulp.task("default", function () {
    debugMode = debugMode || false;
    gulp.start("clean", "cleanCss", "compileOwnLess", "concatVendorCss", "todo", "compileTS", "vendorScripts", "appScripts", "concatOwnCss");
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


