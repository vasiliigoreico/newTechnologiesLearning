export let config = {
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
    cssOutSrc: "app/out/css",
    typescriptSrc: "app/**/*.ts"
}

