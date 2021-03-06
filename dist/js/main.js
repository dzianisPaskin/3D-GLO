/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_dots__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dots */ \"./modules/dots.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"15 july 2022\")\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_dots__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\".portfolio-content\",\".portfolio-item\",\".dot\")\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(100)\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst calc = (price = 100) => {\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const calcType = document.querySelector(\".calc-type\");\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const total = document.getElementById(\"total\");\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10;\r\n    }\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue =\r\n        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n\r\n    \r\n    \r\n    // if (\r\n    //   calcType.value != \"\" &&\r\n    //   calcSquare.value != \"\" &&\r\n    //   calcCount.value != \"\" &&\r\n    //   calcDay.value != \"\"\r\n    // ) {\r\n    //   let timeInterval = 1000 * 2 / totalValue\r\n    //   let i = 0;\r\n    //   const intervalTotal = setInterval(() => {\r\n    //     if (i <= totalValue) {\r\n    //       total.textContent = i;\r\n    //       i++;\r\n    //     } else if (i > totalValue) {\r\n    //         clearInterval(intervalTotal);\r\n    //         total.textContent = totalValue;\r\n    //     }\r\n    //   }, timeInterval);\r\n    // }\r\n\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 1500,\r\n      timing(timeFraction) {\r\n        return timeFraction;\r\n      },\r\n      draw(progress) {\r\n        total.textContent = Math.trunc(totalValue * progress)\r\n        total.style.opacity = progress\r\n\r\n      }\r\n    });\r\n  };\r\n\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (\r\n      e.target === calcType ||\r\n      e.target === calcSquare ||\r\n      e.target === calcCount ||\r\n      e.target === calcDay\r\n    ) {\r\n      countCalc();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/dots.js":
/*!*************************!*\
  !*** ./modules/dots.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dots = () => {\r\n  const slides = document.querySelectorAll(\".portfolio-item\");\r\n  const listDots = document.querySelector('.portfolio-dots')\r\n\r\n    slides.forEach(() => {\r\n      const dot = document.createElement('li')\r\n      dot.className = 'dot'\r\n      listDots.append(dot)\r\n  })\r\n  \r\n  \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dots);\n\n//# sourceURL=webpack:///./modules/dots.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\r\n\r\nconst animate = ({timing, draw, duration}) => {\r\n\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction ???????????????????? ???? 0 ???? 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // ???????????????????? ???????????????? ?????????????????? ????????????????\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // ???????????????????? ????\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  // const menuBtn = document.querySelector(\".menu\");\r\n  // const menu = document.querySelector(\"menu\");\r\n  // const main = document.querySelector('body')\r\n\r\n  // const toggleMenu = () => {\r\n  //   menu.classList.toggle('active-menu')\r\n  // };\r\n\r\n  // menu.addEventListener('click', (e) => {\r\n  //   if(e.target.classList.contains('close-btn') || e.target.classList.contains('close-link')) {\r\n  //     toggleMenu()\r\n  //   }\r\n  // })\r\n\r\n  // menuBtn.addEventListener(\"click\", toggleMenu);\r\n\r\n  const menu = document.querySelector(\"menu\");\r\n  const body = document.querySelector(\"body\");\r\n  let showMenu = 'false';\r\n\r\n  body.addEventListener(\"click\", (e) => {\r\n    \r\n    if (e.target.closest(\".menu\")) {\r\n      menu.classList.toggle(\"active-menu\");\r\n      showMenu = 'true';\r\n    } else if (\r\n      e.target.classList.contains(\"close-btn\") ||\r\n      e.target.classList.contains(\"close-link\")\r\n    ) {\r\n      menu.classList.toggle(\"active-menu\");\r\n      showMenu = 'false';\r\n    } else if (!e.target.classList.contains(\"active-menu\") && showMenu == 'true') {\r\n      console.log(e.target)\r\n      menu.classList.toggle(\"active-menu\");\r\n      showMenu = 'false';\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const modalForm = modal.querySelector(\".popup-content\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n\r\n\r\n  \r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      if (document.documentElement.clientWidth > 768) {\r\n        modal.style.display = \"block\";\r\n\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 1000,\r\n          timing(timeFraction) {\r\n            return timeFraction;\r\n          },\r\n          draw(progress) {\r\n            \r\n            modalForm.style.opacity = progress\r\n            modalForm.style.left = (40 * progress) + \"%\"\r\n          }\r\n        });\r\n      } else {\r\n        modal.style.display = \"block\";\r\n      }\r\n    });\r\n  });\r\n\r\n  modal.addEventListener('click', (e) => {\r\n    if(!e.target.closest('.popup-content')||e.target.classList.contains('popup-close')) {\r\n      modal.style.display = 'none'\r\n    }\r\n  })\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n  const menuItems = document.querySelectorAll(\"ul>li>a\");\r\n  const mainItem = document.querySelector(`a[href='#service-block']`)\r\n\r\n  mainItem.addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n    const blockID = mainItem.getAttribute('href')\r\n    document.querySelector(blockID).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start'\r\n    })\r\n  })\r\n\r\n  menuItems.forEach(anchor => {\r\n    anchor.addEventListener('click', function(e) {\r\n      e.preventDefault()\r\n\r\n      const blockID = anchor.getAttribute('href');\r\n\r\n      document.querySelector(blockID).scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n      })\r\n    })\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (classSlider,classSlides, classDots) => {\r\n\r\n  if (!document.querySelector(classSlider)) {\r\n    return\r\n  } else if(!document.querySelectorAll(classSlides)) {\r\n    return\r\n  } else if (!document.querySelectorAll(classDots)) {\r\n    return\r\n  }\r\n  \r\n  const sliderBlock = document.querySelector(classSlider);\r\n  const slides = document.querySelectorAll(classSlides);\r\n  const dots = document.querySelectorAll(classDots);\r\n\r\n\r\n  const timeInterval = 2000\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n    currentSlide++;\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  };\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n\r\n    if (e.target.matches(\"#arrow-right\")) {\r\n      currentSlide++;\r\n    } else if (e.target.matches(\"#arrow-left\")) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains(\"dot\")) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseenter\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseleave\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        startSlide(timeInterval)\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector('.service-header')\r\n  const tabs = document.querySelectorAll('.service-header-tab')\r\n  const tabContent = document.querySelectorAll('.service-tab')\r\n\r\n  tabPanel.addEventListener('click', (e) => {\r\n\r\n    if (e.target.closest('.service-header-tab')) {\r\n      const tabBtn = e.target.closest('.service-header-tab')\r\n      tabs.forEach((tab, ind) => {\r\n        if(tab === tabBtn) {\r\n          tab.classList.add('active')\r\n          tabContent[ind].classList.remove('d-none')\r\n        } else {\r\n          tab.classList.remove('active')\r\n          tabContent[ind].classList.add('d-none')\r\n        }\r\n      })\r\n    }\r\n  })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine) => {\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadLine).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return { timeRemaining, hours, minutes, seconds };\r\n  };\r\n\r\n  const updateClock = setInterval(function () {\r\n    let getTime = getTimeRemaining();\r\n    \r\n    if(getTime.hours < 10) getTime.hours = '0' + getTime.hours\r\n    if(getTime.minutes < 10) getTime.minutes = '0' + getTime.minutes\r\n    if(getTime.seconds < 10) getTime.seconds = '0' + getTime.seconds\r\n\r\n    timerHours.textContent = getTime.hours;\r\n    timerMinutes.textContent = getTime.minutes;\r\n    timerSeconds.textContent = getTime.seconds;\r\n\r\n    if (getTime.timeRemaining <= 0) {\r\n      timerHours.textContent = \"00\";\r\n      timerMinutes.textContent = \"00\";\r\n      timerSeconds.textContent = \"00\";\r\n      clearInterval(updateClock);\r\n    }\r\n  }, 1000);\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n  const form1 = document.querySelector(\"#form1\");\r\n  const mainName = form1.querySelector(\"#form1-name\");\r\n  const mainEmail = form1.querySelector(\"#form1-email\");\r\n  const mainPhone = form1.querySelector(\"#form1-phone\");\r\n\r\n  const form2 = document.querySelector(\"#form2\");\r\n  const topName = form2.querySelector(\"#form2-name\");\r\n  const topEmail = form2.querySelector(\"#form2-email\");\r\n  const topPhone = form2.querySelector(\"#form2-phone\");\r\n\r\n  const form3 = document.querySelector(\"#form3\");\r\n  const formName = form3.querySelector(\"#form3-name\");\r\n  const formEmail = form3.querySelector(\"#form3-email\");\r\n  const formPhone = form3.querySelector(\"#form3-phone\");\r\n\r\n  \r\n\r\n  mainName.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^??-??\\s\\-]/i, \"\");\r\n  });\r\n  mainEmail.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^\\w\\@\\-\\_\\.\\!\\~\\*\\']/, \"\");\r\n  });\r\n  mainPhone.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^\\d\\(\\)]/i, \"\");\r\n  });\r\n  topName.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^??-??\\s\\-]/i, \"\");\r\n  });\r\n  topEmail.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^\\w\\@\\-\\_\\.\\!\\~\\*\\']/, \"\");\r\n  });\r\n  topPhone.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^\\d\\(\\)]/i, \"\");\r\n  });\r\n  formName.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^??-??\\s\\-]/i, \"\");\r\n  });\r\n  formEmail.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^\\w\\@\\-\\_\\.\\!\\~\\*\\']/, \"\");\r\n  });\r\n  formPhone.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^\\d\\(\\)]/i, \"\");\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\r\n\n\n//# sourceURL=webpack:///./modules/validation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;