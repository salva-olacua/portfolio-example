"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/voxel-dog.js":
/*!*********************************!*\
  !*** ./components/voxel-dog.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nconst VoxelDog = ()=>{\n    _s();\n    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [renderer, setRenderer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [_camera, setCamera] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [target] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(-0.5, 1.2, 0));\n    const [initialCameraPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)));\n    const [scene] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Scene());\n    const [_controls, setControls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        const { current: container  } = refContainer;\n        if (container && renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container  } = refContainer;\n        if (container && !renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.setSize(scW, scH);\n            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_3__.sRGBEncoding;\n            container.appendChild(renderer.domElement);\n            setRenderer(renderer);\n            // 640 -> 240\n            // 8 -> 6\n            const scale = scH * 0.005 + 4.8;\n            const camera = new three__WEBPACK_IMPORTED_MODULE_3__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__.OrbitControls(camera, renderer.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, \"/dog.glb\", {\n                receiveShadow: false,\n                castShadow: false\n            }).then(()=>{\n                animate();\n                setLoading(false);\n            });\n            let req = null;\n            let frame = 0;\n            const animate = ()=>{\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    const p = initialCameraPosition;\n                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer.render(scene, camera);\n            };\n            return ()=>{\n                cancelAnimationFrame(req);\n                renderer.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return ()=>{\n            window.removeEventListener;\n        };\n        return ()=>{\n            second;\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-dog\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px - var(--spinner-size) / 2)\",\n                mt: \"calc(0px - var(--spinner-size))\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\solacua\\\\OneDrive - CRESUD S.A.C.I.F.y A\\\\Documents\\\\cursos\\\\portfolio-example\\\\components\\\\voxel-dog.js\",\n                lineNumber: 134,\n                columnNumber: 9\n            }, undefined),\n            \"Dog!!!\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\solacua\\\\OneDrive - CRESUD S.A.C.I.F.y A\\\\Documents\\\\cursos\\\\portfolio-example\\\\components\\\\voxel-dog.js\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VoxelDog, \"Jfff+GWIMvpqoKP7mbFhdmuMb6E=\");\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\nvar _c;\n$RefreshReg$(_c, \"VoxelDog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1CO0lBR2pDLHFCQUNFLDhEQUFDNUIsaURBQUdBO1FBQ0YyRSxLQUFLaEU7UUFDTGlFLFdBQVU7UUFDVkMsR0FBRTtRQUNGQyxJQUFJO1lBQUM7WUFBUztZQUFTO1NBQVM7UUFDaENDLElBQUk7WUFBQztZQUFTO1lBQVU7U0FBUztRQUNqQ0MsR0FBRztZQUFDO1lBQUs7WUFBSztTQUFJO1FBQ2xCQyxHQUFHO1lBQUM7WUFBSztZQUFLO1NBQUk7UUFDbEJoQyxVQUFTOztZQUNSckMseUJBQ0MsOERBQUNYLHFEQUFPQTtnQkFDTmlGLE1BQUs7Z0JBQ0xqQyxVQUFTO2dCQUNUa0MsTUFBSztnQkFDTEMsS0FBSTtnQkFDSkMsSUFBRztnQkFDSEMsSUFBRzs7Ozs7O1lBQ0w7Ozs7Ozs7QUFJUjtHQXRJTTVFO0tBQUFBO0FBd0lOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdm94ZWwtZG9nLmpzP2NmNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xyXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xyXG5cclxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCkge1xyXG4gIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcclxufVxyXG5cclxuY29uc3QgVm94ZWxEb2cgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtyZW5kZXJlciwgc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKVxyXG4gIGNvbnN0IFtfY2FtZXJhLCBzZXRDYW1lcmFdID0gdXNlU3RhdGUoKVxyXG4gIGNvbnN0IFt0YXJnZXRdID0gdXNlU3RhdGUobmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKSlcclxuICBjb25zdCBbaW5pdGlhbENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKFxyXG4gICAgbmV3IFRIUkVFLlZlY3RvcjMoXHJcbiAgICAgIDIwICogTWF0aC5zaW4oMC4yICogTWF0aC5QSSksXHJcbiAgICAgIDEwLFxyXG4gICAgICAyMCAqIE1hdGguY29zKDAuMiAqIE1hdGguUEkpXHJcbiAgICApXHJcbiAgKVxyXG4gIGNvbnN0IFtzY2VuZV0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcclxuICBjb25zdCBbX2NvbnRyb2xzLCBzZXRDb250cm9sc10gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lclxyXG4gICAgaWYoY29udGFpbmVyICYmIHJlbmRlcmVyKSB7XHJcbiAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XHJcblxyXG4gICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKVxyXG4gICAgfVxyXG4gIH0sIFtyZW5kZXJlcl0pXHJcblxyXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lcn0gPSByZWZDb250YWluZXJcclxuICAgIGlmKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpIHtcclxuICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICBhbHBoYTogdHJ1ZVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcclxuICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSClcclxuICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxyXG5cclxuICAgICAgLy8gNjQwIC0+IDI0MFxyXG4gICAgICAvLyA4IC0+IDZcclxuICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDQuOFxyXG4gICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxyXG4gICAgICAgIC1zY2FsZSxcclxuICAgICAgICBzY2FsZSxcclxuICAgICAgICBzY2FsZSxcclxuICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgMC4wMSxcclxuICAgICAgICA1MDAwMFxyXG4gICAgICApXHJcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcclxuICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXHJcbiAgICAgIHNldENhbWVyYShjYW1lcmEpXHJcblxyXG4gICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4Y2NjY2NjLCAxKVxyXG4gICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxyXG5cclxuICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlXHJcbiAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldFxyXG4gICAgICBzZXRDb250cm9scyhjb250cm9scylcclxuXHJcbiAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsICcvZG9nLmdsYicsIHtcclxuICAgICAgICByZWNlaXZlU2hhZG93OiBmYWxzZSxcclxuICAgICAgICBjYXN0U2hhZG93OiBmYWxzZVxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBhbmltYXRlKClcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgbGV0IHJlcSA9IG51bGxcclxuICAgICAgbGV0IGZyYW1lID0gMFxyXG4gICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxyXG4gICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWVcclxuICAgICAgICBpZihmcmFtZSA8PSAxMDApIHtcclxuICAgICAgICAgIGNvbnN0IHAgPSBpbml0aWFsQ2FtZXJhUG9zaXRpb25cclxuICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lIC8gMTIwKSAqIE1hdGguUEkgKiAyMFxyXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAxMFxyXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcclxuICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gcC56ICogTWF0aC5jb3Mocm90U3BlZWQpIC0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpXHJcbiAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udHJvbHMudXBkYXRlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSlcclxuICAgICAgICByZW5kZXJlci5kaXNwb3NlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSlcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyXHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzZWNvbmRcclxuICAgIH1cclxuICB9LCBbcmVuZGVyZXIsIGhhbmRsZVdpbmRvd1Jlc2l6ZV0pXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHJlZj17cmVmQ29udGFpbmVyfVxyXG4gICAgICBjbGFzc05hbWU9J3ZveGVsLWRvZydcclxuICAgICAgbT1cImF1dG9cIlxyXG4gICAgICBhdD17WyctMjBweCcsICctNjBweCcsICctMTIwcHgnXX1cclxuICAgICAgbWI9e1snLTQwcHgnLCAnLTE0MHB4JywgJy0yMDBweCddfVxyXG4gICAgICB3PXtbMjgwLCA0ODAsIDY0MF19XHJcbiAgICAgIGg9e1syODAsIDQ4MCwgNjQwXX1cclxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxyXG4gICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgPFNwaW5uZXJcclxuICAgICAgICAgIHNpemU9XCJ4bFwiXHJcbiAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcclxuICAgICAgICAgIGxlZnQ9XCI1MCVcIlxyXG4gICAgICAgICAgdG9wPVwiNTAlXCJcclxuICAgICAgICAgIG1sPVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpIC8gMilcIlxyXG4gICAgICAgICAgbXQ9XCJjYWxjKDBweCAtIHZhcigtLXNwaW5uZXItc2l6ZSkpXCIgLz5cclxuICAgICAgKX1cclxuICAgICAgRG9nISEhXHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZveGVsRG9nIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJCb3giLCJTcGlubmVyIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiVm94ZWxEb2ciLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwidGFyZ2V0IiwiVmVjdG9yMyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsInNpbiIsIlBJIiwiY29zIiwic2NlbmUiLCJTY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiaGFuZGxlV2luZG93UmVzaXplIiwiY3VycmVudCIsImNvbnRhaW5lciIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0Iiwic2V0U2l6ZSIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsImFuaW1hdGUiLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwidXBkYXRlIiwicmVuZGVyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkaXNwb3NlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWNvbmQiLCJyZWYiLCJjbGFzc05hbWUiLCJtIiwiYXQiLCJtYiIsInciLCJoIiwic2l6ZSIsImxlZnQiLCJ0b3AiLCJtbCIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n"));

/***/ })

});