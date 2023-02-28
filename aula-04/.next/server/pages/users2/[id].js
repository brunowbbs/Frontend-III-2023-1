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
exports.id = "pages/users2/[id]";
exports.ids = ["pages/users2/[id]"];
exports.modules = {

/***/ "./src/pages/users2/[id].tsx":
/*!***********************************!*\
  !*** ./src/pages/users2/[id].tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserDetailsPage),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction UserDetailsPage(props) {\n    const { user  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello Users \"\n            }, void 0, false, {\n                fileName: \"/Users/Wesley/Desktop/aula-04/src/pages/users2/[id].tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            JSON.stringify(user)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Wesley/Desktop/aula-04/src/pages/users2/[id].tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\nconst getServerSideProps = async (context)=>{\n    const { id  } = context.params;\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/users/\" + id);\n    const user = await response.json();\n    if (!user?.id) {\n        return {\n            redirect: {\n                destination: \"/\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {\n            user\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdXNlcnMyL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR2UsU0FBU0EsZ0JBQWdCQyxLQUFVLEVBQUU7SUFDbEQsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR0Q7SUFFakIscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIQyxLQUFLQyxTQUFTLENBQUNKOzs7Ozs7O0FBR3RCLENBQUM7QUFNTSxNQUFNSyxxQkFBeUMsT0FBT0MsVUFBWTtJQUN2RSxNQUFNLEVBQUVDLEdBQUUsRUFBRSxHQUFHRCxRQUFRRSxNQUFNO0lBRTdCLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsZ0RBQWdESDtJQUVsRCxNQUFNUCxPQUFPLE1BQU1TLFNBQVNFLElBQUk7SUFFaEMsSUFBSSxDQUFDWCxNQUFNTyxJQUFJO1FBQ2IsT0FBTztZQUNMSyxVQUFVO2dCQUNSQyxhQUFhO2dCQUNiQyxXQUFXLEtBQUs7WUFDbEI7UUFDRjtJQUNGLENBQUM7SUFFRCxPQUFPO1FBQ0xmLE9BQU87WUFBRUM7UUFBSztJQUNoQjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdWxhLTA0Ly4vc3JjL3BhZ2VzL3VzZXJzMi9baWRdLnRzeD9jYzBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gXCJxdWVyeXN0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyRGV0YWlsc1BhZ2UocHJvcHM6IGFueSkge1xuICBjb25zdCB7IHVzZXIgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5IZWxsbyBVc2VycyA8L2gxPlxuICAgICAge0pTT04uc3RyaW5naWZ5KHVzZXIpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG50eXBlIFBhcmFtcyA9IHtcbiAgaWQ6IHN0cmluZztcbn0gJiBQYXJzZWRVcmxRdWVyeTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5wYXJhbXMgYXMgUGFyYW1zO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvXCIgKyBpZFxuICApO1xuICBjb25zdCB1c2VyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmICghdXNlcj8uaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246IFwiL1wiLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyB1c2VyIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJVc2VyRGV0YWlsc1BhZ2UiLCJwcm9wcyIsInVzZXIiLCJkaXYiLCJoMSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiaWQiLCJwYXJhbXMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/users2/[id].tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/users2/[id].tsx"));
module.exports = __webpack_exports__;

})();