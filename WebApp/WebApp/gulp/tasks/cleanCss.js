var del = require("del"),
    config = require("../gulp.config");

var cleanCss = function () {
    return del([config.cssOutSrc]);
}

module.exports = cleanCss;


