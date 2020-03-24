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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js.js":
/*!***************!*\
  !*** ./js.js ***!
  \***************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var manyData = [];\nlocalStorage.setItem(\"data\", JSON.stringify(manyData));\n\ndocument.getElementById('show').onclick = function () {\n  var show = JSON.parse(localStorage.getItem(\"data\"));\n\n  for (var i = 0; i < show.length; i++) {\n    renderdata(show[i]);\n  }\n};\n\ndocument.getElementById('new').onclick = function () {\n  dataJSON = {\n    name: \"\",\n    adress: \"\",\n    phone: \"\"\n  };\n  dataJSON.name = document.getElementById('name').value;\n  dataJSON.adress = document.getElementById('adress').value;\n  dataJSON.phone = document.getElementById('phone').value;\n  var setdata = JSON.parse(localStorage.getItem(\"data\"));\n  console.log(setdata);\n  setdata.push(dataJSON);\n  var jsonData = JSON.stringify(setdata);\n  localStorage.setItem(\"data\", jsonData);\n};\n\ndocument.getElementById('delet').onclick = function () {\n  var namedel = document.getElementById('name').value;\n  var dataOndel = JSON.parse(localStorage.getItem('data'));\n\n  for (var i = 0; i < dataOndel.length; i++) {\n    if (namedel == dataOndel[i].name) {\n      dataOndel.splice(i, 1);\n      localStorage.setItem(\"data\", JSON.stringify(dataOndel));\n    }\n  }\n};\n\ndocument.getElementById('change').onclick = function () {\n  dataJSON = {\n    name: \"\",\n    adress: \"\",\n    phone: \"\"\n  };\n  dataJSON.name = document.getElementById('name').value;\n  dataJSON.adress = document.getElementById('adress').value;\n  dataJSON.phone = document.getElementById('phone').value;\n  var namedel = document.getElementById('name').value;\n  var dataOndel = JSON.parse(localStorage.getItem('data'));\n\n  for (var i = 0; i < dataOndel.length; i++) {\n    if (namedel == dataOndel[i].name) {\n      delete dataOndel[i];\n      dataOndel[i] = dataJSON;\n      localStorage.setItem(\"data\", JSON.stringify(dataOndel));\n    }\n  }\n};\n\nfunction renderdata(datadb) {\n  var div1 = document.createElement('div');\n  var span1 = document.createElement('span');\n  span1.innerHTML = datadb.name;\n  var div2 = document.createElement('div');\n  var span2 = document.createElement('span');\n  span2.innerHTML = datadb.adress;\n  var div3 = document.createElement('div');\n  var span3 = document.createElement('span');\n  span3.innerHTML = datadb.phone;\n  div1.appendChild(span1);\n  div2.appendChild(span2);\n  div3.appendChild(span3);\n  document.getElementById('d1').appendChild(div1);\n  document.getElementById('d2').appendChild(div2);\n  document.getElementById('d3').appendChild(div3);\n}\n\n//# sourceURL=webpack:///./js.js?");

/***/ })

/******/ });