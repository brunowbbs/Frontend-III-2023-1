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
exports.id = "pages/users/[id]";
exports.ids = ["pages/users/[id]"];
exports.modules = {

/***/ "./src/pages/users/[id].tsx":
/*!**********************************!*\
  !*** ./src/pages/users/[id].tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserDetailsPage),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction UserDetailsPage(props) {\n    const { user  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello Users \"\n            }, void 0, false, {\n                fileName: \"/Users/Wesley/Desktop/aula-04/src/pages/users/[id].tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            JSON.stringify(user)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Wesley/Desktop/aula-04/src/pages/users/[id].tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n// users/1\n// users/2\n// users/3\nconst getStaticPaths = async ()=>{\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n    const alunos = await response.json();\n    // console.log(alunos.length);\n    const paths = alunos.map((aluno)=>({\n            params: {\n                id: aluno.id.toString()\n            }\n        }));\n    return {\n        paths: paths,\n        fallback: false\n    };\n// return {\n//   paths: [\n//     { params: { id: \"1\" } },\n//     { params: { id: \"2\" } },\n//     { params: { id: \"3\" } },\n//     { params: { id: \"4\" } },\n//   ],\n//   fallback: false,\n// };\n};\nconst getStaticProps = async (context)=>{\n    const { id  } = context.params;\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/users/\" + id);\n    const user = await response.json();\n    return {\n        props: {\n            user\n        },\n        revalidate: 2\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdXNlcnMvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR2UsU0FBU0EsZ0JBQWdCQyxLQUFVLEVBQUU7SUFDbEQsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR0Q7SUFFakIscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIQyxLQUFLQyxTQUFTLENBQUNKOzs7Ozs7O0FBR3RCLENBQUM7QUFFRCxVQUFVO0FBQ1YsVUFBVTtBQUNWLFVBQVU7QUFFSCxNQUFNSyxpQkFBaUMsVUFBWTtJQUN4RCxNQUFNQyxXQUFXLE1BQU1DLE1BQU07SUFDN0IsTUFBTUMsU0FBUyxNQUFNRixTQUFTRyxJQUFJO0lBRWxDLDhCQUE4QjtJQUU5QixNQUFNQyxRQUFRRixPQUFPRyxHQUFHLENBQUMsQ0FBQ0MsUUFBZ0I7WUFDeENDLFFBQVE7Z0JBQ05DLElBQUlGLE1BQU1FLEVBQUUsQ0FBQ0MsUUFBUTtZQUN2QjtRQUNGO0lBRUEsT0FBTztRQUNMTCxPQUFPQTtRQUNQTSxVQUFVLEtBQUs7SUFDakI7QUFFQSxXQUFXO0FBQ1gsYUFBYTtBQUNiLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQixPQUFPO0FBQ1AscUJBQXFCO0FBQ3JCLEtBQUs7QUFDUCxFQUFFO0FBTUssTUFBTUMsaUJBQWlDLE9BQU9DLFVBQVk7SUFDL0QsTUFBTSxFQUFFSixHQUFFLEVBQUUsR0FBR0ksUUFBUUwsTUFBTTtJQUU3QixNQUFNUCxXQUFXLE1BQU1DLE1BQ3JCLGdEQUFnRE87SUFHbEQsTUFBTWQsT0FBTyxNQUFNTSxTQUFTRyxJQUFJO0lBRWhDLE9BQU87UUFDTFYsT0FBTztZQUFFQztRQUFLO1FBQ2RtQixZQUFZO0lBQ2Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXVsYS0wNC8uL3NyYy9wYWdlcy91c2Vycy9baWRdLnRzeD8yMGY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gXCJxdWVyeXN0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyRGV0YWlsc1BhZ2UocHJvcHM6IGFueSkge1xuICBjb25zdCB7IHVzZXIgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5IZWxsbyBVc2VycyA8L2gxPlxuICAgICAge0pTT04uc3RyaW5naWZ5KHVzZXIpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyB1c2Vycy8xXG4vLyB1c2Vycy8yXG4vLyB1c2Vycy8zXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNcIik7XG4gIGNvbnN0IGFsdW5vcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAvLyBjb25zb2xlLmxvZyhhbHVub3MubGVuZ3RoKTtcblxuICBjb25zdCBwYXRocyA9IGFsdW5vcy5tYXAoKGFsdW5vOiBhbnkpID0+ICh7XG4gICAgcGFyYW1zOiB7XG4gICAgICBpZDogYWx1bm8uaWQudG9TdHJpbmcoKSxcbiAgICB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xuXG4gIC8vIHJldHVybiB7XG4gIC8vICAgcGF0aHM6IFtcbiAgLy8gICAgIHsgcGFyYW1zOiB7IGlkOiBcIjFcIiB9IH0sXG4gIC8vICAgICB7IHBhcmFtczogeyBpZDogXCIyXCIgfSB9LFxuICAvLyAgICAgeyBwYXJhbXM6IHsgaWQ6IFwiM1wiIH0gfSxcbiAgLy8gICAgIHsgcGFyYW1zOiB7IGlkOiBcIjRcIiB9IH0sXG4gIC8vICAgXSxcbiAgLy8gICBmYWxsYmFjazogZmFsc2UsXG4gIC8vIH07XG59O1xuXG50eXBlIFBhcmFtcyA9IHtcbiAgaWQ6IHN0cmluZztcbn0gJiBQYXJzZWRVcmxRdWVyeTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucGFyYW1zIGFzIFBhcmFtcztcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzL1wiICsgaWRcbiAgKTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgdXNlciB9LFxuICAgIHJldmFsaWRhdGU6IDIsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIlVzZXJEZXRhaWxzUGFnZSIsInByb3BzIiwidXNlciIsImRpdiIsImgxIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFN0YXRpY1BhdGhzIiwicmVzcG9uc2UiLCJmZXRjaCIsImFsdW5vcyIsImpzb24iLCJwYXRocyIsIm1hcCIsImFsdW5vIiwicGFyYW1zIiwiaWQiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/users/[id].tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/users/[id].tsx"));
module.exports = __webpack_exports__;

})();