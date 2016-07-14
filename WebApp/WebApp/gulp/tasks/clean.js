var del = require("del"),
    config = require("../gulp.config");

var clean = function () {
    return del(["app/out/*/*.*"]);
}

module.exports = clean;


