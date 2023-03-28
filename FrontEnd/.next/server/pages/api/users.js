"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/users/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/api/users/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _mock_users_newusers_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mock/users/newusers.json */ \"(api)/./src/mock/users/newusers.json\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        res.status(200).json(_mock_users_newusers_json__WEBPACK_IMPORTED_MODULE_0__);\n    } else if (req.method === \"POST\") {\n        const username = req.body.username;\n        const email = req.body.email;\n        const password = req.body.password;\n        const newUser = {\n            id: Date.now(),\n            name: username,\n            email: email,\n            password: password\n        };\n        _mock_users_newusers_json__WEBPACK_IMPORTED_MODULE_0__.push(newUser);\n        console.log(newUser, \"console\");\n        res.status(201).json(newUser);\n        // console.log(newUser);\n        fs.writeFileSync(\"users/newusers.json\", JSON.stringify(newUser, null, 4));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXJzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZFQUE2RTtBQUM3RSxNQUFNQSxLQUFLQyxtQkFBT0EsQ0FBQyxjQUFJO0FBRWtDO0FBRTFDLFNBQVNFLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDekUsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEJELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNOLHNEQUFRQTtJQUMvQixPQUFPLElBQUlFLElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ2hDLE1BQU1HLFdBQVdMLElBQUlNLElBQUksQ0FBQ0QsUUFBUTtRQUNsQyxNQUFNRSxRQUFRUCxJQUFJTSxJQUFJLENBQUNDLEtBQUs7UUFDNUIsTUFBTUMsV0FBV1IsSUFBSU0sSUFBSSxDQUFDRSxRQUFRO1FBQ2xDLE1BQU1DLFVBQVU7WUFDZEMsSUFBSUMsS0FBS0MsR0FBRztZQUNaQyxNQUFNUjtZQUNORSxPQUFPQTtZQUNQQyxVQUFVQTtRQUNaO1FBQ0FWLDJEQUFhLENBQUNXO1FBQ2RNLFFBQVFDLEdBQUcsQ0FBQ1AsU0FBUztRQUNyQlIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0s7UUFDckIsd0JBQXdCO1FBQ3hCYixHQUFHcUIsYUFBYSxDQUFDLHVCQUF1QkMsS0FBS0MsU0FBUyxDQUFDVixTQUFTLElBQUksRUFBRTtJQUN4RSxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dicmVudC8uL3NyYy9wYWdlcy9hcGkvdXNlcnMvaW5kZXgudHN4PzIxYzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBuZXd1c2VycyBmcm9tIFwiLi4vLi4vLi4vbW9jay91c2Vycy9uZXd1c2Vycy5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihuZXd1c2Vycyk7XG4gIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5ib2R5LnVzZXJuYW1lO1xuICAgIGNvbnN0IGVtYWlsID0gcmVxLmJvZHkuZW1haWw7XG4gICAgY29uc3QgcGFzc3dvcmQgPSByZXEuYm9keS5wYXNzd29yZDtcbiAgICBjb25zdCBuZXdVc2VyID0ge1xuICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICBuYW1lOiB1c2VybmFtZSBhcyBzdHJpbmcsXG4gICAgICBlbWFpbDogZW1haWwgYXMgc3RyaW5nLFxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkIGFzIHN0cmluZyxcbiAgICB9O1xuICAgIG5ld3VzZXJzLnB1c2gobmV3VXNlcik7XG4gICAgY29uc29sZS5sb2cobmV3VXNlciwgXCJjb25zb2xlXCIpO1xuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKG5ld1VzZXIpO1xuICAgIC8vIGNvbnNvbGUubG9nKG5ld1VzZXIpO1xuICAgIGZzLndyaXRlRmlsZVN5bmMoXCJ1c2Vycy9uZXd1c2Vycy5qc29uXCIsIEpTT04uc3RyaW5naWZ5KG5ld1VzZXIsIG51bGwsIDQpKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsIm5ld3VzZXJzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJ1c2VybmFtZSIsImJvZHkiLCJlbWFpbCIsInBhc3N3b3JkIiwibmV3VXNlciIsImlkIiwiRGF0ZSIsIm5vdyIsIm5hbWUiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIndyaXRlRmlsZVN5bmMiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/users/index.tsx\n");

/***/ }),

/***/ "(api)/./src/mock/users/newusers.json":
/*!**************************************!*\
  !*** ./src/mock/users/newusers.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"name":"demo","email":"demo@gmail.com","password":"123456"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/users/index.tsx"));
module.exports = __webpack_exports__;

})();