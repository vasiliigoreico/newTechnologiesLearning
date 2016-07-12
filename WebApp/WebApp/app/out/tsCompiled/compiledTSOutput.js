define("testFileTS", ["require", "exports"], function (require, exports) {
    "use strict";
    function sayHello(name) {
        return `Hello from ${name}`;
    }
    exports.sayHello = sayHello;
});
define("testFileTS2", ["require", "exports", "testFileTS"], function (require, exports, testFileTS_1) {
    "use strict";
    console.log(testFileTS_1.sayHello("TypeScript"));
});
