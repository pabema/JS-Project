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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n/* harmony import */ var _views_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/menu.js */ \"./src/views/menu.js\");\n\r\n\r\n\r\n(() => {\r\n\r\n    document.addEventListener(\"DOMContentLoaded\", () => {\r\n\r\n        let main = document.querySelector('#main');\r\n\r\n        let header = document.createElement('div');\r\n        header.classList.add('header');\r\n        header.id = 'header';\r\n\r\n        header.append((0,_views_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuTemplate)());\r\n        main.append(header);\r\n\r\n        let contenedor = document.createElement('div');\r\n        contenedor.classList.add('container');\r\n        contenedor.id = 'container';\r\n\r\n        main.append(contenedor);\r\n        \r\n        window.location.hash = '#/';\r\n\r\n        (0,_router_js__WEBPACK_IMPORTED_MODULE_0__.route)(window.location.hash);\r\n\r\n        window.addEventListener('hashchange', () => {\r\n            (0,_router_js__WEBPACK_IMPORTED_MODULE_0__.route)(window.location.hash);\r\n            header.innerHTML = \"\";\r\n            header.append((0,_views_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuTemplate)());\r\n        })\r\n\r\n    })\r\n\r\n})();\n\n//# sourceURL=webpack://js-project/./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutTemplate\": () => (/* binding */ aboutTemplate)\n/* harmony export */ });\n\r\n\r\nlet aboutTemplate = \r\n\r\ndocument.createElement(\"div\");\r\naboutTemplate.id = 'about';\r\naboutTemplate.innerHTML = \r\n`\r\n<h1>About page</h1>\r\n`\n\n//# sourceURL=webpack://js-project/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactTemplate\": () => (/* binding */ contactTemplate)\n/* harmony export */ });\n\r\n\r\nlet contactTemplate = \r\n\r\ndocument.createElement(\"div\");\r\ncontactTemplate.id = \"contact\";\r\ncontactTemplate.innerHTML = \r\n`\r\n<!--Section: Contact v.2-->\r\n<br>\r\n<section class=\"\">\r\n  <div class=\"mask d-flex align-items-center gradient-custom-3\">\r\n    <div class=\"container\">\r\n      <div class=\"row d-flex justify-content-center align-items-center\">\r\n        <div class=\"col-12 col-md-9 col-lg-7 col-xl-6\">\r\n          <div class=\"card bg-dark text-white\" style=\"border-radius: 1rem;\">\r\n            <div class=\"card-body p-5 text-center text-white\">\r\n                <!--Section heading-->\r\n                <h2 class=\"h1-responsive font-weight-bold text-center my-4\">Contact us</h2>\r\n                <!--Section description-->\r\n                <p class=\"text-center w-responsive mx-auto mb-5\">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within\r\n                    a matter of hours to help you.</p>\r\n                <div class=\"row\">\r\n                    <!--Grid column-->\r\n                        <form>\r\n                            <!--Grid row-->\r\n                            <div class=\"row\">\r\n                                <!--Grid column-->\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"md-form mb-0\">\r\n                                        <label for=\"name\" class=\"\">Your name</label>\r\n                                        <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <!--Grid column-->\r\n                                <!--Grid column-->\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"md-form mb-0\">\r\n                                        <label for=\"email\" class=\"\">Your email</label>\r\n                                        <input type=\"text\" id=\"email\" name=\"email\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <!--Grid column-->\r\n                            </div>\r\n                            <br>\r\n                            <!--Grid row-->\r\n                            <!--Grid row-->\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"md-form mb-0\">\r\n                                        <label for=\"subject\" class=\"\">Subject</label>\r\n                                        <input type=\"text\" id=\"subject\" name=\"subject\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!--Grid row-->\r\n                            <br>\r\n                            <!--Grid row-->\r\n                            <div class=\"row\">\r\n                                <!--Grid column-->\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"md-form\">\r\n                                        <label for=\"message\">Your message</label>\r\n                                        <textarea type=\"text\" id=\"message\" name=\"message\" rows=\"2\" class=\"form-control md-textarea\"></textarea>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n                            <!--Grid row-->\r\n                            <div class=\"d-flex justify-content-center\">\r\n                                <button id=\"signUpBtn\" class=\"btn btn-outline-light btn-lg px-5\">Send</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</section>\r\n<!--Section: Contact v.2-->\r\n`;\n\n//# sourceURL=webpack://js-project/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataTemplate\": () => (/* binding */ dataTemplate),\n/* harmony export */   \"generateHome\": () => (/* binding */ generateHome)\n/* harmony export */ });\n/* harmony import */ var _service_requests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/requests.js */ \"./src/service/requests.js\");\n\r\n\r\n\r\n\r\nconst token = localStorage.getItem(\"access_token\");\r\n\r\nfunction dataTemplate(dato){\r\n\r\n    let dataDiv = document.createElement(\"div\");\r\n    dataDiv.innerHTML += \r\n    `\r\n    <div class=\"container\">${dato.datos}</div>\r\n    `;\r\n\r\nreturn dataDiv;\r\n\r\n}\r\n\r\nfunction generateHome(){\r\n\r\n    let homeTemplate = document.createElement(\"div\");\r\n    homeTemplate.id = 'home';\r\n    homeTemplate.innerHTML = \r\n    `\r\n    <h1>Welcome!!</h1>\r\n    `;\r\n\r\n\r\n\r\nreturn homeTemplate;\r\n\r\n}\r\n\r\nwindow.addEventListener('hashchange', () => {\r\n    if(window.location.hash == '#/' && token != \"undefined\"){\r\n        (0,_service_requests_js__WEBPACK_IMPORTED_MODULE_0__.datosServidor)().then(serverData => {\r\n    \r\n            //console.log(datos);\r\n        \r\n            let contenedor = document.querySelector(\"#container\");\r\n            console.log(contenedor);\r\n        \r\n            let cervesa = serverData.map(dato => {\r\n                console.log(dato.datos);\r\n                contenedor.append(dataTemplate(dato));            \r\n            })\r\n        \r\n            contenedor.append(cervesa);\r\n        \r\n        })\r\n    }\r\n    \r\n})\r\n    \r\n\r\n    \r\n\r\n\r\n\n\n//# sourceURL=webpack://js-project/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/login.js":
/*!****************************!*\
  !*** ./src/pages/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginForm\": () => (/* binding */ loginForm)\n/* harmony export */ });\n/* harmony import */ var _service_users_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/users.js */ \"./src/service/users.js\");\n\r\n\r\n\r\n\r\nfunction loginForm(){ \r\n\r\n\r\n\r\nlet loginTemplate = document.createElement(\"div\");\r\n\r\n\r\nloginTemplate.id = 'login';\r\nloginTemplate.innerHTML = \r\n`\r\n<form>\r\n<section class=\"vh-100 gradient-custom\">\r\n  <div class=\"container py-5 h-30\">\r\n    <div class=\"row d-flex justify-content-center align-items-center h-80\">\r\n      <div class=\"col-12 col-md-8 col-lg-6 col-xl-5\">\r\n        <div class=\"card bg-dark text-white\" style=\"border-radius: 1rem;\">\r\n          <div class=\"card-body p-5 text-center\">\r\n\r\n            <div class=\"mb-md-5 mt-md-4 pb-5\">\r\n\r\n              <h2 class=\"fw-bold mb-2 text-uppercase\">Login</h2>\r\n              <p class=\"text-white-50 mb-5\">Please enter your login and password!</p>\r\n\r\n              <div class=\"form-outline form-white mb-4\">\r\n                <label class=\"form-label\" for=\"email\">Email</label>\r\n                <input type=\"email\" id=\"email\" class=\"form-control form-control-lg\" />\r\n              </div>\r\n\r\n              <div class=\"form-outline form-white mb-4\">\r\n                <label class=\"form-label\" for=\"password\">Password</label>\r\n                <input type=\"password\" id=\"password\" class=\"form-control form-control-lg\" value=\"\"/>\r\n              </div>\r\n\r\n              <button class=\"btn btn-outline-light btn-lg px-5\" id=\"loginBtn\" type=\"submit\">Login</button>\r\n            </div>\r\n            <div>\r\n              <p class=\"mb-0\">Don't have an account? <a href=\"#/signUp\" class=\"text-white-50 fw-bold\">Sign Up</a></p>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n</form>\r\n`;\r\n\r\nloginTemplate.querySelector('#loginBtn').addEventListener('click', async ()=>{\r\n  let email = loginTemplate.querySelector('#email').value;\r\n  let password = loginTemplate.querySelector('#password').value;\r\n  await (0,_service_users_js__WEBPACK_IMPORTED_MODULE_0__.loginUser)(email, password);\r\n  console.log(\"Email\" + email + \"logueado\");\r\n});\r\n\r\nloginTemplate.addEventListener(\"submit\", async ()=>{\r\n  let email = loginTemplate.querySelector('#email').value;\r\n  let password = loginTemplate.querySelector('#password').value;\r\n  await (0,_service_users_js__WEBPACK_IMPORTED_MODULE_0__.loginUser)(email, password);\r\n  console.log(\"Email\" + email + \"logueado\");\r\n});\r\n\r\nreturn loginTemplate;\r\n\r\n}\n\n//# sourceURL=webpack://js-project/./src/pages/login.js?");

/***/ }),

/***/ "./src/pages/signUp.js":
/*!*****************************!*\
  !*** ./src/pages/signUp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signUpForm\": () => (/* binding */ signUpForm)\n/* harmony export */ });\n/* harmony import */ var _service_users_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/users.js */ \"./src/service/users.js\");\n\r\n\r\n\r\n\r\nfunction signUpForm(){\r\n\r\nlet signUpTemplate = document.createElement(\"div\");\r\nsignUpTemplate.di = 'signUp';\r\nsignUpTemplate.innerHTML = \r\n`\r\n<br>\r\n<section class=\"\">\r\n  <div class=\"mask d-flex align-items-center gradient-custom-3\">\r\n    <div class=\"container\">\r\n      <div class=\"row d-flex justify-content-center align-items-center\">\r\n        <div class=\"col-12 col-md-9 col-lg-7 col-xl-6\">\r\n          <div class=\"card bg-dark text-white\" style=\"border-radius: 1rem;\">\r\n            <div class=\"card-body p-5 text-center text-white\">\r\n              <h2 class=\"fw-bold mb-2 text-uppercase text-white\">Create an account</h2>\r\n\r\n              <form>\r\n\r\n                <div class=\"form-outline form-white mb-4\">\r\n                  <input type=\"text\" id=\"form3Example1cg\" class=\"form-control form-control-lg\" />\r\n                  <label class=\"form-label\" for=\"form3Example1cg\">Your Name</label>\r\n                </div>\r\n\r\n                <div class=\"form-outline form-white mb-4\">\r\n                  <input type=\"email\" id=\"email\" class=\"form-control form-control-lg\" />\r\n                  <label class=\"form-label\" for=\"email\">Your Email</label>\r\n                </div>\r\n\r\n                <div class=\"form-outline form-white mb-4\">\r\n                  <input type=\"password\" id=\"password\" class=\"form-control form-control-lg\" />\r\n                  <label class=\"form-label\" for=\"password\">Password</label>\r\n                </div>\r\n\r\n                <div class=\"form-outline form-white mb-4\">\r\n                  <input type=\"password\" id=\"form3Example4cdg\" class=\"form-control form-control-lg\" />\r\n                  <label class=\"form-label\" for=\"form3Example4cdg\">Repeat your password</label>\r\n                </div>\r\n\r\n                <div class=\"d-flex justify-content-center\">\r\n                  <button id=\"signUpBtn\" class=\"btn btn-outline-light btn-lg px-5\">Register</button>\r\n                </div>\r\n              </form>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n`;\r\n\r\nsignUpTemplate.querySelector('#signUpBtn').addEventListener('click', async ()=>{\r\n  let email = signUpTemplate.querySelector('#email').value;\r\n  let password = signUpTemplate.querySelector('#password').value;\r\n  let dataSignUp = await (0,_service_users_js__WEBPACK_IMPORTED_MODULE_0__.registerUser)(email, password);\r\n  console.log(dataSignUp);\r\n})\r\n\r\nreturn signUpTemplate;\r\n\r\n}\n\n//# sourceURL=webpack://js-project/./src/pages/signUp.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"route\": () => (/* binding */ route)\n/* harmony export */ });\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login.js */ \"./src/pages/login.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about.js */ \"./src/pages/about.js\");\n/* harmony import */ var _pages_signUp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/signUp.js */ \"./src/pages/signUp.js\");\n/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact.js */ \"./src/pages/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction route(ruta){\r\n\r\n    //const SUPABASE_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2eHZlb2pib253bGNvdHlyd25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc2NjM0NDAsImV4cCI6MTk4MzIzOTQ0MH0.ZelMGqBQ5ceMuXW10fxXKFhy_Lro0objadlBknAvk3s\";\r\n    const token = localStorage.getItem(\"access_token\");\r\n\r\n    console.log(ruta);\r\n\r\n    let body = document.querySelector('#container');\r\n    \r\n    switch(ruta){\r\n        case('#/'):\r\n            body.innerHTML = '';\r\n            console.log(localStorage.getItem(\"access_token\"));\r\n            if(token != null && token != \"undefined\"){\r\n                body.append((0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__.generateHome)());\r\n            }\r\n            break;\r\n        case('#/login'):\r\n            body.innerHTML = '';\r\n            body.append((0,_pages_login_js__WEBPACK_IMPORTED_MODULE_1__.loginForm)());\r\n            break;\r\n        case('#/about'):\r\n            body.innerHTML = '';\r\n            if(token != null && token != \"undefined\"){\r\n                body.append(_pages_about_js__WEBPACK_IMPORTED_MODULE_2__.aboutTemplate);\r\n            }\r\n            break;\r\n        case('#/signUp'):\r\n            body.innerHTML = '';\r\n            body.append((0,_pages_signUp_js__WEBPACK_IMPORTED_MODULE_3__.signUpForm)());\r\n            break;\r\n        case('#/contact'):\r\n            body.innerHTML = '';\r\n            if(token != null && token != \"undefined\"){\r\n                body.append(_pages_contact_js__WEBPACK_IMPORTED_MODULE_4__.contactTemplate);\r\n            }\r\n            break;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://js-project/./src/router.js?");

/***/ }),

/***/ "./src/service/requests.js":
/*!*********************************!*\
  !*** ./src/service/requests.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"datosServidor\": () => (/* binding */ datosServidor),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"signUp\": () => (/* binding */ signUp)\n/* harmony export */ });\n\r\n\r\nconst SUPABASE_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2eHZlb2pib253bGNvdHlyd25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc2NjM0NDAsImV4cCI6MTk4MzIzOTQ0MH0.ZelMGqBQ5ceMuXW10fxXKFhy_Lro0objadlBknAvk3s\";\r\nlet access_token = '';\r\nconst headers = {\r\n    \"apiKey\": SUPABASE_KEY,\r\n    \"Content-Type\": \"application/json\",\r\n};\r\nconst getHeaders = {\r\n    \"apiKey\": SUPABASE_KEY,\r\n    \"Authorization\": \"Bearer \" + access_token,\r\n}\r\n\r\nasync function request(url, method, headers, body){\r\n    let response = await fetch(url,{\r\n        method,\r\n        headers,\r\n        body: JSON.stringify(body)\r\n    });\r\n    let data = await response.json();\r\n    return data;\r\n}\r\n\r\nasync function login(email, password){\r\n    let url = 'https://ivxveojbonwlcotyrwnq.supabase.co/auth/v1/token?grant_type=password';\r\n    let data = await request(url, 'post', headers, {email, password});\r\n    access_token = SUPABASE_KEY;\r\n    return data;\r\n}\r\n\r\nasync function signUp(email, password){\r\n    let url = 'https://ivxveojbonwlcotyrwnq.supabase.co/auth/v1/signup';\r\n    let data = await request(url, 'post', headers, {email, password});\r\n    return data;\r\n}\r\n\r\nasync  function datosServidor(){\r\n    let url = 'https://ivxveojbonwlcotyrwnq.supabase.co/rest/v1/Prueba';\r\n    let data = await request(url, 'get', getHeaders)\r\n    return data;\r\n}\n\n//# sourceURL=webpack://js-project/./src/service/requests.js?");

/***/ }),

/***/ "./src/service/users.js":
/*!******************************!*\
  !*** ./src/service/users.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginUser\": () => (/* binding */ loginUser),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"registerUser\": () => (/* binding */ registerUser)\n/* harmony export */ });\n/* harmony import */ var _requests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests.js */ \"./src/service/requests.js\");\n\r\n\r\n\r\n\r\nasync function loginUser(email, password){\r\n    (0,_requests_js__WEBPACK_IMPORTED_MODULE_0__.login)(email, password).then(dataLogin=>{\r\n        localStorage.setItem(\"access_token\", dataLogin.access_token);\r\n        localStorage.setItem(\"user\", email);\r\n        console.log(\"login\");\r\n        console.log(localStorage);\r\n    });\r\n}\r\n\r\nfunction registerUser(email, password){\r\n    (0,_requests_js__WEBPACK_IMPORTED_MODULE_0__.signUp)(email,password).then(dataRegister=>{\r\n        console.log(dataRegister);\r\n    });\r\n}\r\n\r\nfunction logout(){\r\n    localStorage.removeItem('access_token');\r\n    console.log(\"logout\");\r\n    console.log(localStorage);\r\n}\n\n//# sourceURL=webpack://js-project/./src/service/users.js?");

/***/ }),

/***/ "./src/views/menu.js":
/*!***************************!*\
  !*** ./src/views/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuTemplate\": () => (/* binding */ menuTemplate)\n/* harmony export */ });\n/* harmony import */ var _service_users_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/users.js */ \"./src/service/users.js\");\n\r\n\r\n\r\n\r\nfunction menuTemplate(){\r\n\r\nlet navMenu = document.createElement(\"div\");\r\nnavMenu.id = 'header';\r\nnavMenu.innerHTML = \r\n`\r\n<nav class=\"navbar navbar-dark navbar-expand-lg bg-dark\">\r\n<div class=\"container-fluid\">\r\n  <a class=\"navbar-brand\" href=\"#\">PornHub</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#/\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#/about\">About</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#/contact\">Contact</a>\r\n      </li>\r\n      <li class=\"nav-item\" id=\"login\">\r\n        \r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav\">\r\n      <form class=\"d-flex text-light\">\r\n        <li class=\"nav-item\" id=\"user\">\r\n          \r\n        </li>\r\n        <li class=\"nav-item\" id=\"logout\">\r\n          \r\n        </li>\r\n      </form>\r\n    </ul>\r\n  </div>\r\n</div>\r\n</nav>\r\n`;\r\n\r\n\r\nlet logoutBtn = navMenu.querySelector(\"#logout\");\r\nlet loginBtn = navMenu.querySelector(\"#login\");\r\nlet user = navMenu.querySelector('#user');\r\n\r\nif(localStorage.getItem(\"access_token\") != null){\r\n  logoutBtn.innerHTML = `<a class=\"nav-link\" href=\"#/\">Logout</a>`;\r\n  loginBtn.innerHTML = \"\";\r\n  user.innerHTML = `<a class=\"nav-link\">${localStorage.getItem('user')}</a>`;\r\n}else{\r\n  logoutBtn.innerHTML = \"\";\r\n  loginBtn.innerHTML = `<a class=\"nav-link\" href=\"#/login\">Login</a>`;\r\n  user.innerHTML = \"\";\r\n}\r\n\r\nlogoutBtn.addEventListener('click', ()=>{\r\n  location.reload();\r\n  (0,_service_users_js__WEBPACK_IMPORTED_MODULE_0__.logout)();\r\n  localStorage.removeItem('user');\r\n})\r\n\r\nreturn navMenu;\r\n\r\n}\n\n//# sourceURL=webpack://js-project/./src/views/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;