/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/js.js":
/*!******************!*\
  !*** ./js/js.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulo_tabNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo/tabNav.js */ \"./js/modulo/tabNav.js\");\n/* harmony import */ var _modulo_scrollSuave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulo/scrollSuave.js */ \"./js/modulo/scrollSuave.js\");\n/* harmony import */ var _modulo_animate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulo/animate.js */ \"./js/modulo/animate.js\");\n/* harmony import */ var _modulo_acord_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulo/acord.js */ \"./js/modulo/acord.js\");\n/* harmony import */ var _modulo_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulo/modal.js */ \"./js/modulo/modal.js\");\n/* harmony import */ var _modulo_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulo/tooltip.js */ \"./js/modulo/tooltip.js\");\n/* harmony import */ var _modulo_drop_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modulo/drop.js */ \"./js/modulo/drop.js\");\n/* harmony import */ var _modulo_menuMb_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modulo/menuMb.js */ \"./js/modulo/menuMb.js\");\n/* harmony import */ var _modulo_horario_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modulo/horario.js */ \"./js/modulo/horario.js\");\n/* harmony import */ var _modulo_initApi_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modulo/initApi.js */ \"./js/modulo/initApi.js\");\n/* harmony import */ var _modulo_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modulo/bitcoin.js */ \"./js/modulo/bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar scrollSuaveAt = new _modulo_scrollSuave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuaveAt.init();\nvar acordion = new _modulo_acord_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-anima=\"acordion\"] dt');\nacordion.init();\nvar tabNav = new _modulo_tabNav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\n(0,_modulo_animate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nvar modal = new _modulo_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\nvar tollTip = new _modulo_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-tollTip]');\ntollTip.init();\n(0,_modulo_drop_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modulo_menuMb_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modulo_horario_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modulo_initApi_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modulo_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/js.js?");

/***/ }),

/***/ "./js/modulo/acord.js":
/*!****************************!*\
  !*** ./js/modulo/acord.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Acord)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar Acord = /*#__PURE__*/function () {\n  function Acord(list) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Acord);\n\n    this.dt = document.querySelectorAll(list);\n    this.active = 'ativo';\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Acord, [{\n    key: \"appears\",\n    value: function appears(item) {\n      item.classList.toggle(this.active);\n      item.nextElementSibling.classList.toggle(this.active);\n    }\n  }, {\n    key: \"addEventAcord\",\n    value: function addEventAcord() {\n      var _this = this;\n\n      this.dt.forEach(function (item) {\n        item.addEventListener('click', function () {\n          return _this.appears(item);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.dt.length) {\n        this.appears(this.dt[0]);\n        this.addEventAcord();\n      }\n\n      return this;\n    }\n  }]);\n\n  return Acord;\n}();\n\n\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modulo/acord.js?");

/***/ }),

/***/ "./js/modulo/animaNumero.js":
/*!**********************************!*\
  !*** ./js/modulo/animaNumero.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar AnimaNumeros = /*#__PURE__*/function () {\n  function AnimaNumeros(numeros, observetarget, observer) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AnimaNumeros);\n\n    this.numeros = document.querySelectorAll(numeros);\n    this.observeTarget = document.querySelector(observetarget);\n    this.observerClass = observer;\n    this.mutacao = this.mutacao.bind(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AnimaNumeros, [{\n    key: \"itAnimaNumeros\",\n    value: function itAnimaNumeros() {\n      var _this = this;\n\n      this.numeros.forEach(function (numero) {\n        _this.constructor.incrementar(numero);\n      });\n    }\n  }, {\n    key: \"mutacao\",\n    value: function mutacao(mutation) {\n      if (mutation[0].target.classList.contains(this.observerClass)) {\n        this.observe.disconnect();\n        this.itAnimaNumeros();\n      }\n    }\n  }, {\n    key: \"addMutation\",\n    value: function addMutation() {\n      this.observe = new MutationObserver(this.mutacao);\n      this.observe.observe(this.observeTarget, {\n        attributes: true\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.numeros.length && this.observeTarget) {\n        this.addMutation();\n      }\n\n      return this;\n    }\n  }], [{\n    key: \"incrementar\",\n    value: function incrementar(numero) {\n      var total = +numero.innerText;\n      var incremento = Math.floor(total / 100);\n      var start = 0;\n      var timer = setInterval(function () {\n        start += incremento;\n        numero.innerText = start;\n\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    }\n  }]);\n\n  return AnimaNumeros;\n}();\n\n\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modulo/animaNumero.js?");

/***/ }),

/***/ "./js/modulo/animate.js":
/*!******************************!*\
  !*** ./js/modulo/animate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScroll)\n/* harmony export */ });\nfunction initScroll() {\n  var containers = document.querySelectorAll('[data-scroll=\"anima\"]');\n  var metadeDaTela = window.innerHeight * 0.7;\n\n  function animate() {\n    containers.forEach(function (item) {\n      var distaciaEle = item.getBoundingClientRect().top;\n      var test = distaciaEle - metadeDaTela < 0;\n\n      if (test) {\n        item.classList.add('ativar');\n      } else if (item.classList.contains('ativar')) {\n        item.classList.remove('ativar');\n      }\n    });\n  }\n\n  if (containers.length) {\n    animate();\n    window.addEventListener('scroll', animate);\n  }\n}\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modulo/animate.js?");

/***/ }),

/***/ "./js/modulo/bitcoin.js":
/*!******************************!*\
  !*** ./js/modulo/bitcoin.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBit)\n/* harmony export */ });\nfunction initBit() {\n  fetch('https://blockchain.info/ticker').then(function (response) {\n    return response.json();\n  }).then(function (Object) {\n    var btcPlace = document.querySelector('.btc-preco');\n    btcPlace.innerText = (100 / Object.BRL.sell).toFixed(4);\n  })[\"catch\"](function (erro) {\n    console.log(erro);\n  });\n}\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modulo/bitcoin.js?");

/***/ }),

/***/ "./js/modulo/drop.js":
/*!***************************!*\
  !*** ./js/modulo/drop.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDrop)\n/* harmony export */ });\n/* harmony import */ var _outSideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outSideClick.js */ \"./js/modulo/outSideClick.js\");\n\nfunction initDrop() {\n  var dropDown = document.querySelectorAll('[data-dropdown]');\n\n  function handleEvent(event) {\n    var _this = this;\n\n    event.preventDefault();\n    this.classList.add('active');\n    (0,_outSideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], function () {\n      _this.classList.remove('active');\n    });\n  }\n\n  dropDown.forEach(function (menu) {\n    ['touchstart', 'click'].forEach(function (item) {\n      menu.addEventListener(item, handleEvent);\n    });\n  });\n}\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modulo/drop.js?");

/***/ }),

/***/ "./js/modulo/horario.js":
/*!******************************!*\
  !*** ./js/modulo/horario.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initData)\n/* harmony export */ });\nfunction initData() {\n  var funcionamento = document.querySelector('[data-semana]');\n  var diasSemanas = funcionamento.dataset.semana.split(',').map(Number);\n  var Horas = funcionamento.dataset.horario.split(',').map(Number);\n  var dataAgora = new Date();\n  var dia = dataAgora.getDay();\n  var hora = dataAgora.getHours();\n  var semanaAberto = diasSemanas.indexOf(dia) !== -1;\n  var horarioAberto = hora >= Horas[0] && hora < Horas[1];\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add('aberto');\n  }\n}\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modulo/horario.js?");

/***/ }),

/***/ "./js/modulo/initApi.js":
/*!******************************!*\
  !*** ./js/modulo/initApi.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaisApi)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _animaNumero_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animaNumero.js */ \"./js/modulo/animaNumero.js\");\n\n\n\nfunction initAnimaisApi() {\n  function create(animal) {\n    var div = document.createElement('div');\n    div.innerHTML = \"<h3>\".concat(animal.specie, \"</h3><span>\").concat(animal.numeros, \"</span>\");\n    div.classList.add('numero-animal');\n    return div;\n  }\n\n  function fetchApi(_x) {\n    return _fetchApi.apply(this, arguments);\n  }\n\n  function _fetchApi() {\n    _fetchApi = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n      var response, obj, gridn, animaNumero;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return fetch(url);\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n\n            case 6:\n              obj = _context.sent;\n              gridn = document.querySelector('.numero-grid');\n              obj.forEach(function (animal) {\n                var divAnimal = create(animal);\n                gridn.appendChild(divAnimal);\n              });\n              animaNumero = new _animaNumero_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.numero-grid .numero-animal span', '.numeros', 'ativar');\n              animaNumero.init();\n              _context.next = 16;\n              break;\n\n            case 13:\n              _context.prev = 13;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 13]]);\n    }));\n    return _fetchApi.apply(this, arguments);\n  }\n\n  fetchApi('../../animaisApi.json');\n}\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modulo/initApi.js?");

/***/ }),

/***/ "./js/modulo/menuMb.js":
/*!*****************************!*\
  !*** ./js/modulo/menuMb.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenu)\n/* harmony export */ });\n/* harmony import */ var _outSideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outSideClick.js */ \"./js/modulo/outSideClick.js\");\n\nfunction initMenu() {\n  var menu = document.querySelector('[data-menu=\"button\"]');\n  var list = document.querySelector('[data-menu=\"list\"]');\n  var eventos = ['click', 'touchstart'];\n\n  function openMenu(event) {\n    if (event.type === 'touchstart') {\n      event.preventDefault();\n    }\n\n    menu.classList.add('active');\n    list.classList.add('active');\n    (0,_outSideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list, eventos, function () {\n      menu.classList.remove('active');\n      list.classList.remove('active');\n    });\n  }\n\n  if (menu) {\n    eventos.forEach(function (evento) {\n      menu.addEventListener(evento, openMenu);\n    });\n  }\n}\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modulo/menuMb.js?");

/***/ }),

/***/ "./js/modulo/modal.js":
/*!****************************!*\
  !*** ./js/modulo/modal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(abrirModal, fecharModal, container) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Modal);\n\n    this.abrirModal = document.querySelector(abrirModal);\n    this.fecharModal = document.querySelector(fecharModal);\n    this.container = document.querySelector(container);\n    this.eventToggle = this.eventToggle.bind(this);\n    this.cliqueFora = this.cliqueFora.bind(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Modal, [{\n    key: \"toggle\",\n    value: function toggle() {\n      this.container.classList.toggle('ativo');\n    }\n  }, {\n    key: \"eventToggle\",\n    value: function eventToggle(event) {\n      event.preventDefault();\n      this.toggle();\n    }\n  }, {\n    key: \"cliqueFora\",\n    value: function cliqueFora(event) {\n      if (event.target === this.container) {\n        this.toggle(event);\n      }\n    }\n  }, {\n    key: \"addModalEvent\",\n    value: function addModalEvent() {\n      this.abrirModal.addEventListener('click', this.eventToggle);\n      this.fecharModal.addEventListener('click', this.eventToggle);\n      this.container.addEventListener('click', this.cliqueFora);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.abrirModal && this.fecharModal && this.container) {\n        this.addModalEvent();\n      }\n\n      return this;\n    }\n  }]);\n\n  return Modal;\n}();\n\n\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modulo/modal.js?");

/***/ }),

/***/ "./js/modulo/outSideClick.js":
/*!***********************************!*\
  !*** ./js/modulo/outSideClick.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outSideClick)\n/* harmony export */ });\nfunction outSideClick(element, events, callback) {\n  var html = document.documentElement;\n  var out = 'data-outside';\n\n  function handleOut(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(out, '');\n      events.forEach(function (userE) {\n        html.removeEventListener(userE, handleOut);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(out)) {\n    events.forEach(function (userE) {\n      setTimeout(function () {\n        html.addEventListener(userE, handleOut);\n      });\n    });\n    element.setAttribute(out, '');\n  }\n}\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modulo/outSideClick.js?");

/***/ }),

/***/ "./js/modulo/scrollSuave.js":
/*!**********************************!*\
  !*** ./js/modulo/scrollSuave.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar ScrollSuave = /*#__PURE__*/function () {\n  function ScrollSuave(link, options) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollSuave);\n\n    this.linkInternos = document.querySelectorAll(link);\n\n    if (options === undefined) {\n      this.options = {\n        behavior: 'smooth',\n        block: 'start'\n      };\n    } else {\n      this.options = options;\n    }\n\n    this.initSo = this.initSo.bind(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollSuave, [{\n    key: \"initSo\",\n    value: function initSo(event) {\n      event.preventDefault();\n      var href = event.currentTarget.getAttribute('href');\n      var endereco = document.querySelector(href);\n      endereco.scrollIntoView(this.options);\n    }\n  }, {\n    key: \"addEventlink\",\n    value: function addEventlink() {\n      var _this = this;\n\n      this.linkInternos.forEach(function (item) {\n        item.addEventListener('click', _this.initSo);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.linkInternos.length) {\n        this.addEventlink();\n      }\n\n      return this;\n    }\n  }]);\n\n  return ScrollSuave;\n}();\n\n\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modulo/scrollSuave.js?");

/***/ }),

/***/ "./js/modulo/tabNav.js":
/*!*****************************!*\
  !*** ./js/modulo/tabNav.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tabnav)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar Tabnav = /*#__PURE__*/function () {\n  function Tabnav(menu, content) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Tabnav);\n\n    this.imgsNav = document.querySelectorAll(menu);\n    this.section = document.querySelectorAll(content);\n    this.active = 'ativo';\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Tabnav, [{\n    key: \"navActive\",\n    value: function navActive(index) {\n      var _this = this;\n\n      this.section.forEach(function (item) {\n        item.classList.remove(_this.active);\n      });\n      var direcao = this.section[index].dataset.anima;\n      this.section[index].classList.add(this.active, direcao);\n    }\n  }, {\n    key: \"addEventTab\",\n    value: function addEventTab() {\n      var _this2 = this;\n\n      this.imgsNav.forEach(function (item, index) {\n        item.addEventListener('click', function () {\n          return _this2.navActive(index);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.section.length && this.imgsNav.length) {\n        this.addEventTab();\n        this.navActive(0);\n      }\n\n      return this;\n    }\n  }]);\n\n  return Tabnav;\n}();\n\n\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modulo/tabNav.js?");

/***/ }),

/***/ "./js/modulo/tooltip.js":
/*!******************************!*\
  !*** ./js/modulo/tooltip.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToolTip)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar ToolTip = /*#__PURE__*/function () {\n  function ToolTip(tooltips) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ToolTip);\n\n    this.tooltip = document.querySelectorAll(tooltips);\n    this.onMouseMove = this.onMouseMove.bind(this);\n    this.onmouse = this.onmouse.bind(this);\n    this.onmouseleave = this.onmouseleave.bind(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ToolTip, [{\n    key: \"criarToll\",\n    value: function criarToll(element) {\n      var tipBox = document.createElement('div');\n      var text = element.getAttribute('aria-label');\n      tipBox.classList.add('tollTip');\n      tipBox.innerText = text;\n      document.body.appendChild(tipBox); // eslint-disable-next-line no-return-assign\n\n      return this.tipBox = tipBox;\n    }\n  }, {\n    key: \"onMouseMove\",\n    value: function onMouseMove(event) {\n      this.tipBox.style.top = \"\".concat(event.pageY + 20, \"px\");\n\n      if (event.pageX + 240 > window.innerWidth) {\n        this.tipBox.style.left = \"\".concat(event.pageX - 190, \"px\");\n      } else {\n        this.tipBox.style.left = \"\".concat(event.pageX + 20, \"px\");\n      }\n    }\n  }, {\n    key: \"onmouseleave\",\n    value: function onmouseleave(_ref) {\n      var currentTarget = _ref.currentTarget;\n      this.tipBox.remove();\n      currentTarget.removeEventListener('mouseleave', this.onmouseleave);\n      currentTarget.removeEventListener('mousemove', this.onMouseMove);\n    }\n  }, {\n    key: \"onmouse\",\n    value: function onmouse(_ref2) {\n      var currentTarget = _ref2.currentTarget;\n      this.criarToll(currentTarget);\n      currentTarget.addEventListener('mousemove', this.onMouseMove);\n      currentTarget.addEventListener('mouseleave', this.onmouseleave);\n    }\n  }, {\n    key: \"addTooltipEvents\",\n    value: function addTooltipEvents() {\n      var _this = this;\n\n      this.tooltip.forEach(function (item) {\n        item.addEventListener('mouseover', _this.onmouse);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.tooltip.length) {\n        this.addTooltipEvents();\n      }\n\n      return this;\n    }\n  }]);\n\n  return ToolTip;\n}();\n\n\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modulo/tooltip.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\n\nfunction _regeneratorRuntime() {\n  \"use strict\";\n  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return exports;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var exports = {},\n      Op = Object.prototype,\n      hasOwn = Op.hasOwnProperty,\n      $Symbol = \"function\" == typeof Symbol ? Symbol : {},\n      iteratorSymbol = $Symbol.iterator || \"@@iterator\",\n      asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\",\n      toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    return Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), obj[key];\n  }\n\n  try {\n    define({}, \"\");\n  } catch (err) {\n    define = function define(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,\n        generator = Object.create(protoGenerator.prototype),\n        context = new Context(tryLocsList || []);\n    return generator._invoke = function (innerFn, self, context) {\n      var state = \"suspendedStart\";\n      return function (method, arg) {\n        if (\"executing\" === state) throw new Error(\"Generator is already running\");\n\n        if (\"completed\" === state) {\n          if (\"throw\" === method) throw arg;\n          return doneResult();\n        }\n\n        for (context.method = method, context.arg = arg;;) {\n          var delegate = context.delegate;\n\n          if (delegate) {\n            var delegateResult = maybeInvokeDelegate(delegate, context);\n\n            if (delegateResult) {\n              if (delegateResult === ContinueSentinel) continue;\n              return delegateResult;\n            }\n          }\n\n          if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) {\n            if (\"suspendedStart\" === state) throw state = \"completed\", context.arg;\n            context.dispatchException(context.arg);\n          } else \"return\" === context.method && context.abrupt(\"return\", context.arg);\n          state = \"executing\";\n          var record = tryCatch(innerFn, self, context);\n\n          if (\"normal\" === record.type) {\n            if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue;\n            return {\n              value: record.arg,\n              done: context.done\n            };\n          }\n\n          \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg);\n        }\n      };\n    }(innerFn, self, context), generator;\n  }\n\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n\n  exports.wrap = wrap;\n  var ContinueSentinel = {};\n\n  function Generator() {}\n\n  function GeneratorFunction() {}\n\n  function GeneratorFunctionPrototype() {}\n\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n  var getProto = Object.getPrototypeOf,\n      NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      define(prototype, method, function (arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n\n      if (\"throw\" !== record.type) {\n        var result = record.arg,\n            value = result.value;\n        return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) {\n          invoke(\"next\", value, resolve, reject);\n        }, function (err) {\n          invoke(\"throw\", err, resolve, reject);\n        }) : PromiseImpl.resolve(value).then(function (unwrapped) {\n          result.value = unwrapped, resolve(result);\n        }, function (error) {\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n\n      reject(record.arg);\n    }\n\n    var previousPromise;\n\n    this._invoke = function (method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function (resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n    };\n  }\n\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n\n    if (undefined === method) {\n      if (context.delegate = null, \"throw\" === context.method) {\n        if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel;\n        context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n    if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel;\n    var info = record.arg;\n    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel);\n  }\n\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\", delete record.arg, entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);\n  }\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) return iteratorMethod.call(iterable);\n      if (\"function\" == typeof iterable.next) return iterable;\n\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n            next = function next() {\n          for (; ++i < iterable.length;) {\n            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;\n          }\n\n          return next.value = undefined, next.done = !0, next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    return {\n      next: doneResult\n    };\n  }\n\n  function doneResult() {\n    return {\n      value: undefined,\n      done: !0\n    };\n  }\n\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) {\n    var ctor = \"function\" == typeof genFun && genFun.constructor;\n    return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name));\n  }, exports.mark = function (genFun) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun;\n  }, exports.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    void 0 === PromiseImpl && (PromiseImpl = Promise);\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\n    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () {\n    return this;\n  }), define(Gp, \"toString\", function () {\n    return \"[object Generator]\";\n  }), exports.keys = function (object) {\n    var keys = [];\n\n    for (var key in object) {\n      keys.push(key);\n    }\n\n    return keys.reverse(), function next() {\n      for (; keys.length;) {\n        var key = keys.pop();\n        if (key in object) return next.value = key, next.done = !1, next;\n      }\n\n      return next.done = !0, next;\n    };\n  }, exports.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(skipTempReset) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {\n        \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);\n      }\n    },\n    stop: function stop() {\n      this.done = !0;\n      var rootRecord = this.tryEntries[0].completion;\n      if (\"throw\" === rootRecord.type) throw rootRecord.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(exception) {\n      if (this.done) throw exception;\n      var context = this;\n\n      function handle(loc, caught) {\n        return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i],\n            record = entry.completion;\n        if (\"root\" === entry.tryLoc) return handle(\"end\");\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\"),\n              hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n          } else {\n            if (!hasFinally) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);\n      var record = finallyEntry ? finallyEntry.completion : {};\n      return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);\n    },\n    complete: function complete(record, afterLoc) {\n      if (\"throw\" === record.type) throw record.arg;\n      return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;\n    },\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;\n      }\n    },\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n\n          if (\"throw\" === record.type) {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n\n          return thrown;\n        }\n      }\n\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      return this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel;\n    }\n  }, exports;\n}\n\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://site-animais-fantasticos/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\n\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://site-animais-fantasticos/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://site-animais-fantasticos/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://site-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://site-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://site-animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/js.js");
/******/ 	
/******/ })()
;