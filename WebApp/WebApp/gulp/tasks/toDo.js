var gulp = require("gulp"),
    config = require("../gulp.config"),
    todo = require("gulp-todo");


var toDo = function () {
    gulp.src(config.appSrc)
        .pipe(todo())
        .pipe(gulp.dest("./"));
}

module.exports = toDo;


