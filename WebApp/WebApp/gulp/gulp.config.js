﻿module.exports = {
    appSrc: ["app/**/*.js", "!app/**/*.min.js"],
    vendorScriptsSrcWithOrder: [
        "scripts/jquery-2.2.4.js",
        "scripts/angular.js",
        "scripts/angular-animate.js",
        "scripts/angular-route.js",
        "scripts/angular-sanitize.js",
        "scripts/bootstrap.js",
        "scripts/toastr.js",
        "scripts/moment.js",
        "scripts/ui-bootstrap-tpls-1.3.3.js",
        "scripts/spin.js"],
    ownLessSrc: "Content/styles/own/**",
    outSrc: "app/out",
    cssOutSrc: "app/out/css",
    typescriptSrc: "app/**/*.ts"
}

