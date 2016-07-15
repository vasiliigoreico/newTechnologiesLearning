var del = require("del"),
    config = require("../gulp.config");

var clean = function () {
    return del([config.outSrc]);
}

module.exports = clean;


