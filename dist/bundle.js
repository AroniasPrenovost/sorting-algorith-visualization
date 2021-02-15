/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_generateData__ = __webpack_require__(/*! ./modules/generateData */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_compareData__ = __webpack_require__(/*! ./modules/compareData */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_generateTable__ = __webpack_require__(/*! ./modules/generateTable */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_sortFunctions__ = __webpack_require__(/*! ./modules/sortFunctions */ 4);\n\n\n\n\n\n// initialize \nObject(__WEBPACK_IMPORTED_MODULE_2__modules_generateTable__[\"a\" /* generateTable */])();\n\n// pass sorted outcome to the table\nconst colorTable = args => {\nlet colors = document.getElementsByClassName('color');\n\tfor(let i = 0; i < colors.length; i++){\n\t\t// monotone heat map \n\t\t/* if (!args) {\n   \t\t\tcolors[i].style.backgroundColor = '#c7ecee';\n   \t\t} else {\n\t\t\tcolors[i].style.backgroundColor = args[i].baseColor;\n\t\t\tcolors[i].style.opacity = args[i].opacity;\n   \t\t}\n   \t*/\n\n\t\t// color spectrum \n\t\tif (!args) {\n\t\t\tcolors[i].style.backgroundColor = '#22a6b3';\n\t\t} else {\n\t\t\t// round to 1 decimal point, convert to # \n\t\t\targs[i].opacity = Number((Math.round(args[i].opacity * 10) / 10).toFixed(1));\n\n\t\t\tif (args[i].opacity === .0) {\n\t\t\t\tcolors[i].style.backgroundColor = args[i].baseColor;\n\t\t\t} else if (args[i].opacity < .1) {\n\t\t\t\tcolors[i].style.backgroundColor = args[i].color1;\n\t\t\t} else if (args[i].opacity < .2) {\n\t\t\t\tcolors[i].style.backgroundColor = args[i].color2;\n\t\t\t} else if (args[i].opacity < .3) {\n\t\t\t\tcolors[i].style.backgroundColor = args[i].color3;\n\t\t\t} else if (args[i].opacity < .4) {\n\t\t\t\tcolors[i].style.backgroundColor = args[i].color4;\n\t\t\t} else if(args[i].opacity < .5) {\n\t\t\t\tcolors[i].style.backgroundColor = args[i].color5;\n\t\t\t}else if (args[i].opacity < .6) {\n\t\t\t\tcolors[i].style.backgroundColor = args[i].color6;\n\t\t\t} else if(args[i].opacity < .7) {\n\t\t\t\tcolors[i].style.backgroundColor = args[i].color7;\n\t\t\t} else if (args[i].opacity < .8) {\n\t\t\t\tcolors[i].style.backgroundColor = args[i].color8;\n\t\t\t} else if (args[i].opacity < .9) {\n\t\t\t\tcolors[i].style.backgroundColor = args[i].color9;\n\t\t\t}else {\n\t\t\t\tcolors[i].style.backgroundColor = args[i].color10;\n\t\t\t}\n\t\t}\n\t}\n}\n\n// compare pre and post sorted data\nlet tableData = Object(__WEBPACK_IMPORTED_MODULE_1__modules_compareData__[\"a\" /* compareData */])(Object(__WEBPACK_IMPORTED_MODULE_0__modules_generateData__[\"a\" /* generateData */])(), __WEBPACK_IMPORTED_MODULE_3__modules_sortFunctions__[\"a\" /* es6shuffleTwo */]);\n\n// color table  \ncolorTable(tableData);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dlbmVyYXRlRGF0YX0gZnJvbSAnLi9tb2R1bGVzL2dlbmVyYXRlRGF0YSc7XG5pbXBvcnQge2NvbXBhcmVEYXRhfSBmcm9tICcuL21vZHVsZXMvY29tcGFyZURhdGEnO1xuaW1wb3J0IHtnZW5lcmF0ZVRhYmxlfSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVUYWJsZSc7XG5pbXBvcnQge2VzNnNodWZmbGUsIGVzNnNodWZmbGVUd28sIHByb3RvdHlwZSwgbmF0aXZlU3dhcH0gZnJvbSBcIi4vbW9kdWxlcy9zb3J0RnVuY3Rpb25zXCI7XG5cbi8vIGluaXRpYWxpemUgXG5nZW5lcmF0ZVRhYmxlKCk7XG5cbi8vIHBhc3Mgc29ydGVkIG91dGNvbWUgdG8gdGhlIHRhYmxlXG5jb25zdCBjb2xvclRhYmxlID0gYXJncyA9PiB7XG5sZXQgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29sb3InKTtcblx0Zm9yKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKyl7XG5cdFx0Ly8gbW9ub3RvbmUgaGVhdCBtYXAgXG5cdFx0LyogaWYgKCFhcmdzKSB7XG4gICBcdFx0XHRjb2xvcnNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjN2VjZWUnO1xuICAgXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2xvcnNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYXJnc1tpXS5iYXNlQ29sb3I7XG5cdFx0XHRjb2xvcnNbaV0uc3R5bGUub3BhY2l0eSA9IGFyZ3NbaV0ub3BhY2l0eTtcbiAgIFx0XHR9XG4gICBcdCovXG5cblx0XHQvLyBjb2xvciBzcGVjdHJ1bSBcblx0XHRpZiAoIWFyZ3MpIHtcblx0XHRcdGNvbG9yc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzIyYTZiMyc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHJvdW5kIHRvIDEgZGVjaW1hbCBwb2ludCwgY29udmVydCB0byAjIFxuXHRcdFx0YXJnc1tpXS5vcGFjaXR5ID0gTnVtYmVyKChNYXRoLnJvdW5kKGFyZ3NbaV0ub3BhY2l0eSAqIDEwKSAvIDEwKS50b0ZpeGVkKDEpKTtcblxuXHRcdFx0aWYgKGFyZ3NbaV0ub3BhY2l0eSA9PT0gLjApIHtcblx0XHRcdFx0Y29sb3JzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGFyZ3NbaV0uYmFzZUNvbG9yO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdzW2ldLm9wYWNpdHkgPCAuMSkge1xuXHRcdFx0XHRjb2xvcnNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYXJnc1tpXS5jb2xvcjE7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ3NbaV0ub3BhY2l0eSA8IC4yKSB7XG5cdFx0XHRcdGNvbG9yc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBhcmdzW2ldLmNvbG9yMjtcblx0XHRcdH0gZWxzZSBpZiAoYXJnc1tpXS5vcGFjaXR5IDwgLjMpIHtcblx0XHRcdFx0Y29sb3JzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGFyZ3NbaV0uY29sb3IzO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdzW2ldLm9wYWNpdHkgPCAuNCkge1xuXHRcdFx0XHRjb2xvcnNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYXJnc1tpXS5jb2xvcjQ7XG5cdFx0XHR9IGVsc2UgaWYoYXJnc1tpXS5vcGFjaXR5IDwgLjUpIHtcblx0XHRcdFx0Y29sb3JzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGFyZ3NbaV0uY29sb3I1O1xuXHRcdFx0fWVsc2UgaWYgKGFyZ3NbaV0ub3BhY2l0eSA8IC42KSB7XG5cdFx0XHRcdGNvbG9yc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBhcmdzW2ldLmNvbG9yNjtcblx0XHRcdH0gZWxzZSBpZihhcmdzW2ldLm9wYWNpdHkgPCAuNykge1xuXHRcdFx0XHRjb2xvcnNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYXJnc1tpXS5jb2xvcjc7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ3NbaV0ub3BhY2l0eSA8IC44KSB7XG5cdFx0XHRcdGNvbG9yc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBhcmdzW2ldLmNvbG9yODtcblx0XHRcdH0gZWxzZSBpZiAoYXJnc1tpXS5vcGFjaXR5IDwgLjkpIHtcblx0XHRcdFx0Y29sb3JzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGFyZ3NbaV0uY29sb3I5O1xuXHRcdFx0fWVsc2Uge1xuXHRcdFx0XHRjb2xvcnNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYXJnc1tpXS5jb2xvcjEwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vLyBjb21wYXJlIHByZSBhbmQgcG9zdCBzb3J0ZWQgZGF0YVxubGV0IHRhYmxlRGF0YSA9IGNvbXBhcmVEYXRhKGdlbmVyYXRlRGF0YSgpLCBlczZzaHVmZmxlVHdvKTtcblxuLy8gY29sb3IgdGFibGUgIFxuY29sb3JUYWJsZSh0YWJsZURhdGEpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************!*\
  !*** ./src/modules/generateData.js ***!
  \*************************************/
/*! exports provided: generateData */
/*! exports used: generateData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return generateData; });\nconst generateData = () => {\n\tvar newDataSet = [];\n\tlet i = 0; \n\twhile (i < 3600) {\n\t\tlet item = {}\n\t\tlet r = i; // order 1, 2, 3... \n\t\titem.key = r;\n\t\titem.baseColor = 'white';\n\t\titem.color1 = '#ffbe76';\n\t\titem.color2 = '#ff7979';\n\t\titem.color3 = '#badc58';\n\t\titem.color4 = '#dff9fb';\n\t\titem.color5 = '#f9ca24';\n\t\titem.color6 = '#f0932b';\n\t\titem.color7 = '#eb4d4b';\n\t\titem.color8 = '#6ab04c';\n\t\titem.color9 = '#22a6b3';\n\t\titem.color10 = '#be2edd';\n\t\titem.opacity = .0;  \n\t\tnewDataSet.push(item)\n\t\ti++; \n\t}\n\t\n\treturn newDataSet;  \n} \n \n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dlbmVyYXRlRGF0YS5qcz8yZWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdlbmVyYXRlRGF0YSA9ICgpID0+IHtcblx0dmFyIG5ld0RhdGFTZXQgPSBbXTtcblx0bGV0IGkgPSAwOyBcblx0d2hpbGUgKGkgPCAzNjAwKSB7XG5cdFx0bGV0IGl0ZW0gPSB7fVxuXHRcdGxldCByID0gaTsgLy8gb3JkZXIgMSwgMiwgMy4uLiBcblx0XHRpdGVtLmtleSA9IHI7XG5cdFx0aXRlbS5iYXNlQ29sb3IgPSAnd2hpdGUnO1xuXHRcdGl0ZW0uY29sb3IxID0gJyNmZmJlNzYnO1xuXHRcdGl0ZW0uY29sb3IyID0gJyNmZjc5NzknO1xuXHRcdGl0ZW0uY29sb3IzID0gJyNiYWRjNTgnO1xuXHRcdGl0ZW0uY29sb3I0ID0gJyNkZmY5ZmInO1xuXHRcdGl0ZW0uY29sb3I1ID0gJyNmOWNhMjQnO1xuXHRcdGl0ZW0uY29sb3I2ID0gJyNmMDkzMmInO1xuXHRcdGl0ZW0uY29sb3I3ID0gJyNlYjRkNGInO1xuXHRcdGl0ZW0uY29sb3I4ID0gJyM2YWIwNGMnO1xuXHRcdGl0ZW0uY29sb3I5ID0gJyMyMmE2YjMnO1xuXHRcdGl0ZW0uY29sb3IxMCA9ICcjYmUyZWRkJztcblx0XHRpdGVtLm9wYWNpdHkgPSAuMDsgIFxuXHRcdG5ld0RhdGFTZXQucHVzaChpdGVtKVxuXHRcdGkrKzsgXG5cdH1cblx0XG5cdHJldHVybiBuZXdEYXRhU2V0OyAgXG59IFxuIFxuZXhwb3J0IHtnZW5lcmF0ZURhdGF9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9nZW5lcmF0ZURhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************!*\
  !*** ./src/modules/compareData.js ***!
  \************************************/
/*! exports provided: compareData */
/*! exports used: compareData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return compareData; });\n// `functionArg` from './sortFunctions' \n\nfunction compareData(generatedData, functionArg) {\n\tlet data = generatedData;\n \tlet c = 0;\n \tlet shuffled;\n \t\n \t// if key is in original spot, +.1 opacity \n \twhile (c < 5000) {\n \t\tshuffled = functionArg(Object.entries(data));\n\t \tfor (let e = 0; e < shuffled.length; e++) {\n \t\t\tif (shuffled[e][1].key === data[e].key) {\n\t\t\t\tdata[e].opacity = data[e].opacity + .1;\t\n\t\t\t}\n\t\t}\n\tc++;\n\t}\t\n\n\treturn data; \n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbXBhcmVEYXRhLmpzPzIyNmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYGZ1bmN0aW9uQXJnYCBmcm9tICcuL3NvcnRGdW5jdGlvbnMnIFxuXG5mdW5jdGlvbiBjb21wYXJlRGF0YShnZW5lcmF0ZWREYXRhLCBmdW5jdGlvbkFyZykge1xuXHRsZXQgZGF0YSA9IGdlbmVyYXRlZERhdGE7XG4gXHRsZXQgYyA9IDA7XG4gXHRsZXQgc2h1ZmZsZWQ7XG4gXHRcbiBcdC8vIGlmIGtleSBpcyBpbiBvcmlnaW5hbCBzcG90LCArLjEgb3BhY2l0eSBcbiBcdHdoaWxlIChjIDwgNTAwMCkge1xuIFx0XHRzaHVmZmxlZCA9IGZ1bmN0aW9uQXJnKE9iamVjdC5lbnRyaWVzKGRhdGEpKTtcblx0IFx0Zm9yIChsZXQgZSA9IDA7IGUgPCBzaHVmZmxlZC5sZW5ndGg7IGUrKykge1xuIFx0XHRcdGlmIChzaHVmZmxlZFtlXVsxXS5rZXkgPT09IGRhdGFbZV0ua2V5KSB7XG5cdFx0XHRcdGRhdGFbZV0ub3BhY2l0eSA9IGRhdGFbZV0ub3BhY2l0eSArIC4xO1x0XG5cdFx0XHR9XG5cdFx0fVxuXHRjKys7XG5cdH1cdFxuXG5cdHJldHVybiBkYXRhOyBcbn1cblxuZXhwb3J0IHtjb21wYXJlRGF0YX07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2NvbXBhcmVEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**************************************!*\
  !*** ./src/modules/generateTable.js ***!
  \**************************************/
/*! exports provided: generateTable */
/*! exports used: generateTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return generateTable; });\nconst generateTable = () => {\n\tlet myTableDiv = document.getElementById(\"myDynamicTable\");\n\tlet table = document.createElement('TABLE');\n\ttable.border = '1';\n\tlet tableBody = document.createElement('TBODY');\n\ttable.appendChild(tableBody);\n\tfor (let i = 0; i < 61; i++) {\n\t\tlet tr = document.createElement('TR');\n\t\ttableBody.appendChild(tr);\n\t\tfor (let j = 0; j < 61; j++) {\n\t\t\tlet td = document.createElement('TD');\n\t\t\ttd.width = '50';\n\t\t\tif (j === 0) {\n\t\t\t\tlet p = document.createElement(\"p\");\n\t\t\t\tp.classList.add('rotate');\n\t\t\t\tlet t = document.createTextNode(i-1);\n\t\t\t\tp.appendChild(t);\n\t\t\t\ttd.appendChild(p);\n\t\t\t\ttd.classList.add('outer');\n\t\t\t}  \n\t\t\tif (i === 0 && j !== 0) {\n\t\t\t\ttd.appendChild(document.createTextNode(j-1));\n\t\t\t\ttd.classList.add('outer');\n\t\t\t}\n\t\t\tif (i !== 0 && j !== 0) {\n\t\t\t\ttd.classList.add('color');\n\t\t\t\t// apply color based on data \n\t\t\t}\n\t\t\t\n\t\t\ttr.appendChild(td);\n\t\t}\n\t}\n\n\tmyTableDiv.appendChild(table);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dlbmVyYXRlVGFibGUuanM/YjllOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZW5lcmF0ZVRhYmxlID0gKCkgPT4ge1xuXHRsZXQgbXlUYWJsZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlEeW5hbWljVGFibGVcIik7XG5cdGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RBQkxFJyk7XG5cdHRhYmxlLmJvcmRlciA9ICcxJztcblx0bGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RCT0RZJyk7XG5cdHRhYmxlLmFwcGVuZENoaWxkKHRhYmxlQm9keSk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgNjE7IGkrKykge1xuXHRcdGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RSJyk7XG5cdFx0dGFibGVCb2R5LmFwcGVuZENoaWxkKHRyKTtcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IDYxOyBqKyspIHtcblx0XHRcdGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1REJyk7XG5cdFx0XHR0ZC53aWR0aCA9ICc1MCc7XG5cdFx0XHRpZiAoaiA9PT0gMCkge1xuXHRcdFx0XHRsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRwLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuXHRcdFx0XHRsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGktMSk7XG5cdFx0XHRcdHAuYXBwZW5kQ2hpbGQodCk7XG5cdFx0XHRcdHRkLmFwcGVuZENoaWxkKHApO1xuXHRcdFx0XHR0ZC5jbGFzc0xpc3QuYWRkKCdvdXRlcicpO1xuXHRcdFx0fSAgXG5cdFx0XHRpZiAoaSA9PT0gMCAmJiBqICE9PSAwKSB7XG5cdFx0XHRcdHRkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGotMSkpO1xuXHRcdFx0XHR0ZC5jbGFzc0xpc3QuYWRkKCdvdXRlcicpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgIT09IDAgJiYgaiAhPT0gMCkge1xuXHRcdFx0XHR0ZC5jbGFzc0xpc3QuYWRkKCdjb2xvcicpO1xuXHRcdFx0XHQvLyBhcHBseSBjb2xvciBiYXNlZCBvbiBkYXRhIFxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0ci5hcHBlbmRDaGlsZCh0ZCk7XG5cdFx0fVxuXHR9XG5cblx0bXlUYWJsZURpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XG59XG5cbmV4cG9ydCB7Z2VuZXJhdGVUYWJsZX07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2dlbmVyYXRlVGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!**************************************!*\
  !*** ./src/modules/sortFunctions.js ***!
  \**************************************/
/*! exports provided: es6shuffle, es6shuffleTwo, prototype, nativeSwap */
/*! exports used: es6shuffleTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export es6shuffle */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return es6shuffleTwo; });\n/* unused harmony export prototype */\n/* unused harmony export nativeSwap */\n// es6 shuffle \nfunction es6shuffle(a) {\n\tfor (let i = a.length - 1; i > 0; i--) {\n\t\tconst j = Math.floor(Math.random() * (i + 1));\n\t\t[a[i], a[j]] = [a[j], a[i]];\n\t}\n\n\treturn a;\n}\n\n// es6 approach #2 \nfunction es6shuffleTwo(a) {\n\tvar x = a.sort(function() {\n\t\treturn .5 - Math.random();\n\t});\n\t\n\treturn x; \n}\n\n// prototype approach to shuffle \nfunction prototype(a) {\n\tArray.prototype.shuffle = function() {\n\t\tlet m = this.length, i;\n\t\twhile (m) {\n\t\t\ti = (Math.random() * m--) >>> 0;\n\t\t\t[this[m], this[i]] = [this[i], this[m]]\n\t\t}\n\t\treturn this;\n\t}\n\n\treturn a.shuffle();\n}\n\nfunction nativeSwap(a) {\n  var n = a.length, i = -1, j, k;\n  while (++i < n) {\n    j = Math.floor(Math.random() * n);\n    k = Math.floor(Math.random() * n);\n    let t = a[j];\n    a[j] = a[k];\n    a[k] = t;\n  }\n  return a; \n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3NvcnRGdW5jdGlvbnMuanM/MjRjYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlczYgc2h1ZmZsZSBcbmZ1bmN0aW9uIGVzNnNodWZmbGUoYSkge1xuXHRmb3IgKGxldCBpID0gYS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG5cdFx0Y29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuXHRcdFthW2ldLCBhW2pdXSA9IFthW2pdLCBhW2ldXTtcblx0fVxuXG5cdHJldHVybiBhO1xufVxuXG4vLyBlczYgYXBwcm9hY2ggIzIgXG5mdW5jdGlvbiBlczZzaHVmZmxlVHdvKGEpIHtcblx0dmFyIHggPSBhLnNvcnQoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIC41IC0gTWF0aC5yYW5kb20oKTtcblx0fSk7XG5cdFxuXHRyZXR1cm4geDsgXG59XG5cbi8vIHByb3RvdHlwZSBhcHByb2FjaCB0byBzaHVmZmxlIFxuZnVuY3Rpb24gcHJvdG90eXBlKGEpIHtcblx0QXJyYXkucHJvdG90eXBlLnNodWZmbGUgPSBmdW5jdGlvbigpIHtcblx0XHRsZXQgbSA9IHRoaXMubGVuZ3RoLCBpO1xuXHRcdHdoaWxlIChtKSB7XG5cdFx0XHRpID0gKE1hdGgucmFuZG9tKCkgKiBtLS0pID4+PiAwO1xuXHRcdFx0W3RoaXNbbV0sIHRoaXNbaV1dID0gW3RoaXNbaV0sIHRoaXNbbV1dXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cmV0dXJuIGEuc2h1ZmZsZSgpO1xufVxuXG5mdW5jdGlvbiBuYXRpdmVTd2FwKGEpIHtcbiAgdmFyIG4gPSBhLmxlbmd0aCwgaSA9IC0xLCBqLCBrO1xuICB3aGlsZSAoKytpIDwgbikge1xuICAgIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuKTtcbiAgICBrID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbik7XG4gICAgbGV0IHQgPSBhW2pdO1xuICAgIGFbal0gPSBhW2tdO1xuICAgIGFba10gPSB0O1xuICB9XG4gIHJldHVybiBhOyBcbn1cblxuZXhwb3J0IHtlczZzaHVmZmxlLCBlczZzaHVmZmxlVHdvLCBwcm90b3R5cGUsIG5hdGl2ZVN3YXB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9zb3J0RnVuY3Rpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);