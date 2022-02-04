"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/robots",{

/***/ "./pages/robots.js":
/*!*************************!*\
  !*** ./pages/robots.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_arg_Documents_Projects_next_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_arg_Documents_Projects_next_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_arg_Documents_Projects_next_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar Robots = function(props) {\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Robots\"\n            }, void 0, false, {\n                fileName: \"/home/arg/Documents/Projects/next_ssr/pages/robots.js\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"/home/arg/Documents/Projects/next_ssr/pages/robots.js\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/arg/Documents/Projects/next_ssr/pages/robots.js\",\n                lineNumber: 7,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/home/arg/Documents/Projects/next_ssr/pages/robots.js\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: props.robots.map(function(robot) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: robot.name\n                    }, robot.id, false, {\n                        fileName: \"/home/arg/Documents/Projects/next_ssr/pages/robots.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/arg/Documents/Projects/next_ssr/pages/robots.js\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/arg/Documents/Projects/next_ssr/pages/robots.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, _this);\n};\n_c = Robots;\nRobots.getInitialProps = _asyncToGenerator(_home_arg_Documents_Projects_next_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var data;\n    return _home_arg_Documents_Projects_next_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/users\");\n            case 2:\n                data = _ctx.sent.data;\n                console.log(data);\n                return _ctx.abrupt(\"return\", {\n                    robots: data\n                });\n            case 5:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Robots);\nvar _c;\n$RefreshReg$(_c, \"Robots\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yb2JvdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsR0FBSyxDQUFDRSxNQUFNLEdBQUcsUUFBUSxDQUFQQyxLQUFLO2tCQUNuQixNQUNGLENBQUMsOERBREVDLENBQUc7O3dGQUNEQyxDQUFFOzBCQUFDLENBQU07Ozs7Ozt3RkFDVEosa0RBQUk7Z0JBQUNLLElBQUksRUFBQyxDQUFHO3NHQUNYQyxDQUFNOzhCQUFDLENBQUk7Ozs7Ozs7Ozs7O3dGQUViQyxDQUFDOzs7Ozt3RkFDREosQ0FBRzswQkFDREQsS0FBSyxDQUFDTSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEtBQUs7a0NBQ3RCLE1BQU0sK0RBQUxDLENBQUU7a0NBQWlCRCxLQUFLLENBQUNFLElBQUk7dUJBQXJCRixLQUFLLENBQUNHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVRuQlosTUFBTTtBQWVaQSxNQUFNLENBQUNhLGVBQWUsc0tBQUcsUUFBUSxXQUFVLENBQUM7UUFDbENDLElBQUk7Ozs7O3VCQUFXaEIsZ0RBQVMsQ0FDOUIsQ0FBNEM7O2dCQUR0Q2dCLElBQUksYUFBSkEsSUFBSTtnQkFHWkUsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUk7NkNBQ1QsQ0FBQztvQkFBQ1AsTUFBTSxFQUFFTyxJQUFJO2dCQUFDLENBQUM7Ozs7OztBQUN6QixDQUFDO0FBRUQsK0RBQWVkLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yb2JvdHMuanM/NjgwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IFJvYm90cyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxoMT5Sb2JvdHM8L2gxPlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICA8YnV0dG9uPkhvbWU8L2J1dHRvbj5cbiAgICA8L0xpbms+XG4gICAgPHA+PC9wPlxuICAgIDxkaXY+XG4gICAgICB7cHJvcHMucm9ib3RzLm1hcCgocm9ib3QpID0+IChcbiAgICAgICAgPGxpIGtleT17cm9ib3QuaWR9Pntyb2JvdC5uYW1lfTwvbGk+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5Sb2JvdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiXG4gICk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4geyByb2JvdHM6IGRhdGEgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvYm90cztcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkxpbmsiLCJSb2JvdHMiLCJwcm9wcyIsImRpdiIsImgxIiwiaHJlZiIsImJ1dHRvbiIsInAiLCJyb2JvdHMiLCJtYXAiLCJyb2JvdCIsImxpIiwibmFtZSIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiZGF0YSIsImdldCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/robots.js\n");

/***/ })

});