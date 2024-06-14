function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./flights/flights.module": "./src/app/flights/flights.module.ts"
    };

    function webpackAsyncContext(req) {
      return Promise.resolve().then(function () {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        var id = map[req];
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ps": "./node_modules/moment/locale/ar-ps.js",
      "./ar-ps.js": "./node_modules/moment/locale/ar-ps.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku-kmr": "./node_modules/moment/locale/ku-kmr.js",
      "./ku-kmr.js": "./node_modules/moment/locale/ku-kmr.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _authentification_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentification/login/login.component */
    "./src/app/authentification/login/login.component.ts");
    /* harmony import */


    var _authentification_guards_authentification_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentification/guards/authentification.guard */
    "./src/app/authentification/guards/authentification.guard.ts");
    /* harmony import */


    var _authentification_guards_flights_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./authentification/guards/flights.guard */
    "./src/app/authentification/guards/flights.guard.ts");
    /* harmony import */


    var _authentification_authentification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authentification/authentification.component */
    "./src/app/authentification/authentification.component.ts");
    /* harmony import */


    var _authentification_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./authentification/registration/registration.component */
    "./src/app/authentification/registration/registration.component.ts");
    /* harmony import */


    var _authentification_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./authentification/forgot-password/forgot-password.component */
    "./src/app/authentification/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _exceptions_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./exceptions/page-not-found/page-not-found.component */
    "./src/app/exceptions/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _exceptions_exception_exception_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./exceptions/exception/exception.component */
    "./src/app/exceptions/exception/exception.component.ts");
    /* harmony import */


    var _authentification_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./authentification/reset-password/reset-password.component */
    "./src/app/authentification/reset-password/reset-password.component.ts");
    /* harmony import */


    var _authentification_confirm_registration_confirm_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./authentification/confirm-registration/confirm-registration.component */
    "./src/app/authentification/confirm-registration/confirm-registration.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'flights/search',
      pathMatch: 'full'
    }, {
      path: 'authentification',
      component: _authentification_authentification_component__WEBPACK_IMPORTED_MODULE_5__["AuthentificationComponent"],
      canActivate: [_authentification_guards_authentification_guard__WEBPACK_IMPORTED_MODULE_3__["AuthentificationGuard"]],
      children: [{
        path: 'login',
        component: _authentification_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'register',
        component: _authentification_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"]
      }, {
        path: 'forgot-password',
        component: _authentification_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"]
      }, {
        path: 'reset-password',
        component: _authentification_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"]
      }, {
        path: 'registration-confirm',
        component: _authentification_confirm_registration_confirm_registration_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmRegistrationComponent"]
      }]
    }, {
      path: 'flights',
      loadChildren: './flights/flights.module#FlightsModule',
      canActivate: [_authentification_guards_flights_guard__WEBPACK_IMPORTED_MODULE_4__["FlightsGuard"]],
      canLoad: [_authentification_guards_flights_guard__WEBPACK_IMPORTED_MODULE_4__["FlightsGuard"]]
    }, {
      path: 'exception',
      component: _exceptions_exception_exception_component__WEBPACK_IMPORTED_MODULE_9__["ExceptionComponent"]
    }, {
      path: '**',
      component: _exceptions_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_models_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/models/theme */
    "./src/app/shared/models/theme.ts");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_theme_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/theme/theme.service */
    "./src/app/shared/theme/theme.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(translateService, themeService, sharedService, dateAdapter) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.translateService = translateService;
        this.themeService = themeService;
        this.sharedService = sharedService;
        this.dateAdapter = dateAdapter;
        this.title = 'flight-app-front';
        this.subscriptions = [];
        this.subscriptions.push(this.sharedService.selectedLanguage.subscribe(function (lang) {
          _this.dateAdapter.setLocale(lang);
        }));
        var locale = localStorage.getItem('language');
        this.translateService.use(locale);
      }

      return _createClass(AppComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          var constract = localStorage.getItem('constractType');

          if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(constract)) {
            this.themeService.toggleDefaultTheme();
          } else {
            this.initConstract(constract);
          }

          this.subscriptions.push(this.sharedService.constractType.subscribe(function (constract) {
            _this2.initConstract(constract);
          }));
        }
      }, {
        key: "loadTheme",
        value: function loadTheme(firstcolor, secondcolor, thirdcolor, fourthcolor) {
          var theme = new _shared_models_theme__WEBPACK_IMPORTED_MODULE_1__["Theme"]();
          theme.firstColor = firstcolor;
          theme.secondColor = secondcolor;
          theme.thirdColor = thirdcolor;
          theme.fourthColor = fourthcolor;
          this.themeService.setTheme(theme);
        }
      }, {
        key: "initConstract",
        value: function initConstract(constract) {
          if (constract === 'high') {
            this.loadTheme('#03257A', '#032E99', '#D3D3D3', '#EEEEEE');
          } else if (constract === 'normal') {
            this.loadTheme('#3f51b5', '#336EFF', '#B2CDD7', '#EAF9FF');
          } else {
            this.themeService.toggleDefaultTheme();
          }
        }
      }]);
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_theme_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _shared_theme_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]
        }, {
          type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, HttpLoaderFactory */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_lang_services_lang_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/lang/services/lang.service */
    "./src/app/shared/lang/services/lang.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _flights_flights_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./flights/flights.module */
    "./src/app/flights/flights.module.ts");
    /* harmony import */


    var _portal_portal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./portal/portal.module */
    "./src/app/portal/portal.module.ts");
    /* harmony import */


    var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/locales/fr */
    "./node_modules/@angular/common/locales/fr.js");
    /* harmony import */


    var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _shared_util_dateAdapter_locale_date_adapter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/util/dateAdapter/locale-date-adapter */
    "./src/app/shared/util/dateAdapter/locale-date-adapter.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _authentification_authentification_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./authentification/authentification.module */
    "./src/app/authentification/authentification.module.ts");
    /* harmony import */


    var _exceptions_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./exceptions/page-not-found/page-not-found.component */
    "./src/app/exceptions/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _exceptions_exception_exception_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./exceptions/exception/exception.component */
    "./src/app/exceptions/exception/exception.component.ts");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_12__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_11___default.a);

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
        useValue: 'fr-FR'
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"],
        useClass: _shared_util_dateAdapter_locale_date_adapter__WEBPACK_IMPORTED_MODULE_14__["LocaleDateAdapter"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _flights_flights_module__WEBPACK_IMPORTED_MODULE_9__["FlightsModule"], _portal_portal_module__WEBPACK_IMPORTED_MODULE_10__["PortalModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _authentification_authentification_module__WEBPACK_IMPORTED_MODULE_18__["AuthentificationModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
          useFactory: _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["TranslateLoaderFactory"],
          deps: [_shared_lang_services_lang_service__WEBPACK_IMPORTED_MODULE_7__["LangService"]]
        }
      }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _exceptions_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"], _exceptions_exception_exception_component__WEBPACK_IMPORTED_MODULE_21__["ExceptionComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _flights_flights_module__WEBPACK_IMPORTED_MODULE_9__["FlightsModule"], _portal_portal_module__WEBPACK_IMPORTED_MODULE_10__["PortalModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _authentification_authentification_module__WEBPACK_IMPORTED_MODULE_18__["AuthentificationModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _exceptions_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"], _exceptions_exception_exception_component__WEBPACK_IMPORTED_MODULE_21__["ExceptionComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _flights_flights_module__WEBPACK_IMPORTED_MODULE_9__["FlightsModule"], _portal_portal_module__WEBPACK_IMPORTED_MODULE_10__["PortalModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _authentification_authentification_module__WEBPACK_IMPORTED_MODULE_18__["AuthentificationModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
              useFactory: _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["TranslateLoaderFactory"],
              deps: [_shared_lang_services_lang_service__WEBPACK_IMPORTED_MODULE_7__["LangService"]]
            }
          }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production
          })],
          providers: [{
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
            useValue: 'fr-FR'
          }, {
            provide: _angular_material__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"],
            useClass: _shared_util_dateAdapter_locale_date_adapter__WEBPACK_IMPORTED_MODULE_14__["LocaleDateAdapter"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();

    function HttpLoaderFactory(httpClient) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__["TranslateHttpLoader"](httpClient);
    }
    /***/

  },

  /***/
  "./src/app/authentification/authentification.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/authentification/authentification.component.ts ***!
    \****************************************************************/

  /*! exports provided: AuthentificationComponent */

  /***/
  function srcAppAuthentificationAuthentificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthentificationComponent", function () {
      return AuthentificationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../portal/bot-side/bot-side.component */
    "./src/app/portal/bot-side/bot-side.component.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");

    function AuthentificationComponent_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r1 === "fr_FR" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "lang.french.label") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "lang.english.label"), " ");
      }
    }

    var AuthentificationComponent = /*#__PURE__*/function () {
      function AuthentificationComponent(translateService, sharedService, fb) {
        _classCallCheck(this, AuthentificationComponent);

        this.translateService = translateService;
        this.sharedService = sharedService;
        this.fb = fb;
        translateService.addLangs(['en_US', 'fr_FR']);
      }

      return _createClass(AuthentificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.langs = this.translateService.getLangs();
          this.language = this.fb.group({
            language: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          var toSelect = this.langs.find(function (c) {
            return c == localStorage.getItem('language');
          });
          this.language.get('language').setValue(toSelect);
        }
      }, {
        key: "changeLang",
        value: function changeLang(language) {
          localStorage.setItem('language', language);
          this.translateService.use(language);

          if (language === 'en_US') {
            this.sharedService.selectedLanguage.next('en');
          } else if (language === 'fr_FR') {
            this.sharedService.selectedLanguage.next('fr');
          }
        }
      }]);
    }();

    AuthentificationComponent.ɵfac = function AuthentificationComponent_Factory(t) {
      return new (t || AuthentificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    AuthentificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthentificationComponent,
      selectors: [["app-authentification"]],
      decls: 15,
      vars: 2,
      consts: [["id", "loginHeader"], ["color", "primary"], [1, "leftIcon"], [1, "rightLang"], ["id", "Lang", 3, "formGroup"], ["formControlName", "language", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "login", 1, "matcard"], [3, "value"]],
      template: function AuthentificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "flight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " MyFlight-App ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AuthentificationComponent_Template_mat_select_selectionChange_10_listener($event) {
            return ctx.changeLang($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AuthentificationComponent_mat_option_11_Template, 4, 6, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-bot-side");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.language);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.langs);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_7__["BotSideComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vYXV0aGVudGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthentificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-authentification',
          templateUrl: './authentification.component.html',
          styleUrls: ['./authentification.component.css']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentification/authentification.interceptor.ts":
  /*!******************************************************************!*\
    !*** ./src/app/authentification/authentification.interceptor.ts ***!
    \******************************************************************/

  /*! exports provided: AuthentificationInterceptor */

  /***/
  function srcAppAuthentificationAuthentificationInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthentificationInterceptor", function () {
      return AuthentificationInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _services_authentification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/authentification.service */
    "./src/app/authentification/services/authentification.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthentificationInterceptor = /*#__PURE__*/function () {
      function AuthentificationInterceptor(authService, router) {
        _classCallCheck(this, AuthentificationInterceptor);

        this.authService = authService;
        this.router = router;
      }

      return _createClass(AuthentificationInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this3 = this;

          if (this.authService.getJwtToken()) {
            request = this.addToken(request, this.authService.getJwtToken());
          }

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log(err.error.trace);

            if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(err.error.message)) {
              _this3.authService.doLogoutUser();

              _this3.router.navigate(['/authentification/login']);
            } else if (err.error.status === 403) {
              if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(err.error.trace)) {
                if (err.error.trace.includes('DisabledException')) {
                  _this3.authService.disabledException = true;
                }
              }

              _this3.router.navigate(['/authentification/login']);
            } else if (err.error.message.includes('U_USERNAME') || err.error.message.includes('U_EMAIL')) {
              _this3.router.navigate(['/authentification/register']);
            } else {
              _this3.router.navigate(['/exception']);
            }

            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }, {
        key: "addToken",
        value: function addToken(request, token) {
          return request.clone({
            setHeaders: {
              'Authorization': "Bearer ".concat(token)
            }
          });
        }
      }]);
    }();

    AuthentificationInterceptor.ɵfac = function AuthentificationInterceptor_Factory(t) {
      return new (t || AuthentificationInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthentificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    AuthentificationInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthentificationInterceptor,
      factory: AuthentificationInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthentificationInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthentificationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentification/authentification.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/authentification/authentification.module.ts ***!
    \*************************************************************/

  /*! exports provided: AuthentificationModule */

  /***/
  function srcAppAuthentificationAuthentificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthentificationModule", function () {
      return AuthentificationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _authentification_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentification.interceptor */
    "./src/app/authentification/authentification.interceptor.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _authentification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authentification.component */
    "./src/app/authentification/authentification.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/authentification/login/login.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/authentification/registration/registration.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _portal_portal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../portal/portal.module */
    "./src/app/portal/portal.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/authentification/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./reset-password/reset-password.component */
    "./src/app/authentification/reset-password/reset-password.component.ts");
    /* harmony import */


    var _confirm_registration_confirm_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./confirm-registration/confirm-registration.component */
    "./src/app/authentification/confirm-registration/confirm-registration.component.ts");

    var AuthentificationModule = /*#__PURE__*/_createClass(function AuthentificationModule() {
      _classCallCheck(this, AuthentificationModule);
    });

    AuthentificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthentificationModule
    });
    AuthentificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthentificationModule_Factory(t) {
        return new (t || AuthentificationModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _authentification_interceptor__WEBPACK_IMPORTED_MODULE_3__["AuthentificationInterceptor"],
        multi: true
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _portal_portal_module__WEBPACK_IMPORTED_MODULE_10__["PortalModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthentificationModule, {
        declarations: [_authentification_component__WEBPACK_IMPORTED_MODULE_5__["AuthentificationComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__["ResetPasswordComponent"], _confirm_registration_confirm_registration_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmRegistrationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _portal_portal_module__WEBPACK_IMPORTED_MODULE_10__["PortalModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthentificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_authentification_component__WEBPACK_IMPORTED_MODULE_5__["AuthentificationComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__["ResetPasswordComponent"], _confirm_registration_confirm_registration_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmRegistrationComponent"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _authentification_interceptor__WEBPACK_IMPORTED_MODULE_3__["AuthentificationInterceptor"],
            multi: true
          }],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _portal_portal_module__WEBPACK_IMPORTED_MODULE_10__["PortalModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentification/confirm-registration/confirm-registration.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/authentification/confirm-registration/confirm-registration.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ConfirmRegistrationComponent */

  /***/
  function srcAppAuthentificationConfirmRegistrationConfirmRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmRegistrationComponent", function () {
      return ConfirmRegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_authentification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authentification.service */
    "./src/app/authentification/services/authentification.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ConfirmRegistrationComponent_div_4_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
      }
    }

    function ConfirmRegistrationComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmRegistrationComponent_div_4_img_1_Template, 1, 0, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
      }
    }

    var ConfirmRegistrationComponent = /*#__PURE__*/function () {
      function ConfirmRegistrationComponent(router, _activatedRoute, authService) {
        _classCallCheck(this, ConfirmRegistrationComponent);

        this.router = router;
        this._activatedRoute = _activatedRoute;
        this.authService = authService;
        this.verifToken = '';
        this.result = 'Verification in progress ...';
        this.redirect = '';
        this.loading = true;
      }

      return _createClass(ConfirmRegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this._activatedRoute.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (params) {
            return params['token'];
          })).subscribe(function (token) {
            return _this4.verifToken = token;
          });

          this.authService.confirmRegistration(this.verifToken).subscribe(function (res) {
            if (res === "valid") {
              _this4.timeLeft = 5;
              _this4.result = "Account verified successfully";
              _this4.redirect = "You will be redirect to the sign in page in : ";
              _this4.interval = setInterval(function () {
                if (_this4.timeLeft > 0) {
                  _this4.timeLeft--;
                } else {
                  _this4.router.navigate(['/authentification/login']);
                }
              }, 1000);
            } else if (res === "invalid") {
              _this4.result = "Invalid token";
            } else if (res === "expired") {
              _this4.result = "Token expired";
            }

            _this4.loading = false;
          }, function (error) {
            console.log(error);
            return;
          });
        }
      }]);
    }();

    ConfirmRegistrationComponent.ɵfac = function ConfirmRegistrationComponent_Factory(t) {
      return new (t || ConfirmRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthentificationService"]));
    };

    ConfirmRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmRegistrationComponent,
      selectors: [["app-confirm-registration"]],
      decls: 7,
      vars: 3,
      consts: [["id", "regiConf"], ["id", "loader", 4, "ngIf"], ["id", "loader"], ["alt", "Return to Home Page", "src", "../../../assets/imgs/ajax-wait.gif", 4, "ngIf"], ["alt", "Return to Home Page", "src", "../../../assets/imgs/ajax-wait.gif"]],
      template: function ConfirmRegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfirmRegistrationComponent_div_4_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.result);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timeLeft);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vY29uZmlybS1yZWdpc3RyYXRpb24vY29uZmlybS1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-confirm-registration',
          templateUrl: './confirm-registration.component.html',
          styleUrls: ['./confirm-registration.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthentificationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentification/forgot-password/forgot-password.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/authentification/forgot-password/forgot-password.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppAuthentificationForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_util_matchValidators_errorStateMatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/util/matchValidators/errorStateMatcher */
    "./src/app/shared/util/matchValidators/errorStateMatcher.ts");
    /* harmony import */


    var src_app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/flights/services/flights.service */
    "./src/app/flights/services/flights.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function ForgotPasswordComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.emailrequired.label"));
      }
    }

    function ForgotPasswordComponent_mat_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.emailvalid.label"));
      }
    }

    function ForgotPasswordComponent_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.emptyfield.label"));
      }
    }

    function ForgotPasswordComponent_mat_error_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email not found");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_div_30_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
      }
    }

    function ForgotPasswordComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_div_30_img_1_Template, 1, 0, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.loading);
      }
    }

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(authService, router, _snackBar) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.authService = authService;
        this.router = router;
        this._snackBar = _snackBar;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.matcher = new src_app_shared_util_matchValidators_errorStateMatcher__WEBPACK_IMPORTED_MODULE_2__["MyErrorStateMatcher"]();
        this.loading = false;
        this.submitted = false;
        this.userNotExist = false;
      }

      return _createClass(ForgotPasswordComponent, [{
        key: "fpassControls",
        get: function get() {
          return this.fpassForm.controls;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fpassForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: this.email
          });
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['/authentification/login']);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.fpassForm.reset();
        }
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          var _this5 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.fpassForm.invalid) {
            return;
          }

          this.loading = true;
          this.authService.forgotPassword(this.fpassControls.email.value).subscribe(function (res) {
            _this5.loading = false;

            if (res === "Email sent") {
              _this5._snackBar.open('Email sent successfully !', null, {
                duration: 3000,
                panelClass: ['blue-snackbar']
              });

              _this5.router.navigate(['/authentification/login']);
            } else if (res === "User not found") {
              _this5.userNotExist = true;
              return;
            }
          }, function (error) {
            _this5.loading = false;
            return;
          });
        }
      }]);
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_3__["FlightsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 31,
      vars: 23,
      consts: [[3, "formGroup"], ["type", "email", "matInput", "", "placeholder", "Email *", 3, "formControl", "errorStateMatcher"], [4, "ngIf"], [1, "button"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"], ["id", "loader", 4, "ngIf"], ["id", "loader"], ["alt", "Return to Home Page", "src", "../../../assets/imgs/ajax-wait.gif", 4, "ngIf"], ["alt", "Return to Home Page", "src", "../../../assets/imgs/ajax-wait.gif"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ForgotPasswordComponent_mat_error_12_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ForgotPasswordComponent_mat_error_13_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ForgotPasswordComponent_mat_error_15_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ForgotPasswordComponent_mat_error_16_Template, 2, 0, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_19_listener() {
            return ctx.sendEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_22_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_27_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ForgotPasswordComponent_div_30_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 13, "authPage.forgotpass.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fpassForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.email)("errorStateMatcher", ctx.matcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 15, "authPage.emailsend.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.hasError("email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.fpassForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userNotExist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 17, "authPage.send.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 19, "authPage.cancel.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 21, "authPage.signin.label"), " ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.css']
        }]
      }], function () {
        return [{
          type: src_app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_3__["FlightsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentification/guards/authentification.guard.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/authentification/guards/authentification.guard.ts ***!
    \*******************************************************************/

  /*! exports provided: AuthentificationGuard */

  /***/
  function srcAppAuthentificationGuardsAuthentificationGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthentificationGuard", function () {
      return AuthentificationGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authentification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/authentification.service */
    "./src/app/authentification/services/authentification.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthentificationGuard = /*#__PURE__*/function () {
      function AuthentificationGuard(authService, router) {
        _classCallCheck(this, AuthentificationGuard);

        this.authService = authService;
        this.router = router;
      }

      return _createClass(AuthentificationGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.isLoggedIn()) {
            this.router.navigate(['/flights/search']);
          }

          return !this.authService.isLoggedIn();
        }
      }]);
    }();

    AuthentificationGuard.ɵfac = function AuthentificationGuard_Factory(t) {
      return new (t || AuthentificationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authentification_service__WEBPACK_IMPORTED_MODULE_1__["AuthentificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthentificationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthentificationGuard,
      factory: AuthentificationGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthentificationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_1__["AuthentificationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentification/guards/flights.guard.ts":
  /*!**********************************************************!*\
    !*** ./src/app/authentification/guards/flights.guard.ts ***!
    \**********************************************************/

  /*! exports provided: FlightsGuard */

  /***/
  function srcAppAuthentificationGuardsFlightsGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightsGuard", function () {
      return FlightsGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authentification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/authentification.service */
    "./src/app/authentification/services/authentification.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FlightsGuard = /*#__PURE__*/function () {
      function FlightsGuard(authService, router) {
        _classCallCheck(this, FlightsGuard);

        this.authService = authService;
        this.router = router;
      }

      return _createClass(FlightsGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return this.canLoad();
        }
      }, {
        key: "canLoad",
        value: function canLoad() {
          if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/authentification/login']);
          }

          return this.authService.isLoggedIn();
        }
      }]);
    }();

    FlightsGuard.ɵfac = function FlightsGuard_Factory(t) {
      return new (t || FlightsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authentification_service__WEBPACK_IMPORTED_MODULE_1__["AuthentificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    FlightsGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FlightsGuard,
      factory: FlightsGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightsGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_1__["AuthentificationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentification/login/login.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/authentification/login/login.component.ts ***!
    \***********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthentificationLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_util_matchValidators_errorStateMatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/util/matchValidators/errorStateMatcher */
    "./src/app/shared/util/matchValidators/errorStateMatcher.ts");
    /* harmony import */


    var src_app_authentification_services_authentification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/authentification/services/authentification.service */
    "./src/app/authentification/services/authentification.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function LoginComponent_mat_error_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.usernamevalid.label"));
      }
    }

    function LoginComponent_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.passwordvalid.label"));
      }
    }

    function LoginComponent_mat_error_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.emptyfield.label"));
      }
    }

    function LoginComponent_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.incorrectfield.label"));
      }
    }

    function LoginComponent_mat_error_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Account not verified. An email was already sent to your adresse. Please confirm it before connecting.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_39_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
      }
    }

    function LoginComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_39_img_1_Template, 1, 0, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading);
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, formBuilder, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.invalid = false;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.matcher = new src_app_shared_util_matchValidators_errorStateMatcher__WEBPACK_IMPORTED_MODULE_2__["MyErrorStateMatcher"]();
        this.loading = false;
      }

      return _createClass(LoginComponent, [{
        key: "loginControls",
        get: function get() {
          return this.loginForm.controls;
        }
      }, {
        key: "login",
        value: function login() {
          var _this6 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.loginForm.invalid) {
            return;
          }

          this.loading = true;
          this.authService.login({
            username: this.loginControls.username.value,
            password: this.loginControls.password.value
          }).subscribe(function (success) {
            if (success) {
              _this6.loading = false;

              _this6.router.navigate(['/flights/search']);
            } else {
              _this6.disabledException = _this6.authService.disabledException;

              if (_this6.disabledException) {
                _this6.loading = false;
                _this6.authService.disabledException = false;
                _this6.invalid = false;
                return;
              }

              _this6.loading = false;
              _this6.invalid = true;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: this.username,
            password: this.password
          });
        }
      }, {
        key: "register",
        value: function register() {
          this.router.navigate(['/authentification/register']);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.submitted = false;
          this.loginForm.reset();
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          this.router.navigate(['/authentification/forgot-password']);
        }
      }]);
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentification_services_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthentificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 40,
      vars: 33,
      consts: [[3, "formGroup"], ["type", "text", "matInput", "", "formControlName", "username", 3, "placeholder", "errorStateMatcher"], [4, "ngIf"], ["type", "password", "matInput", "", "formControlName", "password", 3, "placeholder", "errorStateMatcher"], [1, "button"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"], ["id", "loader", 4, "ngIf"], ["id", "loader"], ["alt", "Return to Home Page", "src", "../../../assets/imgs/ajax-wait.gif", 4, "ngIf"], ["alt", "Return to Home Page", "src", "../../../assets/imgs/ajax-wait.gif"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_mat_error_10_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_mat_error_15_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_mat_error_17_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_mat_error_18_Template, 2, 0, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_32_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_36_listener() {
            return ctx.resetPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, LoginComponent_div_39_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 17, "authPage.signin.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 19, "authPage.username.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 21, "authPage.password.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.loginForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.disabledException);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 23, "authPage.signin.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 25, "authPage.cancel.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 27, "authPage.askaccount.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 29, "authPage.createaccount.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 31, "authPage.askforgot.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: src_app_authentification_services_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthentificationService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentification/registration/registration.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/authentification/registration/registration.component.ts ***!
    \*************************************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppAuthentificationRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_util_matchValidators_errorStateMatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/util/matchValidators/errorStateMatcher */
    "./src/app/shared/util/matchValidators/errorStateMatcher.ts");
    /* harmony import */


    var src_app_shared_util_matchValidators_must_match_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/util/matchValidators/must-match.validator */
    "./src/app/shared/util/matchValidators/must-match.validator.ts");
    /* harmony import */


    var src_app_shared_util_matchValidators_password_strength_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/util/matchValidators/password-strength.validator */
    "./src/app/shared/util/matchValidators/password-strength.validator.ts");
    /* harmony import */


    var _services_authentification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/authentification.service */
    "./src/app/authentification/services/authentification.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function RegistrationComponent_mat_error_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.usernamevalid.label"));
      }
    }

    function RegistrationComponent_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.emailvalid.label"));
      }
    }

    function RegistrationComponent_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.emailrequired.label"));
      }
    }

    function RegistrationComponent_mat_error_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.passwordvalid.label"));
      }
    }

    function RegistrationComponent_mat_error_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.passcritere.label"));
      }
    }

    function RegistrationComponent_mat_error_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.password.errors["passwordStrength"], " ");
      }
    }

    function RegistrationComponent_mat_error_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.confpassvalid.label"));
      }
    }

    function RegistrationComponent_mat_error_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.passmatch.label"));
      }
    }

    function RegistrationComponent_mat_error_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.termsvalid.label"));
      }
    }

    function RegistrationComponent_mat_error_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.emptyfield.label"));
      }
    }

    function RegistrationComponent_mat_error_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.usernameexist.label"));
      }
    }

    function RegistrationComponent_mat_error_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.emailexist.label"));
      }
    }

    function RegistrationComponent_div_59_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
      }
    }

    function RegistrationComponent_div_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_59_img_1_Template, 1, 0, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.loading);
      }
    }

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(authService, router, formBuilder, _snackBar) {
        var _this7 = this;

        _classCallCheck(this, RegistrationComponent);

        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this._snackBar = _snackBar;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), src_app_shared_util_matchValidators_password_strength_validator__WEBPACK_IMPORTED_MODULE_4__["PasswordStrengthValidator"]]);
        this.confpassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.acceptTerms = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]);
        this.matcher = new src_app_shared_util_matchValidators_errorStateMatcher__WEBPACK_IMPORTED_MODULE_2__["MyErrorStateMatcher"]();
        this.loading = false;
        this.submitted = false;
        this.u_username = false;
        this.u_email = false;

        this.checkError = function (controlName, errorName) {
          return _this7.registerForm.controls[controlName].hasError(errorName);
        };
      }

      return _createClass(RegistrationComponent, [{
        key: "registerControls",
        get: function get() {
          return this.registerForm.controls;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            username: this.username,
            password: this.password,
            confpassword: this.confpassword,
            email: this.email,
            acceptTerms: this.acceptTerms
          }, {
            validator: Object(src_app_shared_util_matchValidators_must_match_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'confpassword')
          });
        }
      }, {
        key: "register",
        value: function register() {
          var _this8 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.registerForm.invalid) {
            return;
          }

          this.loading = true;
          this.authService.register({
            username: this.registerControls.username.value,
            email: this.registerControls.email.value,
            password: this.registerControls.password.value,
            confpassword: this.registerControls.confpassword.value
          }).subscribe(function (res) {
            _this8.loading = false;

            _this8._snackBar.open('Account created successfully !', null, {
              duration: 2000,
              panelClass: ['blue-snackbar']
            });

            _this8.router.navigate(['/authentification/login']);
          }, function (error) {
            if (error.includes('U_USERNAME')) {
              _this8.u_username = true;
              _this8.u_email = false;
            } else if (error.includes('U_EMAIL')) {
              _this8.u_email = true;
              _this8.u_username = false;
            }

            _this8.loading = false;
          });
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['/authentification/login']);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.submitted = false;
          this.registerForm.reset();
        }
      }]);
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthentificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 60,
      vars: 53,
      consts: [[3, "formGroup"], ["type", "text", "matInput", "", 3, "placeholder", "formControl", "errorStateMatcher"], [4, "ngIf"], ["type", "email", "matInput", "", "placeholder", "Email *", 3, "formControl", "errorStateMatcher"], ["type", "password", "matInput", "", 3, "placeholder", "formControl", "errorStateMatcher"], ["type", "checkbox", "matCheckbox", "", 3, "formControl"], [1, "button"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"], ["id", "loader", 4, "ngIf"], ["id", "loader"], ["alt", "Return to Home Page", "src", "../../../assets/imgs/ajax-wait.gif", 4, "ngIf"], ["alt", "Return to Home Page", "src", "../../../assets/imgs/ajax-wait.gif"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RegistrationComponent_mat_error_10_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RegistrationComponent_mat_error_14_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegistrationComponent_mat_error_15_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegistrationComponent_mat_error_23_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegistrationComponent_mat_error_24_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegistrationComponent_mat_error_25_Template, 2, 1, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegistrationComponent_mat_error_31_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RegistrationComponent_mat_error_32_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RegistrationComponent_mat_error_39_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, RegistrationComponent_mat_error_40_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, RegistrationComponent_mat_error_41_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RegistrationComponent_mat_error_42_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_45_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_48_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_56_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, RegistrationComponent_div_59_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 33, "authPage.signup.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 35, "authPage.username.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.username)("errorStateMatcher", ctx.matcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.email)("errorStateMatcher", ctx.matcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.hasError("email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 37, "authPage.password.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.password)("errorStateMatcher", ctx.matcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 39, "authPage.emailcritere.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.hasError("minlength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.hasError("passwordStrength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 41, "authPage.confpass.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.confpassword)("errorStateMatcher", ctx.matcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confpassword.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confpassword.hasError("mustMatch"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.acceptTerms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 43, "authPage.terms.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.acceptTerms.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.registerForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.u_username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.u_email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 45, "authPage.signup.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 47, "authPage.cancel.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 49, "authPage.askhaveaccount.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 51, "authPage.signin.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styleUrls: ['./registration.component.css']
        }]
      }], function () {
        return [{
          type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthentificationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentification/reset-password/reset-password.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/authentification/reset-password/reset-password.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppAuthentificationResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_util_matchValidators_password_strength_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/util/matchValidators/password-strength.validator */
    "./src/app/shared/util/matchValidators/password-strength.validator.ts");
    /* harmony import */


    var src_app_shared_util_matchValidators_errorStateMatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/util/matchValidators/errorStateMatcher */
    "./src/app/shared/util/matchValidators/errorStateMatcher.ts");
    /* harmony import */


    var src_app_shared_util_matchValidators_must_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/util/matchValidators/must-match.validator */
    "./src/app/shared/util/matchValidators/must-match.validator.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_authentification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/authentification.service */
    "./src/app/authentification/services/authentification.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function ResetPasswordComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.passwordvalid.label"));
      }
    }

    function ResetPasswordComponent_mat_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.passcritere.label"));
      }
    }

    function ResetPasswordComponent_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.password.errors["passwordStrength"], " ");
      }
    }

    function ResetPasswordComponent_mat_error_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.confpassvalid.label"));
      }
    }

    function ResetPasswordComponent_mat_error_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.passmatch.label"));
      }
    }

    function ResetPasswordComponent_mat_error_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.emptyfield.label"));
      }
    }

    function ResetPasswordComponent_mat_error_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid token");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResetPasswordComponent_mat_error_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User not exist");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResetPasswordComponent_div_33_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
      }
    }

    function ResetPasswordComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_div_33_img_1_Template, 1, 0, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.loading);
      }
    }

    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(formBuilder, router, _activatedRoute, authService, _snackBar) {
        _classCallCheck(this, ResetPasswordComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this.authService = authService;
        this._snackBar = _snackBar;
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), src_app_shared_util_matchValidators_password_strength_validator__WEBPACK_IMPORTED_MODULE_2__["PasswordStrengthValidator"]]);
        this.confpassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.matcher = new src_app_shared_util_matchValidators_errorStateMatcher__WEBPACK_IMPORTED_MODULE_3__["MyErrorStateMatcher"]();
        this.loading = false;
        this.invalid = false;
        this.userNotExist = false;
        this.submitted = false;
      }

      return _createClass(ResetPasswordComponent, [{
        key: "resetControls",
        get: function get() {
          return this.resetForm.controls;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.resetForm = this.formBuilder.group({
            password: this.password,
            confpassword: this.confpassword
          }, {
            validator: Object(src_app_shared_util_matchValidators_must_match_validator__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('password', 'confpassword')
          });

          this._activatedRoute.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (params) {
            return params['token'];
          })).subscribe(function (token) {
            return _this9.resetToken = token;
          });
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['/authentification/login']);
        }
      }, {
        key: "reset",
        value: function reset() {
          var _this10 = this;

          this.loading = true;
          this.authService.resetPassword({
            token: this.resetToken,
            newPassword: this.resetControls.password.value
          }).subscribe(function (res) {
            _this10.loading = false;

            if (res === "Reset Success") {
              _this10._snackBar.open('Password reset successfully !', null, {
                duration: 3000,
                panelClass: ['blue-snackbar']
              });

              _this10.router.navigate(['/authentification/login']);
            } else if (res === "Invalid token") {
              _this10.invalid = true;
              return;
            } else if (res === "User not exist") {
              _this10.userNotExist = true;
              return;
            }
          }, function (error) {
            console.log(error);
            _this10.loading = false;
            return;
          });
          /*     this._activatedRoute.queryParams.subscribe(
                params => console.log('queryParams', params['token'])
              ); */
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.submitted = false;
          this.resetForm.reset();
        }
      }]);
    }();

    ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
      return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentification_service__WEBPACK_IMPORTED_MODULE_7__["AuthentificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]));
    };

    ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetPasswordComponent,
      selectors: [["app-reset-password"]],
      decls: 34,
      vars: 26,
      consts: [[3, "formGroup"], ["type", "password", "matInput", "", 3, "placeholder", "formControl", "errorStateMatcher"], [4, "ngIf"], [1, "button"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"], ["id", "loader", 4, "ngIf"], ["id", "loader"], ["alt", "Return to Home Page", "src", "../../../assets/imgs/ajax-wait.gif", 4, "ngIf"], ["alt", "Return to Home Page", "src", "../../../assets/imgs/ajax-wait.gif"]],
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reset password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ResetPasswordComponent_mat_error_12_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResetPasswordComponent_mat_error_13_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResetPasswordComponent_mat_error_14_Template, 2, 1, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ResetPasswordComponent_mat_error_20_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ResetPasswordComponent_mat_error_21_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ResetPasswordComponent_mat_error_22_Template, 3, 3, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ResetPasswordComponent_mat_error_23_Template, 2, 0, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ResetPasswordComponent_mat_error_24_Template, 2, 0, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_27_listener() {
            return ctx.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_29_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ResetPasswordComponent_div_33_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.resetForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 18, "authPage.password.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.password)("errorStateMatcher", ctx.matcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 20, "authPage.emailcritere.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.hasError("minlength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.hasError("passwordStrength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 22, "authPage.confpass.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.confpassword)("errorStateMatcher", ctx.matcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confpassword.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confpassword.hasError("mustMatch"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.resetForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userNotExist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 24, "authPage.cancel.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reset-password',
          templateUrl: './reset-password.component.html',
          styleUrls: ['./reset-password.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_7__["AuthentificationService"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentification/services/authentification.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/authentification/services/authentification.service.ts ***!
    \***********************************************************************/

  /*! exports provided: AuthentificationService */

  /***/
  function srcAppAuthentificationServicesAuthentificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthentificationService", function () {
      return AuthentificationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'text/plain; charset=utf-8');

    var AuthentificationService = /*#__PURE__*/function () {
      function AuthentificationService(http, router) {
        _classCallCheck(this, AuthentificationService);

        this.http = http;
        this.router = router;
        this.JWT_TOKEN = 'JWT_TOKEN';
        this.disabledException = false;
      }

      return _createClass(AuthentificationService, [{
        key: "login",
        value: function login(loginRequest) {
          var _this11 = this;

          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/authenticate"), loginRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (token) {
            return _this11.doLoginUser(loginRequest.username, token);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          }));
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/register"), user);
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(password) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/reset"), password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res.token;
          }));
        }
      }, {
        key: "sendEmail",
        value: function sendEmail(email) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/forgotPassword?email=") + email);
        }
      }, {
        key: "confirmRegistration",
        value: function confirmRegistration(token) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/registration-confirm?token=") + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res.token;
          }));
        }
      }, {
        key: "doLoginUser",
        value: function doLoginUser(username, loginResponse) {
          this.loggedUser = username;
          this.storeTokens(loginResponse);
          localStorage.setItem("loggedUser", this.loggedUser);
        }
      }, {
        key: "storeTokens",
        value: function storeTokens(loginResponse) {
          localStorage.setItem(this.JWT_TOKEN, loginResponse.token);
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return !!this.getJwtToken();
        }
      }, {
        key: "getJwtToken",
        value: function getJwtToken() {
          return localStorage.getItem(this.JWT_TOKEN);
        }
      }, {
        key: "doLogoutUser",
        value: function doLogoutUser() {
          this.loggedUser = null;
          this.removeTokens();
        }
      }, {
        key: "removeTokens",
        value: function removeTokens() {
          localStorage.removeItem(this.JWT_TOKEN);
        }
      }]);
    }();

    AuthentificationService.ɵfac = function AuthentificationService_Factory(t) {
      return new (t || AuthentificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    AuthentificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthentificationService,
      factory: AuthentificationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthentificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/exceptions/exception/exception.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/exceptions/exception/exception.component.ts ***!
    \*************************************************************/

  /*! exports provided: ExceptionComponent */

  /***/
  function srcAppExceptionsExceptionExceptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExceptionComponent", function () {
      return ExceptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../portal/bot-side/bot-side.component */
    "./src/app/portal/bot-side/bot-side.component.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");

    function ExceptionComponent_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r1 === "fr_FR" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "lang.french.label") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "lang.english.label"), " ");
      }
    }

    var ExceptionComponent = /*#__PURE__*/function () {
      function ExceptionComponent(translateService, sharedService, fb, router) {
        _classCallCheck(this, ExceptionComponent);

        this.translateService = translateService;
        this.sharedService = sharedService;
        this.fb = fb;
        this.router = router;
        translateService.addLangs(['en_US', 'fr_FR']);
      }

      return _createClass(ExceptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.langs = this.translateService.getLangs();
          this.language = this.fb.group({
            language: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          var toSelect = this.langs.find(function (c) {
            return c == localStorage.getItem('language');
          });
          this.language.get('language').setValue(toSelect);
        }
      }, {
        key: "changeLang",
        value: function changeLang(language) {
          localStorage.setItem('language', language);
          this.translateService.use(language);

          if (language === 'en_US') {
            this.sharedService.selectedLanguage.next('en');
          } else if (language === 'fr_FR') {
            this.sharedService.selectedLanguage.next('fr');
          }
        }
      }]);
    }();

    ExceptionComponent.ɵfac = function ExceptionComponent_Factory(t) {
      return new (t || ExceptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ExceptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExceptionComponent,
      selectors: [["app-exception"]],
      decls: 24,
      vars: 2,
      consts: [["id", "loginHeader"], ["color", "primary"], [1, "leftIcon"], [1, "rightLang"], ["id", "Lang", 3, "formGroup"], ["formControlName", "language", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "matcard"], ["href", "/flights/search"], [3, "value"]],
      template: function ExceptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "flight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " MyFlight-App ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ExceptionComponent_Template_mat_select_selectionChange_10_listener($event) {
            return ctx.changeLang($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExceptionComponent_mat_option_11_Template, 4, 6, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "An error has occurred :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Failed to load resource. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Return to home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-bot-side");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.language);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.langs);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_7__["BotSideComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4Y2VwdGlvbnMvZXhjZXB0aW9uL2V4Y2VwdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExceptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-exception',
          templateUrl: './exception.component.html',
          styleUrls: ['./exception.component.css']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/exceptions/page-not-found/page-not-found.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/exceptions/page-not-found/page-not-found.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppExceptionsPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../portal/bot-side/bot-side.component */
    "./src/app/portal/bot-side/bot-side.component.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");

    function PageNotFoundComponent_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r1 === "fr_FR" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "lang.french.label") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "lang.english.label"), " ");
      }
    }

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent(translateService, sharedService, fb, router) {
        _classCallCheck(this, PageNotFoundComponent);

        this.translateService = translateService;
        this.sharedService = sharedService;
        this.fb = fb;
        this.router = router;
        translateService.addLangs(['en_US', 'fr_FR']);
      }

      return _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.langs = this.translateService.getLangs();
          this.language = this.fb.group({
            language: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          var toSelect = this.langs.find(function (c) {
            return c == localStorage.getItem('language');
          });
          this.language.get('language').setValue(toSelect);
        }
      }, {
        key: "changeLang",
        value: function changeLang(language) {
          localStorage.setItem('language', language);
          this.translateService.use(language);

          if (language === 'en_US') {
            this.sharedService.selectedLanguage.next('en');
          } else if (language === 'fr_FR') {
            this.sharedService.selectedLanguage.next('fr');
          }
        }
      }]);
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 24,
      vars: 2,
      consts: [["id", "loginHeader"], ["color", "primary"], [1, "leftIcon"], [1, "rightLang"], ["id", "Lang", 3, "formGroup"], ["formControlName", "language", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "matcard"], ["href", "/flights/search"], [3, "value"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "flight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " MyFlight-App ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function PageNotFoundComponent_Template_mat_select_selectionChange_10_listener($event) {
            return ctx.changeLang($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PageNotFoundComponent_mat_option_11_Template, 4, 6, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Page not found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " The page you are looking for is not found. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Return to home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-bot-side");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.language);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.langs);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_7__["BotSideComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4Y2VwdGlvbnMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/flights/components/action-bloc/action-bloc.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/flights/components/action-bloc/action-bloc.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ActionBlocComponent */

  /***/
  function srcAppFlightsComponentsActionBlocActionBlocComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionBlocComponent", function () {
      return ActionBlocComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _services_flights_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/flights.service */
    "./src/app/flights/services/flights.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function ActionBlocComponent_mat_icon_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ActionBlocComponent_mat_icon_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_less");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "display": a0
      };
    };

    function ActionBlocComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBlocComponent_div_9_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.backToTheFlightsList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "fast_rewind");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBlocComponent_div_9_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.previousPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "skip_previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBlocComponent_div_9_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.nextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "skip_next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "DetailsPage.back.button"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r2.hidePrevious ? "none" : "inherit"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, "DetailsPage.previous.button"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r2.hideNext ? "none" : "inherit"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 9, "DetailsPage.next.button"), " ");
      }
    }

    var ActionBlocComponent = /*#__PURE__*/function () {
      function ActionBlocComponent(sharedService, flightsService, router) {
        _classCallCheck(this, ActionBlocComponent);

        this.sharedService = sharedService;
        this.flightsService = flightsService;
        this.router = router;
        this.hideNext = false;
        this.hidePrevious = false;
        this.flightsIds = [];
        this.currentIndex = 0;
        this.currentPage = 0;
        this.isHidden = false;
      }

      return _createClass(ActionBlocComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.flightsIds = this.flightsService.flightsIds;
          this.currentPage = this.flightAction.idFlight;
          this.currentIndex = this.flightsIds.indexOf(this.currentPage);

          if (this.currentIndex <= 0) {
            this.hidePrevious = true;
          }

          if (this.currentIndex >= this.flightsIds.length - 1) {
            this.hideNext = true;
          }
        }
      }, {
        key: "backToTheFlightsList",
        value: function backToTheFlightsList() {
          this.router.navigate(['/flights/search']);
        }
      }, {
        key: "previousPage",
        value: function previousPage() {
          this.sharedService.orientation = "prev";

          if (this.currentIndex <= 0) {
            this.hidePrevious = true;
          } else if (this.currentIndex > 0) {
            this.hidePrevious = false;
            this.currentIndex = this.currentIndex - 1;
            this.flightsService.getFlightDetails(this.flightsIds[this.currentIndex]);
          }
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.sharedService.orientation = "next";

          if (this.currentIndex >= this.flightsIds.length - 1) {
            this.hideNext = true;
          } else if (this.currentIndex < this.flightsIds.length - 1) {
            this.hideNext = false;
            this.currentIndex = this.currentIndex + 1;
            this.flightsService.getFlightDetails(this.flightsIds[this.currentIndex]);
          }
        }
      }, {
        key: "changeVisibility",
        value: function changeVisibility() {
          this.isHidden = !this.isHidden;
        }
      }]);
    }();

    ActionBlocComponent.ɵfac = function ActionBlocComponent_Factory(t) {
      return new (t || ActionBlocComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_flights_service__WEBPACK_IMPORTED_MODULE_2__["FlightsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ActionBlocComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ActionBlocComponent,
      selectors: [["app-action-bloc"]],
      inputs: {
        flightAction: "flightAction"
      },
      decls: 10,
      vars: 6,
      consts: [["id", "action"], ["id", "mainBanner"], [1, "expand", 3, "click"], [4, "ngIf"], ["id", "buttonBar", 4, "ngIf"], ["id", "buttonBar"], ["id", "firstLeft"], ["mat-raised-button", "", "color", "primary", 3, "click"], [2, "width", "100%", "margin", "10px 0pt 0pt"], [1, "firstLeft"], ["mat-raised-button", "", "color", "primary", 3, "ngStyle", "click"], [1, "nextLeft"]],
      template: function ActionBlocComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionBlocComponent_Template_span_click_6_listener() {
            return ctx.changeVisibility();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ActionBlocComponent_mat_icon_7_Template, 2, 0, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ActionBlocComponent_mat_icon_8_Template, 2, 0, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ActionBlocComponent_div_9_Template, 21, 15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "DetailsPage.action.header"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHidden);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isHidden);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isHidden);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvY29tcG9uZW50cy9hY3Rpb24tYmxvYy9hY3Rpb24tYmxvYy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionBlocComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-action-bloc',
          templateUrl: './action-bloc.component.html',
          styleUrls: ['./action-bloc.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]
        }, {
          type: _services_flights_service__WEBPACK_IMPORTED_MODULE_2__["FlightsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        flightAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/flights/components/cabin-details/cabin-details.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/flights/components/cabin-details/cabin-details.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: CabinDetailsComponent */

  /***/
  function srcAppFlightsComponentsCabinDetailsCabinDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CabinDetailsComponent", function () {
      return CabinDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function CabinDetailsComponent_mat_icon_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CabinDetailsComponent_mat_icon_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_less");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CabinDetailsComponent_div_8_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cabinDetail_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "DetailsPage." + cabinDetail_r5.cabinClass));
      }
    }

    function CabinDetailsComponent_div_8_td_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cabinDetail_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", cabinDetail_r6.bagage, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", cabinDetail_r6.cancellation, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", cabinDetail_r6.rebooking, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", cabinDetail_r6.refund, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", cabinDetail_r6.fare, " $ ");
      }
    }

    function CabinDetailsComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CabinDetailsComponent_div_8_th_3_Template, 3, 3, "th", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CabinDetailsComponent_div_8_td_5_Template, 15, 5, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@orientAnimation", ctx_r2.orientation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cabinDetails);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cabinDetails);
      }
    }

    var CabinDetailsComponent = /*#__PURE__*/function () {
      function CabinDetailsComponent(sharedService) {
        _classCallCheck(this, CabinDetailsComponent);

        this.sharedService = sharedService;
        this.IsHidden = false;
        this.orientation = this.sharedService.orientation;
      }

      return _createClass(CabinDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cabinDetails = this.flightInfos.cabinDetails;
        }
      }, {
        key: "changeVisibility",
        value: function changeVisibility() {
          this.IsHidden = !this.IsHidden;
        }
      }]);
    }();

    CabinDetailsComponent.ɵfac = function CabinDetailsComponent_Factory(t) {
      return new (t || CabinDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]));
    };

    CabinDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CabinDetailsComponent,
      selectors: [["app-cabin-details"]],
      inputs: {
        flightInfos: "flightInfos"
      },
      decls: 9,
      vars: 6,
      consts: [["id", "mainBanner"], [1, "expand", 3, "click"], [4, "ngIf"], ["id", "cabinDetails", "class", "t-data-grid", 4, "ngIf"], ["id", "cabinDetails", 1, "t-data-grid"], [1, "t-data-grid"], [4, "ngFor", "ngForOf"]],
      template: function CabinDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CabinDetailsComponent_Template_span_click_5_listener() {
            return ctx.changeVisibility();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CabinDetailsComponent_mat_icon_6_Template, 2, 0, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CabinDetailsComponent_mat_icon_7_Template, 2, 0, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CabinDetailsComponent_div_8_Template, 6, 3, "div", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "DetailsPage.cabin.header"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsHidden);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsHidden);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsHidden);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvY29tcG9uZW50cy9jYWJpbi1kZXRhaWxzL2NhYmluLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("orientAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => prev", // ---> Entering --->
        [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(-200%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(0)'
        })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => next", // <--- Entering <---
        [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(200%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(0)'
        })]))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CabinDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cabin-details',
          templateUrl: './cabin-details.component.html',
          styleUrls: ['./cabin-details.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("orientAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => prev", // ---> Entering --->
          [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(-200%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(0)'
          })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => next", // <--- Entering <---
          [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(200%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(0)'
          })]))])])]
        }]
      }], function () {
        return [{
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }];
      }, {
        flightInfos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/flights/components/flight-infos/flight-infos.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/flights/components/flight-infos/flight-infos.component.ts ***!
    \***************************************************************************/

  /*! exports provided: FlightInfosComponent */

  /***/
  function srcAppFlightsComponentsFlightInfosFlightInfosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightInfosComponent", function () {
      return FlightInfosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_util_pipes_replace_null_value_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/util/pipes/replace-null-value.pipe */
    "./src/app/shared/util/pipes/replace-null-value.pipe.ts");
    /* harmony import */


    var _shared_util_pipes_i18n_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/util/pipes/i18n-date.pipe */
    "./src/app/shared/util/pipes/i18n-date.pipe.ts");

    function FlightInfosComponent_mat_icon_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FlightInfosComponent_mat_icon_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_less");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FlightInfosComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "i18nDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "i18nDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "i18nDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](86, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@orientAnimation", ctx_r2.orientation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 28, "flightsList.flightNb.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 30, "flightsList.company.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 32, "flightsList.flight.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 34, "flightsList.trip.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.flightInfos.idFlight, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 38, "searchFlightForm.company." + ctx_r2.flightInfos.companyName)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 42, "searchFlightForm.flightType." + ctx_r2.flightInfos.flightType)), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 46, "searchFlightForm.trip." + ctx_r2.flightInfos.travelType)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 48, "flightsList.deparDate.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 50, "flightsList.arrivDate.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 52, "flightsList.backDate.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 54, "flightsList.departingFrom.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 56, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 58, ctx_r2.flightInfos.departureDate)), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 60, ctx_r2.flightInfos.departureTime), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 62, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 64, ctx_r2.flightInfos.arrivalDate)), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 66, ctx_r2.flightInfos.arrivalTime), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 68, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 70, ctx_r2.flightInfos.backDate)), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 72, ctx_r2.flightInfos.backTime), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.flightInfos.departureLocation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 74, "flightsList.flightDuration.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 76, "flightsList.connection.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 78, "flightsList.aircraft.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 80, "flightsList.arrivingAt.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 82, ctx_r2.flightInfos.flightDuration), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](86, 84, ctx_r2.flightInfos.connectionDuration), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](89, 86, ctx_r2.flightInfos.aircraftType), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 88, ctx_r2.flightInfos.arrivalLocation));
      }
    }

    var FlightInfosComponent = /*#__PURE__*/function () {
      function FlightInfosComponent(sharedService) {
        _classCallCheck(this, FlightInfosComponent);

        this.sharedService = sharedService;
        this.IsHidden = false;
        this.orientation = this.sharedService.orientation;
      }

      return _createClass(FlightInfosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeVisibility",
        value: function changeVisibility() {
          this.IsHidden = !this.IsHidden;
        }
      }]);
    }();

    FlightInfosComponent.ɵfac = function FlightInfosComponent_Factory(t) {
      return new (t || FlightInfosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]));
    };

    FlightInfosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FlightInfosComponent,
      selectors: [["app-flight-infos"]],
      inputs: {
        flightInfos: "flightInfos"
      },
      decls: 10,
      vars: 6,
      consts: [["id", "flightsInfo"], ["id", "mainBanner"], [1, "expand", 3, "click"], [4, "ngIf"], ["class", "t-data-grid", 4, "ngIf"], [1, "t-data-grid"]],
      template: function FlightInfosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightInfosComponent_Template_span_click_6_listener() {
            return ctx.changeVisibility();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FlightInfosComponent_mat_icon_7_Template, 2, 0, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FlightInfosComponent_mat_icon_8_Template, 2, 0, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FlightInfosComponent_div_9_Template, 93, 90, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "DetailsPage.flight.header"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsHidden);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsHidden);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.IsHidden);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _shared_util_pipes_replace_null_value_pipe__WEBPACK_IMPORTED_MODULE_6__["ReplaceNullValuePipe"], _shared_util_pipes_i18n_date_pipe__WEBPACK_IMPORTED_MODULE_7__["I18nDatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvY29tcG9uZW50cy9mbGlnaHQtaW5mb3MvZmxpZ2h0LWluZm9zLmNvbXBvbmVudC5jc3MifQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("orientAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => prev", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(-200%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(0)'
        })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => next", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(200%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(0)'
        })]))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightInfosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-flight-infos',
          templateUrl: './flight-infos.component.html',
          styleUrls: ['./flight-infos.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("orientAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => prev", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(-200%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(0)'
          })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => next", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(200%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(0)'
          })]))])])]
        }]
      }], function () {
        return [{
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }];
      }, {
        flightInfos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/flights/components/flight-search-summary/flight-search-summary.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/flights/components/flight-search-summary/flight-search-summary.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: FlightSearchSummaryComponent */

  /***/
  function srcAppFlightsComponentsFlightSearchSummaryFlightSearchSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightSearchSummaryComponent", function () {
      return FlightSearchSummaryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var FlightSearchSummaryComponent = /*#__PURE__*/function () {
      function FlightSearchSummaryComponent() {
        _classCallCheck(this, FlightSearchSummaryComponent);
      }

      return _createClass(FlightSearchSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    FlightSearchSummaryComponent.ɵfac = function FlightSearchSummaryComponent_Factory(t) {
      return new (t || FlightSearchSummaryComponent)();
    };

    FlightSearchSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FlightSearchSummaryComponent,
      selectors: [["app-flight-search-summary"]],
      inputs: {
        remontedResult: "remontedResult"
      },
      decls: 9,
      vars: 4,
      consts: [["id", "result", 1, "t-data-grid"], [1, "t-data-grid"]],
      template: function FlightSearchSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "flightsList.remontedResult.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.remontedResult);
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvY29tcG9uZW50cy9mbGlnaHQtc2VhcmNoLXN1bW1hcnkvZmxpZ2h0LXNlYXJjaC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightSearchSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-flight-search-summary',
          templateUrl: './flight-search-summary.component.html',
          styleUrls: ['./flight-search-summary.component.css']
        }]
      }], function () {
        return [];
      }, {
        remontedResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/flights/components/flights-list/flights-list.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/flights/components/flights-list/flights-list.component.ts ***!
    \***************************************************************************/

  /*! exports provided: FlightsListComponent */

  /***/
  function srcAppFlightsComponentsFlightsListFlightsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightsListComponent", function () {
      return FlightsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/collections.js");
    /* harmony import */


    var _services_flights_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/flights.service */
    "./src/app/flights/services/flights.service.ts");
    /* harmony import */


    var _app_shared_csvDataExporter_CsvDataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../app/shared/csvDataExporter/CsvDataService */
    "./src/app/shared/csvDataExporter/CsvDataService.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_util_pipes_replace_null_value_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/util/pipes/replace-null-value.pipe */
    "./src/app/shared/util/pipes/replace-null-value.pipe.ts");
    /* harmony import */


    var _shared_util_pipes_i18n_date_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/util/pipes/i18n-date.pipe */
    "./src/app/shared/util/pipes/i18n-date.pipe.ts");

    function FlightsListComponent_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FlightsListComponent_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flight_r37.idFlight, " ");
      }
    }

    function FlightsListComponent_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "flightsList.company.label"));
      }
    }

    function FlightsListComponent_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r38 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "searchFlightForm.company." + flight_r38.companyName)), " ");
      }
    }

    function FlightsListComponent_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "flightsList.flight.label"));
      }
    }

    function FlightsListComponent_td_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r39 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "searchFlightForm.flightType." + flight_r39.flightType)), " ");
      }
    }

    function FlightsListComponent_th_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "flightsList.trip.label"));
      }
    }

    function FlightsListComponent_td_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "searchFlightForm.trip." + flight_r40.travelType)), " ");
      }
    }

    function FlightsListComponent_th_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "flightsList.departingFrom.label"));
      }
    }

    function FlightsListComponent_td_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r41 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, flight_r41.departureLocation), " ");
      }
    }

    function FlightsListComponent_th_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "flightsList.arrivingAt.label"));
      }
    }

    function FlightsListComponent_td_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r42 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, flight_r42.arrivalLocation), " ");
      }
    }

    function FlightsListComponent_th_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "flightsList.deparDate.label"));
      }
    }

    function FlightsListComponent_td_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "i18nDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r43 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, flight_r43.departureDate)), " ");
      }
    }

    function FlightsListComponent_th_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "flightsList.deparTime.label"));
      }
    }

    function FlightsListComponent_td_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r44 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, flight_r44.departureTime), " ");
      }
    }

    function FlightsListComponent_th_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "flightsList.arrivDate.label"));
      }
    }

    function FlightsListComponent_td_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "i18nDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r45 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, flight_r45.arrivalDate)), " ");
      }
    }

    function FlightsListComponent_th_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "flightsList.arrivTime.label"));
      }
    }

    function FlightsListComponent_td_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r46 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, flight_r46.arrivalTime), " ");
      }
    }

    function FlightsListComponent_th_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "flightsList.backDate.label"));
      }
    }

    function FlightsListComponent_td_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "i18nDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r47 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, flight_r47.backDate)), " ");
      }
    }

    function FlightsListComponent_th_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "flightsList.backTime.label"));
      }
    }

    function FlightsListComponent_td_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r48 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, flight_r48.backTime), " ");
      }
    }

    function FlightsListComponent_th_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "flightsList.flightDuration.label"));
      }
    }

    function FlightsListComponent_td_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r49 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, flight_r49.flightDuration), " ");
      }
    }

    function FlightsListComponent_th_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "flightsList.connection.label"));
      }
    }

    function FlightsListComponent_td_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r50 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, flight_r50.connectionDuration), " ");
      }
    }

    function FlightsListComponent_th_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "flightsList.aircraft.label"));
      }
    }

    function FlightsListComponent_td_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceNullValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r51 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, flight_r51.aircraftType), " ");
      }
    }

    function FlightsListComponent_th_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "flightsList.detail.label"));
      }
    }

    function FlightsListComponent_td_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightsListComponent_td_52_Template_mat_icon_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var flight_r52 = ctx.$implicit;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.getFlight(flight_r52.idFlight);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "assignment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-checkbox", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightsListComponent_td_52_Template_mat_checkbox_click_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          return $event.stopPropagation();
        })("change", function FlightsListComponent_td_52_Template_mat_checkbox_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var flight_r52 = ctx.$implicit;

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return $event ? ctx_r56.addRow(flight_r52) : null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flight_r52 = ctx.$implicit;

        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r32.selection.isSelected(flight_r52));
      }
    }

    function FlightsListComponent_tr_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 39);
      }
    }

    function FlightsListComponent_tr_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 40);
      }
    }

    function FlightsListComponent_ng_template_84_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 45, 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FlightsListComponent_ng_template_84_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-hint", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightsListComponent_ng_template_84_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r61.addBookmark();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, "flightsList.addBook.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, "flightsList.book.title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r36.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r58.value == null ? null : _r58.value.length) || 0, "/50");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, "flightsList.addBook.button"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 12, "flightsList.cancel.button"));
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 20];
    };

    var _c1 = function _c1(a0) {
      return {
        display: a0
      };
    };

    var FlightsListComponent = /*#__PURE__*/function () {
      function FlightsListComponent(flightsService, dialog, csvDataService) {
        _classCallCheck(this, FlightsListComponent);

        this.flightsService = flightsService;
        this.dialog = dialog;
        this.csvDataService = csvDataService;
        this.flights = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.selectedFlights = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.flightsTemp = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.displayBackButton = false;
        this.bookmarkTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayedColumns = ['companyName', 'flightType', 'travelType', 'departureDate', 'departureTime', 'arrivalDate', 'arrivalTime', 'backDate', 'backTime', 'departureLocation', 'arrivalLocation', 'select'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.flightsIds = [];
      }

      return _createClass(FlightsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.flights.paginator = this.paginator;
          this.flights.sort = this.matSort;

          var _iterator = _createForOfIteratorHelper(this.flights.data),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var flight = _step.value;
              this.flightsIds.push(flight.idFlight);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.flightsService.flightsIds = this.flightsIds;
          this.flightsTemp = this.flights;
        }
      }, {
        key: "getFlight",
        value: function getFlight(idFlight) {
          this.flightsService.getFlightDetails(idFlight);
        }
      }, {
        key: "addRow",
        value: function addRow(row) {
          if (!this.ifRowExist(row)) {
            this.selectedFlights.data.push(row);
          }
        }
      }, {
        key: "ifRowExist",
        value: function ifRowExist(row) {
          for (var i = 0; i < this.selectedFlights.data.length; ++i) {
            if (this.selectedFlights.data[i].idFlight === row.idFlight) {
              this.selectedFlights.data.splice(i, 1);
              return true;
            }
          }
        }
      }, {
        key: "getSelectedFlights",
        value: function getSelectedFlights() {
          this.selectedFlights.paginator = this.paginator;
          this.flights = this.selectedFlights;
          this.displayBackButton = true;
        }
      }, {
        key: "backToResultList",
        value: function backToResultList() {
          this.flightsTemp.paginator = this.paginator;
          this.flights = this.flightsTemp;
          this.displayBackButton = false;
        }
      }, {
        key: "openDialogWithRef",
        value: function openDialogWithRef(ref) {
          this.dialog.open(ref);
        }
      }, {
        key: "addBookmark",
        value: function addBookmark() {
          this.bookmarkTitle.emit(this.title);
        }
      }, {
        key: "exportCsv",
        value: function exportCsv() {
          this.csvDataService.downloadFile(this.flights.data);
        }
      }]);
    }();

    FlightsListComponent.ɵfac = function FlightsListComponent_Factory(t) {
      return new (t || FlightsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_flights_service__WEBPACK_IMPORTED_MODULE_3__["FlightsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_csvDataExporter_CsvDataService__WEBPACK_IMPORTED_MODULE_4__["CsvDataService"]));
    };

    FlightsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FlightsListComponent,
      selectors: [["app-flights-list"]],
      viewQuery: function FlightsListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matSort = _t.first);
        }
      },
      inputs: {
        flights: "flights"
      },
      outputs: {
        bookmarkTitle: "bookmarkTitle"
      },
      decls: 86,
      vars: 26,
      consts: [[1, "paginator"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["paginator", ""], ["id", "flights", 1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "idFlight"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "companyName"], ["matColumnDef", "flightType"], ["matColumnDef", "travelType"], ["matColumnDef", "departureLocation"], ["matColumnDef", "arrivalLocation"], ["matColumnDef", "departureDate"], ["matColumnDef", "departureTime"], ["matColumnDef", "arrivalDate"], ["matColumnDef", "arrivalTime"], ["matColumnDef", "backDate"], ["matColumnDef", "backTime"], ["matColumnDef", "flightDuration"], ["matColumnDef", "connectionDuration"], ["matColumnDef", "aircraftType"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["id", "mainBanner"], ["id", "buttonListBar"], [1, "firstLeft"], ["mat-raised-button", "", 3, "click"], [1, "firstRight", 3, "ngStyle"], [1, "nextRight"], ["bookmark", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["id", "details"], [3, "click"], [3, "checked", "click", "change"], ["mat-header-row", ""], ["mat-row", ""], ["matDialogTitle", ""], ["hintLabel", "3 to 50 characters"], ["matSuffix", ""], ["aria-hidden", "true", 1, "fa", "fa-bookmark-o"], ["matInput", "", "minlength", "3", "maxlength", "50", "id", "bookmarkTitle", "type", "text", "name", "bookmarkTitle", 3, "ngModel", "placeholder", "ngModelChange"], ["input", ""], ["align", "end"], ["mat-button", "", "matDialogClose", "", 1, "btnDialog", 3, "click"], ["mat-button", "", "matDialogClose", "", 1, "btnDialog"]],
      template: function FlightsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-paginator", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FlightsListComponent_th_6_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FlightsListComponent_td_7_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FlightsListComponent_th_9_Template, 3, 3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FlightsListComponent_td_10_Template, 4, 5, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FlightsListComponent_th_12_Template, 3, 3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FlightsListComponent_td_13_Template, 4, 5, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FlightsListComponent_th_15_Template, 3, 3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FlightsListComponent_td_16_Template, 4, 5, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FlightsListComponent_th_18_Template, 3, 3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FlightsListComponent_td_19_Template, 3, 3, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FlightsListComponent_th_21_Template, 3, 3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FlightsListComponent_td_22_Template, 3, 3, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FlightsListComponent_th_24_Template, 3, 3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FlightsListComponent_td_25_Template, 4, 5, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FlightsListComponent_th_27_Template, 3, 3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FlightsListComponent_td_28_Template, 3, 3, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FlightsListComponent_th_30_Template, 3, 3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FlightsListComponent_td_31_Template, 4, 5, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, FlightsListComponent_th_33_Template, 3, 3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, FlightsListComponent_td_34_Template, 3, 3, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, FlightsListComponent_th_36_Template, 3, 3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, FlightsListComponent_td_37_Template, 4, 5, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](38, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, FlightsListComponent_th_39_Template, 3, 3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, FlightsListComponent_td_40_Template, 3, 3, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, FlightsListComponent_th_42_Template, 3, 3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, FlightsListComponent_td_43_Template, 3, 3, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](44, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, FlightsListComponent_th_45_Template, 3, 3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, FlightsListComponent_td_46_Template, 3, 3, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](47, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, FlightsListComponent_th_48_Template, 3, 3, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, FlightsListComponent_td_49_Template, 3, 3, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](50, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, FlightsListComponent_th_51_Template, 3, 3, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, FlightsListComponent_td_52_Template, 6, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, FlightsListComponent_tr_53_Template, 1, 0, "tr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, FlightsListComponent_tr_54_Template, 1, 0, "tr", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightsListComponent_Template_button_click_61_listener() {
            return ctx.exportCsv();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "insert_drive_file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightsListComponent_Template_button_click_67_listener() {
            return ctx.getSelectedFlights();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "select_all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightsListComponent_Template_button_click_73_listener() {
            return ctx.backToResultList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "fast_rewind");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightsListComponent_Template_button_click_79_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

            var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](85);

            return ctx.openDialogWithRef(_r35);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "bookmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, FlightsListComponent_ng_template_84_Template, 18, 14, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.flights);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 11, "flightsList.listManag.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 13, "flightsList.export.label"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, !ctx.displayBackButton ? "inherit" : "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 15, "flightsList.select.label"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx.displayBackButton ? "inherit" : "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 17, "flightsList.backList.label"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 19, "flightsList.bookmark.label"), " ");
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckbox"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSuffix"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatHint"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _shared_util_pipes_replace_null_value_pipe__WEBPACK_IMPORTED_MODULE_8__["ReplaceNullValuePipe"], _shared_util_pipes_i18n_date_pipe__WEBPACK_IMPORTED_MODULE_9__["I18nDatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvY29tcG9uZW50cy9mbGlnaHRzLWxpc3QvZmxpZ2h0cy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-flights-list',
          templateUrl: './flights-list.component.html',
          styleUrls: ['./flights-list.component.css']
        }]
      }], function () {
        return [{
          type: _services_flights_service__WEBPACK_IMPORTED_MODULE_3__["FlightsService"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }, {
          type: _app_shared_csvDataExporter_CsvDataService__WEBPACK_IMPORTED_MODULE_4__["CsvDataService"]
        }];
      }, {
        flights: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bookmarkTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], {
            "static": true
          }]
        }],
        matSort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/flights/components/inflight-services/inflight-services.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/flights/components/inflight-services/inflight-services.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: InflightServicesComponent */

  /***/
  function srcAppFlightsComponentsInflightServicesInflightServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InflightServicesComponent", function () {
      return InflightServicesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _portal_top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../portal/top-right-side/top-right-side.component */
    "./src/app/portal/top-right-side/top-right-side.component.ts");
    /* harmony import */


    var _portal_top_side_top_side_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../portal/top-side/top-side.component */
    "./src/app/portal/top-side/top-side.component.ts");
    /* harmony import */


    var _portal_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../portal/left-side/left-side.component */
    "./src/app/portal/left-side/left-side.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../portal/bot-side/bot-side.component */
    "./src/app/portal/bot-side/bot-side.component.ts");
    /* harmony import */


    var _shared_util_directives_matElevationDirective__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/util/directives/matElevationDirective */
    "./src/app/shared/util/directives/matElevationDirective.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function InflightServicesComponent_mat_card_8_span_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InflightServicesComponent_mat_card_8_span_1_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InflightServicesComponent_mat_card_8_video_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InflightServicesComponent_mat_card_8_video_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InflightServicesComponent_mat_card_8_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
      }

      if (rf & 2) {
        var inflightService_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/imgs/", inflightService_r2.title, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function InflightServicesComponent_mat_card_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InflightServicesComponent_mat_card_8_Template_mat_card_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var inflightService_r2 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          return ctx_r10.cardClicked(inflightService_r2.title, _r0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InflightServicesComponent_mat_card_8_span_1_Template, 2, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InflightServicesComponent_mat_card_8_video_5_Template, 2, 0, "video", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InflightServicesComponent_mat_card_8_video_6_Template, 2, 0, "video", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InflightServicesComponent_mat_card_8_img_7_Template, 1, 1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var inflightService_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matElevation", ctx_r1.clicked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", inflightService_r2.title === ctx_r1.clickedTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](inflightService_r2.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", inflightService_r2.title === "Sit back and enjoy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", inflightService_r2.title === "Emirates Business Class");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", inflightService_r2.title !== "Sit back and enjoy" && inflightService_r2.title !== "Emirates Business Class");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", inflightService_r2.description, " ");
      }
    }

    var InflightServicesComponent = /*#__PURE__*/function () {
      function InflightServicesComponent(route, router) {
        _classCallCheck(this, InflightServicesComponent);

        this.route = route;
        this.router = router;
        this.headerLabel = 'headers.inflight.label';
        this.bdcrumbsLabel = 'bdcrumbs.search.label';
        this.showInflights = true;
        this.iconLabel = 'bookmark';
        this.clicked = false;
        this.InflightServices = this.router.getCurrentNavigation().extras.state.InflightServices;
      }

      return _createClass(InflightServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backToTheFlightDetails",
        value: function backToTheFlightDetails() {
          this.router.navigate(['/flights/details']);
        }
      }, {
        key: "cardClicked",
        value: function cardClicked(title, el) {
          this.clicked = true;
          this.clickedTitle = title;
          el.scrollIntoView();
        }
      }, {
        key: "close",
        value: function close() {
          this.clicked = false;
          this.clickedTitle = null;
        }
      }]);
    }();

    InflightServicesComponent.ɵfac = function InflightServicesComponent_Factory(t) {
      return new (t || InflightServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    InflightServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InflightServicesComponent,
      selectors: [["app-inflight-services"]],
      decls: 16,
      vars: 8,
      consts: [[3, "headerLabel", "bdcrumbsLabel", "showInflights", "iconLabel"], ["id", "mainContainer"], ["id", "mainMargin"], ["id", "main"], ["id", "cards", 1, "cards"], ["cards", ""], ["class", "card", 3, "matElevation", "click", 4, "ngFor", "ngForOf"], ["id", "view"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "card", 3, "matElevation", "click"], ["class", "close", 3, "click", 4, "ngIf"], ["width", "100%", "muted", "", "playsinline", "", "autoplay", "", "preload", "auto", "controls", "", 4, "ngIf"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 3, "src", 4, "ngIf"], [1, "close", 3, "click"], ["width", "100%", "muted", "", "playsinline", "", "autoplay", "", "preload", "auto", "controls", ""], ["src", "../../../../assets/imgs/Sit back and enjoy.mp4", "type", "video/mp4"], ["src", "../../../../assets/imgs/Emirates Business Class.mp4", "type", "video/mp4"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 3, "src"]],
      template: function InflightServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-right-side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-top-side", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-left-side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InflightServicesComponent_mat_card_8_Template, 12, 7, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InflightServicesComponent_Template_button_click_10_listener() {
            return ctx.backToTheFlightDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "chevron_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-bot-side");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerLabel", ctx.headerLabel)("bdcrumbsLabel", ctx.bdcrumbsLabel)("showInflights", ctx.showInflights)("iconLabel", ctx.iconLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.InflightServices);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 6, "DetailsPage.inflightBack.button"), " ");
        }
      },
      directives: [_portal_top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_3__["TopRightSideComponent"], _portal_top_side_top_side_component__WEBPACK_IMPORTED_MODULE_4__["TopSideComponent"], _portal_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_5__["LeftSideComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_8__["BotSideComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _shared_util_directives_matElevationDirective__WEBPACK_IMPORTED_MODULE_9__["MatElevationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvY29tcG9uZW50cy9pbmZsaWdodC1zZXJ2aWNlcy9pbmZsaWdodC1zZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("show", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          'z-index': '99 !important'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})) //zoom: '0%'
        ])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InflightServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inflight-services',
          templateUrl: './inflight-services.component.html',
          styleUrls: ['./inflight-services.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("show", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            'z-index': '99 !important'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})) //zoom: '0%'
          ])]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/flights/flights-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/flights/flights-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: FlightsRoutingModule */

  /***/
  function srcAppFlightsFlightsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightsRoutingModule", function () {
      return FlightsRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pages_flights_flights_details_flights_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/flights/flights-details/flights-details.component */
    "./src/app/flights/pages/flights/flights-details/flights-details.component.ts");
    /* harmony import */


    var _pages_flights_flights_page_flights_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/flights/flights-page/flights-page.component */
    "./src/app/flights/pages/flights/flights-page/flights-page.component.ts");
    /* harmony import */


    var _components_inflight_services_inflight_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/inflight-services/inflight-services.component */
    "./src/app/flights/components/inflight-services/inflight-services.component.ts");
    /* harmony import */


    var _pages_synthesis_synthesis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/synthesis/synthesis.component */
    "./src/app/flights/pages/synthesis/synthesis.component.ts");
    /* harmony import */


    var _pages_bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/bookmarks/bookmarks.component */
    "./src/app/flights/pages/bookmarks/bookmarks.component.ts");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/flights/pages/contact/contact.component.ts");
    /* harmony import */


    var _shared_util_resolvers_flight_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/util/resolvers/flight-resolver.service */
    "./src/app/shared/util/resolvers/flight-resolver.service.ts");

    var routes = [{
      path: 'search',
      component: _pages_flights_flights_page_flights_page_component__WEBPACK_IMPORTED_MODULE_3__["FlightsPageComponent"]
    }, {
      path: 'details',
      component: _pages_flights_flights_details_flights_details_component__WEBPACK_IMPORTED_MODULE_2__["FlightsDetailsComponent"],
      resolve: {
        flightDetails: _shared_util_resolvers_flight_resolver_service__WEBPACK_IMPORTED_MODULE_8__["FlightResolverService"]
      }
    }, {
      path: 'details/services',
      component: _components_inflight_services_inflight_services_component__WEBPACK_IMPORTED_MODULE_4__["InflightServicesComponent"]
    }, {
      path: 'synthesis',
      component: _pages_synthesis_synthesis_component__WEBPACK_IMPORTED_MODULE_5__["SynthesisComponent"]
    }, {
      path: 'bookmarks',
      component: _pages_bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_6__["BookmarksComponent"]
    }, {
      path: 'contact',
      component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    }];

    var FlightsRoutingModule = /*#__PURE__*/_createClass(function FlightsRoutingModule() {
      _classCallCheck(this, FlightsRoutingModule);
    });

    FlightsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: FlightsRoutingModule
    });
    FlightsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function FlightsRoutingModule_Factory(t) {
        return new (t || FlightsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FlightsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlightsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          declarations: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/flights/flights.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/flights/flights.module.ts ***!
    \*******************************************/

  /*! exports provided: FlightsModule */

  /***/
  function srcAppFlightsFlightsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightsModule", function () {
      return FlightsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _components_flights_list_flights_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/flights-list/flights-list.component */
    "./src/app/flights/components/flights-list/flights-list.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _pages_flights_flights_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/flights/flights.component */
    "./src/app/flights/pages/flights/flights.component.ts");
    /* harmony import */


    var _pages_flights_flights_page_flights_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/flights/flights-page/flights-page.component */
    "./src/app/flights/pages/flights/flights-page/flights-page.component.ts");
    /* harmony import */


    var _pages_flights_flights_details_flights_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/flights/flights-details/flights-details.component */
    "./src/app/flights/pages/flights/flights-details/flights-details.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _portal_portal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../portal/portal.module */
    "./src/app/portal/portal.module.ts");
    /* harmony import */


    var _components_flight_search_summary_flight_search_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/flight-search-summary/flight-search-summary.component */
    "./src/app/flights/components/flight-search-summary/flight-search-summary.component.ts");
    /* harmony import */


    var _components_flight_infos_flight_infos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/flight-infos/flight-infos.component */
    "./src/app/flights/components/flight-infos/flight-infos.component.ts");
    /* harmony import */


    var _components_cabin_details_cabin_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/cabin-details/cabin-details.component */
    "./src/app/flights/components/cabin-details/cabin-details.component.ts");
    /* harmony import */


    var _components_inflight_services_inflight_services_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/inflight-services/inflight-services.component */
    "./src/app/flights/components/inflight-services/inflight-services.component.ts");
    /* harmony import */


    var _components_action_bloc_action_bloc_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/action-bloc/action-bloc.component */
    "./src/app/flights/components/action-bloc/action-bloc.component.ts");
    /* harmony import */


    var _pages_synthesis_synthesis_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/synthesis/synthesis.component */
    "./src/app/flights/pages/synthesis/synthesis.component.ts");
    /* harmony import */


    var _pages_synthesis_synthesis_criteria_synthesis_criteria_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/synthesis/synthesis-criteria/synthesis-criteria.component */
    "./src/app/flights/pages/synthesis/synthesis-criteria/synthesis-criteria.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _pages_synthesis_synthesis_summary_synthesis_summary_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/synthesis/synthesis-summary/synthesis-summary.component */
    "./src/app/flights/pages/synthesis/synthesis-summary/synthesis-summary.component.ts");
    /* harmony import */


    var _pages_synthesis_synthesis_flights_synthesis_flights_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/synthesis/synthesis-flights/synthesis-flights.component */
    "./src/app/flights/pages/synthesis/synthesis-flights/synthesis-flights.component.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _pages_bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/bookmarks/bookmarks.component */
    "./src/app/flights/pages/bookmarks/bookmarks.component.ts");
    /* harmony import */


    var _pages_bookmarks_bookmarks_list_bookmarks_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/bookmarks/bookmarks-list/bookmarks-list.component */
    "./src/app/flights/pages/bookmarks/bookmarks-list/bookmarks-list.component.ts");
    /* harmony import */


    var _shared_util_pipes_replace_null_value_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../shared/util/pipes/replace-null-value.pipe */
    "./src/app/shared/util/pipes/replace-null-value.pipe.ts");
    /* harmony import */


    var _shared_util_pipes_i18n_date_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../shared/util/pipes/i18n-date.pipe */
    "./src/app/shared/util/pipes/i18n-date.pipe.ts");
    /* harmony import */


    var _pages_synthesis_synthesis_trip_synthesis_trip_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/synthesis/synthesis-trip/synthesis-trip.component */
    "./src/app/flights/pages/synthesis/synthesis-trip/synthesis-trip.component.ts");
    /* harmony import */


    var _flights_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./flights-routing.module */
    "./src/app/flights/flights-routing.module.ts");
    /* harmony import */


    var _authentification_authentification_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../authentification/authentification.module */
    "./src/app/authentification/authentification.module.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");
    /* harmony import */


    var _shared_util_directives_matElevationDirective__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ../shared/util/directives/matElevationDirective */
    "./src/app/shared/util/directives/matElevationDirective.ts");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/flights/pages/contact/contact.component.ts");
    /* harmony import */


    var _pages_contact_contact_criteria_contact_criteria_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pages/contact/contact-criteria/contact-criteria.component */
    "./src/app/flights/pages/contact/contact-criteria/contact-criteria.component.ts");

    var FlightsModule = /*#__PURE__*/_createClass(function FlightsModule() {
      _classCallCheck(this, FlightsModule);
    });

    FlightsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FlightsModule
    });
    FlightsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FlightsModule_Factory(t) {
        return new (t || FlightsModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _portal_portal_module__WEBPACK_IMPORTED_MODULE_9__["PortalModule"], _flights_routing_module__WEBPACK_IMPORTED_MODULE_26__["FlightsRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_20__["ChartsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _authentification_authentification_module__WEBPACK_IMPORTED_MODULE_27__["AuthentificationModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlightsModule, {
        declarations: [_components_flights_list_flights_list_component__WEBPACK_IMPORTED_MODULE_3__["FlightsListComponent"], _pages_flights_flights_component__WEBPACK_IMPORTED_MODULE_5__["FlightsComponent"], _pages_flights_flights_page_flights_page_component__WEBPACK_IMPORTED_MODULE_6__["FlightsPageComponent"], _pages_flights_flights_details_flights_details_component__WEBPACK_IMPORTED_MODULE_7__["FlightsDetailsComponent"], _components_flight_search_summary_flight_search_summary_component__WEBPACK_IMPORTED_MODULE_10__["FlightSearchSummaryComponent"], _components_flight_infos_flight_infos_component__WEBPACK_IMPORTED_MODULE_11__["FlightInfosComponent"], _components_cabin_details_cabin_details_component__WEBPACK_IMPORTED_MODULE_12__["CabinDetailsComponent"], _components_inflight_services_inflight_services_component__WEBPACK_IMPORTED_MODULE_13__["InflightServicesComponent"], _components_action_bloc_action_bloc_component__WEBPACK_IMPORTED_MODULE_14__["ActionBlocComponent"], _pages_synthesis_synthesis_component__WEBPACK_IMPORTED_MODULE_15__["SynthesisComponent"], _pages_synthesis_synthesis_criteria_synthesis_criteria_component__WEBPACK_IMPORTED_MODULE_16__["SynthesisCriteriaComponent"], _pages_synthesis_synthesis_summary_synthesis_summary_component__WEBPACK_IMPORTED_MODULE_18__["SynthesisSummaryComponent"], _pages_synthesis_synthesis_flights_synthesis_flights_component__WEBPACK_IMPORTED_MODULE_19__["SynthesisFlightsComponent"], _pages_bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_21__["BookmarksComponent"], _pages_bookmarks_bookmarks_list_bookmarks_list_component__WEBPACK_IMPORTED_MODULE_22__["BookmarksListComponent"], _shared_util_pipes_i18n_date_pipe__WEBPACK_IMPORTED_MODULE_24__["I18nDatePipe"], _shared_util_pipes_replace_null_value_pipe__WEBPACK_IMPORTED_MODULE_23__["ReplaceNullValuePipe"], _pages_synthesis_synthesis_trip_synthesis_trip_component__WEBPACK_IMPORTED_MODULE_25__["SynthesisTripComponent"], _shared_util_directives_matElevationDirective__WEBPACK_IMPORTED_MODULE_29__["MatElevationDirective"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_30__["ContactComponent"], _pages_contact_contact_criteria_contact_criteria_component__WEBPACK_IMPORTED_MODULE_31__["ContactCriteriaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _portal_portal_module__WEBPACK_IMPORTED_MODULE_9__["PortalModule"], _flights_routing_module__WEBPACK_IMPORTED_MODULE_26__["FlightsRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_20__["ChartsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _authentification_authentification_module__WEBPACK_IMPORTED_MODULE_27__["AuthentificationModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_flights_list_flights_list_component__WEBPACK_IMPORTED_MODULE_3__["FlightsListComponent"], _pages_flights_flights_component__WEBPACK_IMPORTED_MODULE_5__["FlightsComponent"], _pages_flights_flights_page_flights_page_component__WEBPACK_IMPORTED_MODULE_6__["FlightsPageComponent"], _pages_flights_flights_details_flights_details_component__WEBPACK_IMPORTED_MODULE_7__["FlightsDetailsComponent"], _components_flight_search_summary_flight_search_summary_component__WEBPACK_IMPORTED_MODULE_10__["FlightSearchSummaryComponent"], _components_flight_infos_flight_infos_component__WEBPACK_IMPORTED_MODULE_11__["FlightInfosComponent"], _components_cabin_details_cabin_details_component__WEBPACK_IMPORTED_MODULE_12__["CabinDetailsComponent"], _components_inflight_services_inflight_services_component__WEBPACK_IMPORTED_MODULE_13__["InflightServicesComponent"], _components_action_bloc_action_bloc_component__WEBPACK_IMPORTED_MODULE_14__["ActionBlocComponent"], _pages_synthesis_synthesis_component__WEBPACK_IMPORTED_MODULE_15__["SynthesisComponent"], _pages_synthesis_synthesis_criteria_synthesis_criteria_component__WEBPACK_IMPORTED_MODULE_16__["SynthesisCriteriaComponent"], _pages_synthesis_synthesis_summary_synthesis_summary_component__WEBPACK_IMPORTED_MODULE_18__["SynthesisSummaryComponent"], _pages_synthesis_synthesis_flights_synthesis_flights_component__WEBPACK_IMPORTED_MODULE_19__["SynthesisFlightsComponent"], _pages_bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_21__["BookmarksComponent"], _pages_bookmarks_bookmarks_list_bookmarks_list_component__WEBPACK_IMPORTED_MODULE_22__["BookmarksListComponent"], _shared_util_pipes_i18n_date_pipe__WEBPACK_IMPORTED_MODULE_24__["I18nDatePipe"], _shared_util_pipes_replace_null_value_pipe__WEBPACK_IMPORTED_MODULE_23__["ReplaceNullValuePipe"], _pages_synthesis_synthesis_trip_synthesis_trip_component__WEBPACK_IMPORTED_MODULE_25__["SynthesisTripComponent"], _shared_util_directives_matElevationDirective__WEBPACK_IMPORTED_MODULE_29__["MatElevationDirective"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_30__["ContactComponent"], _pages_contact_contact_criteria_contact_criteria_component__WEBPACK_IMPORTED_MODULE_31__["ContactCriteriaComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _portal_portal_module__WEBPACK_IMPORTED_MODULE_9__["PortalModule"], _flights_routing_module__WEBPACK_IMPORTED_MODULE_26__["FlightsRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_20__["ChartsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _authentification_authentification_module__WEBPACK_IMPORTED_MODULE_27__["AuthentificationModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/flights/pages/bookmarks/bookmarks-list/bookmarks-list.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/flights/pages/bookmarks/bookmarks-list/bookmarks-list.component.ts ***!
    \************************************************************************************/

  /*! exports provided: BookmarksListComponent */

  /***/
  function srcAppFlightsPagesBookmarksBookmarksListBookmarksListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarksListComponent", function () {
      return BookmarksListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../app/flights/services/flights.service */
    "./src/app/flights/services/flights.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function BookmarksListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookmarksListComponent_th_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookmarksListComponent_td_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bookmark_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bookmark_r18.idBookmark, " ");
      }
    }

    function BookmarksListComponent_th_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "bookmarkList.title"));
      }
    }

    function BookmarksListComponent_td_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bookmark_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bookmark_r19.title, " ");
      }
    }

    function BookmarksListComponent_th_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "bookmarkList.addingDate"));
      }
    }

    function BookmarksListComponent_td_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bookmark_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", bookmark_r20.addingDate, " ");
      }
    }

    function BookmarksListComponent_th_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "bookmarkList.nbFlights"));
      }
    }

    function BookmarksListComponent_td_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bookmark_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bookmark_r21.nbFlights, " ");
      }
    }

    function BookmarksListComponent_th_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "bookmarkList.view"));
      }
    }

    function BookmarksListComponent_td_20_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete bookmark");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Are you sure you want to delete this bookmark ?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookmarksListComponent_td_20_ng_template_8_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var bookmark_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.deleteBookmark(bookmark_r22);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 1, "flightsList.cancel.button"));
      }
    }

    function BookmarksListComponent_td_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookmarksListComponent_td_20_Template_mat_icon_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var bookmark_r22 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.viewBookmark(bookmark_r22.idBookmark);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "assignment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookmarksListComponent_td_20_Template_mat_icon_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.openDialogWithRef(_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BookmarksListComponent_td_20_ng_template_8_Template, 12, 3, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookmarksListComponent_tr_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
      }
    }

    function BookmarksListComponent_tr_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 32);
      }
    }

    function BookmarksListComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bookmarks List Management");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookmarksListComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "insert_drive_file");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookmarksListComponent_div_24_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          return ctx_r32.openDialogWithRef(_r16);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "delete_sweep");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Delete all ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, "flightsList.export.label"), " ");
      }
    }

    function BookmarksListComponent_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete All bookmarks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Are you sure you want to delete all bookmarks ?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookmarksListComponent_ng_template_25_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.deleteAllBookmark();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 1, "flightsList.cancel.button"));
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "display": a0
      };
    };

    var _c1 = function _c1() {
      return [5, 10, 20];
    };

    var BookmarksListComponent = /*#__PURE__*/function () {
      function BookmarksListComponent(flightsService, dialog) {
        _classCallCheck(this, BookmarksListComponent);

        this.flightsService = flightsService;
        this.dialog = dialog;
        this.bookmarks = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.loading = false;
        this.displayedColumns = ['idBookmark', 'title', 'addingDate', 'nbFlights', 'view'];
      }

      return _createClass(BookmarksListComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.getBookmarkSub.unsubscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.bookmarks.paginator = this.paginator;
          this.bookmarks.sort = this.matSort;
          this.loading = true;
          this.getBookmarkSub = this.flightsService.getBookmarkList().subscribe(function (bookmarks) {
            _this12.bookmarks.data = bookmarks;
            _this12.loading = false;
          });
        }
      }, {
        key: "viewBookmark",
        value: function viewBookmark(idBookmark) {
          this.flightsService.viewBookmark(idBookmark);
        }
      }, {
        key: "deleteBookmark",
        value: function deleteBookmark(bookmark) {
          var _this13 = this;

          this.flightsService.deleteBookmark(bookmark.idBookmark).subscribe(function (data) {
            var newData = _this13.bookmarks.data;
            newData.splice(newData.indexOf(bookmark), 1);
            _this13.bookmarks.data = newData;
          });
        }
      }, {
        key: "openDialogWithRef",
        value: function openDialogWithRef(ref) {
          this.dialog.open(ref);
        }
      }, {
        key: "deleteAllBookmark",
        value: function deleteAllBookmark() {
          var _this14 = this;

          this.flightsService.deleteAllBookmark().subscribe(function (data) {
            var newData = _this14.bookmarks.data;
            newData.splice(0, _this14.bookmarks.data.length);
            _this14.bookmarks.data = newData;
          });
        }
      }]);
    }();

    BookmarksListComponent.ɵfac = function BookmarksListComponent_Factory(t) {
      return new (t || BookmarksListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_3__["FlightsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    BookmarksListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookmarksListComponent,
      selectors: [["app-bookmarks-list"]],
      viewQuery: function BookmarksListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matSort = _t.first);
        }
      },
      decls: 27,
      vars: 15,
      consts: [["id", "loader", 4, "ngIf"], [1, "paginator", 3, "ngStyle"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["paginator", ""], ["id", "flights", 1, "mat-elevation-z8", 3, "ngStyle"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "idBookmark"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "addingDate"], ["matColumnDef", "nbFlights"], ["matColumnDef", "view"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["id", "mainBanner", 4, "ngIf"], ["id", "buttonListBar", 4, "ngIf"], ["delAllBookmark", ""], ["id", "loader"], ["alt", "Return to Home Page", "src", "../../../assets/imgs/ajax-wait.gif"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["id", "details"], [3, "click"], ["delBookmark", ""], ["matDialogTitle", ""], ["align", "end"], ["mat-button", "", "matDialogClose", "", 1, "btnDialog", 3, "click"], ["mat-button", "", "matDialogClose", "", 1, "btnDialog"], ["mat-header-row", ""], ["mat-row", ""], ["id", "mainBanner"], ["id", "buttonListBar"], [1, "firstLeft"], ["mat-raised-button", ""], [1, "firstRight"], ["mat-raised-button", "", 3, "click"]],
      template: function BookmarksListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookmarksListComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-paginator", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BookmarksListComponent_th_7_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BookmarksListComponent_td_8_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BookmarksListComponent_th_10_Template, 3, 3, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BookmarksListComponent_td_11_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BookmarksListComponent_th_13_Template, 3, 3, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BookmarksListComponent_td_14_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BookmarksListComponent_th_16_Template, 3, 3, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BookmarksListComponent_td_17_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BookmarksListComponent_th_19_Template, 3, 3, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BookmarksListComponent_td_20_Template, 10, 0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BookmarksListComponent_tr_21_Template, 1, 0, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BookmarksListComponent_tr_22_Template, 1, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BookmarksListComponent_div_23_Template, 3, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BookmarksListComponent_div_24_Template, 12, 3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BookmarksListComponent_ng_template_25_Template, 12, 3, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.loading ? "none" : "inherit"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.loading ? "none" : "inherit"))("@listAnimation", ctx.bookmarks.data.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.bookmarks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvcGFnZXMvYm9va21hcmtzL2Jvb2ttYXJrcy1saXN0L2Jvb2ttYXJrcy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("listAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("* => *", [// each time the binding value changes
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'translateX(0)',
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'translateX(100%)',
          opacity: 0
        }))], {
          optional: true
        })])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookmarksListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bookmarks-list',
          templateUrl: './bookmarks-list.component.html',
          styleUrls: ['./bookmarks-list.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("listAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("* => *", [// each time the binding value changes
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateX(0)',
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateX(100%)',
            opacity: 0
          }))], {
            optional: true
          })])])]
        }]
      }], function () {
        return [{
          type: _app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_3__["FlightsService"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], {
            "static": true
          }]
        }],
        matSort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/flights/pages/bookmarks/bookmarks.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/flights/pages/bookmarks/bookmarks.component.ts ***!
    \****************************************************************/

  /*! exports provided: BookmarksComponent */

  /***/
  function srcAppFlightsPagesBookmarksBookmarksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarksComponent", function () {
      return BookmarksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _portal_top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../portal/top-right-side/top-right-side.component */
    "./src/app/portal/top-right-side/top-right-side.component.ts");
    /* harmony import */


    var _portal_top_side_top_side_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../portal/top-side/top-side.component */
    "./src/app/portal/top-side/top-side.component.ts");
    /* harmony import */


    var _portal_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../portal/left-side/left-side.component */
    "./src/app/portal/left-side/left-side.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _bookmarks_list_bookmarks_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bookmarks-list/bookmarks-list.component */
    "./src/app/flights/pages/bookmarks/bookmarks-list/bookmarks-list.component.ts");
    /* harmony import */


    var _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../portal/bot-side/bot-side.component */
    "./src/app/portal/bot-side/bot-side.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function BookmarksComponent_mat_icon_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookmarksComponent_mat_icon_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_less");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "display": a0
      };
    };

    var BookmarksComponent = /*#__PURE__*/function () {
      function BookmarksComponent() {
        _classCallCheck(this, BookmarksComponent);

        this.headerLabel = 'headers.bookmarks.label';
        this.bdcrumbsLabel = 'bdcrumbs.bookmarks.label';
        this.showBookmark = true;
        this.isHidden = false;
        this.iconLabel = 'bookmark_border';
      }

      return _createClass(BookmarksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeVisibility",
        value: function changeVisibility() {
          this.isHidden = !this.isHidden;
        }
      }]);
    }();

    BookmarksComponent.ɵfac = function BookmarksComponent_Factory(t) {
      return new (t || BookmarksComponent)();
    };

    BookmarksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookmarksComponent,
      selectors: [["app-bookmarks"]],
      decls: 17,
      vars: 12,
      consts: [[3, "showBookmark", "headerLabel", "iconLabel", "bdcrumbsLabel"], ["id", "mainContainer"], ["id", "mainMargin"], ["id", "main"], ["id", "mainBanner"], [1, "expand", 3, "click"], [4, "ngIf"], [3, "ngStyle"]],
      template: function BookmarksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-right-side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-top-side", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-left-side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookmarksComponent_Template_span_click_11_listener() {
            return ctx.changeVisibility();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BookmarksComponent_mat_icon_12_Template, 2, 0, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BookmarksComponent_mat_icon_13_Template, 2, 0, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-bookmarks-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-bot-side");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showBookmark", ctx.showBookmark)("headerLabel", ctx.headerLabel)("iconLabel", ctx.iconLabel)("bdcrumbsLabel", ctx.bdcrumbsLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "bookmarkList.header"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHidden);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isHidden);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.isHidden ? "none" : "inherit"));
        }
      },
      directives: [_portal_top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_1__["TopRightSideComponent"], _portal_top_side_top_side_component__WEBPACK_IMPORTED_MODULE_2__["TopSideComponent"], _portal_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_3__["LeftSideComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _bookmarks_list_bookmarks_list_component__WEBPACK_IMPORTED_MODULE_5__["BookmarksListComponent"], _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_6__["BotSideComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvcGFnZXMvYm9va21hcmtzL2Jvb2ttYXJrcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookmarksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bookmarks',
          templateUrl: './bookmarks.component.html',
          styleUrls: ['./bookmarks.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/flights/pages/contact/contact-criteria/contact-criteria.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/flights/pages/contact/contact-criteria/contact-criteria.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ContactCriteriaComponent */

  /***/
  function srcAppFlightsPagesContactContactCriteriaContactCriteriaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactCriteriaComponent", function () {
      return ContactCriteriaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_util_matchValidators_errorStateMatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/util/matchValidators/errorStateMatcher */
    "./src/app/shared/util/matchValidators/errorStateMatcher.ts");
    /* harmony import */


    var src_app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/flights/services/flights.service */
    "./src/app/flights/services/flights.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function ContactCriteriaComponent_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.emailvalid.label"));
      }
    }

    function ContactCriteriaComponent_mat_error_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "authPage.emailrequired.label"));
      }
    }

    function ContactCriteriaComponent_mat_error_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Object is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactCriteriaComponent_mat_error_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Message is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactCriteriaComponent_div_24_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);
      }
    }

    function ContactCriteriaComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactCriteriaComponent_div_24_img_1_Template, 1, 0, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.loading);
      }
    }

    var ContactCriteriaComponent = /*#__PURE__*/function () {
      function ContactCriteriaComponent(formBuilder, flightsService, _snackBar) {
        _classCallCheck(this, ContactCriteriaComponent);

        this.formBuilder = formBuilder;
        this.flightsService = flightsService;
        this._snackBar = _snackBar;
        this.matcher = new src_app_shared_util_matchValidators_errorStateMatcher__WEBPACK_IMPORTED_MODULE_2__["MyErrorStateMatcher"]();
        this.adress = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.object = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.content = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.loading = false;
      }

      return _createClass(ContactCriteriaComponent, [{
        key: "contactControls",
        get: function get() {
          return this.contactForm.controls;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.contactForm = this.formBuilder.group({
            adress: this.adress,
            password: this.password,
            object: this.object,
            content: this.content
          });
        }
      }, {
        key: "send",
        value: function send() {
          var _this15 = this;

          //this.submitted = true;
          // stop here if form is invalid
          if (this.contactForm.invalid) {
            return;
          }

          this.loading = true;
          this.flightsService.contact({
            adress: this.contactControls.adress.value,
            password: this.contactControls.password.value,
            object: this.contactControls.object.value,
            content: this.contactControls.content.value
          }).subscribe(function (res) {
            _this15.loading = false;

            _this15._snackBar.open('Message sent succesfully!', null, {
              duration: 2000,
              panelClass: ['blue-snackbar']
            }); // this.router.navigate(['/authentification/login']);

          }, function (error) {
            _this15.loading = false;

            _this15._snackBar.open('Message not sent !', null, {
              duration: 2000,
              panelClass: ['blue-snackbar']
            });
          });
        }
      }]);
    }();

    ContactCriteriaComponent.ɵfac = function ContactCriteriaComponent_Factory(t) {
      return new (t || ContactCriteriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_3__["FlightsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
    };

    ContactCriteriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactCriteriaComponent,
      selectors: [["app-contact-criteria"]],
      decls: 35,
      vars: 12,
      consts: [["name", "contactForm", "id", "contactForm", 3, "formGroup"], ["id", "search"], [1, "search"], ["id", "email"], [1, "email"], ["matInput", "", "formControlName", "adress", 3, "errorStateMatcher"], [4, "ngIf"], [1, "object"], ["matInput", "", "formControlName", "object", 3, "errorStateMatcher"], [1, "content"], ["matInput", "", "formControlName", "content", 3, "errorStateMatcher"], ["id", "loader", 4, "ngIf"], ["id", "buttonBar"], [1, "firstRight"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "nextRight"], ["mat-raised-button", ""], ["id", "loader"], ["alt", "Return to Home Page", "src", "../../../assets/imgs/ajax-wait.gif", 4, "ngIf"], ["alt", "Return to Home Page", "src", "../../../assets/imgs/ajax-wait.gif"]],
      template: function ContactCriteriaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContactCriteriaComponent_mat_error_8_Template, 3, 3, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ContactCriteriaComponent_mat_error_9_Template, 3, 3, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Object*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContactCriteriaComponent_mat_error_16_Template, 2, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Message*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ContactCriteriaComponent_mat_error_22_Template, 2, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ContactCriteriaComponent_div_24_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactCriteriaComponent_Template_button_click_27_listener() {
            return ctx.send();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Send ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adress.hasError("email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adress.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.object.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 10, "searchFlightForm.cancelButton.label"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatError"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvcGFnZXMvY29udGFjdC9jb250YWN0LWNyaXRlcmlhL2NvbnRhY3QtY3JpdGVyaWEuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactCriteriaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-criteria',
          templateUrl: './contact-criteria.component.html',
          styleUrls: ['./contact-criteria.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_3__["FlightsService"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/flights/pages/contact/contact.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/flights/pages/contact/contact.component.ts ***!
    \************************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppFlightsPagesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _portal_top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../portal/top-right-side/top-right-side.component */
    "./src/app/portal/top-right-side/top-right-side.component.ts");
    /* harmony import */


    var _portal_top_side_top_side_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../portal/top-side/top-side.component */
    "./src/app/portal/top-side/top-side.component.ts");
    /* harmony import */


    var _portal_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../portal/left-side/left-side.component */
    "./src/app/portal/left-side/left-side.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _contact_criteria_contact_criteria_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact-criteria/contact-criteria.component */
    "./src/app/flights/pages/contact/contact-criteria/contact-criteria.component.ts");
    /* harmony import */


    var _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../portal/bot-side/bot-side.component */
    "./src/app/portal/bot-side/bot-side.component.ts");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      return _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 15,
      vars: 0,
      consts: [["id", "mainContainer"], ["id", "mainMargin"], ["id", "main"], ["id", "mainBanner"], [1, "expand"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-right-side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-top-side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-left-side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "expand_less");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-contact-criteria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-bot-side");
        }
      },
      directives: [_portal_top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_1__["TopRightSideComponent"], _portal_top_side_top_side_component__WEBPACK_IMPORTED_MODULE_2__["TopSideComponent"], _portal_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_3__["LeftSideComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _contact_criteria_contact_criteria_component__WEBPACK_IMPORTED_MODULE_5__["ContactCriteriaComponent"], _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_6__["BotSideComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/flights/pages/flights/flights-details/flights-details.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/flights/pages/flights/flights-details/flights-details.component.ts ***!
    \************************************************************************************/

  /*! exports provided: FlightsDetailsComponent */

  /***/
  function srcAppFlightsPagesFlightsFlightsDetailsFlightsDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightsDetailsComponent", function () {
      return FlightsDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../app/flights/services/flights.service */
    "./src/app/flights/services/flights.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _portal_top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../portal/top-right-side/top-right-side.component */
    "./src/app/portal/top-right-side/top-right-side.component.ts");
    /* harmony import */


    var _portal_top_side_top_side_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../portal/top-side/top-side.component */
    "./src/app/portal/top-side/top-side.component.ts");
    /* harmony import */


    var _portal_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../portal/left-side/left-side.component */
    "./src/app/portal/left-side/left-side.component.ts");
    /* harmony import */


    var _components_action_bloc_action_bloc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../components/action-bloc/action-bloc.component */
    "./src/app/flights/components/action-bloc/action-bloc.component.ts");
    /* harmony import */


    var _components_flight_infos_flight_infos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../components/flight-infos/flight-infos.component */
    "./src/app/flights/components/flight-infos/flight-infos.component.ts");
    /* harmony import */


    var _components_cabin_details_cabin_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../components/cabin-details/cabin-details.component */
    "./src/app/flights/components/cabin-details/cabin-details.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../portal/bot-side/bot-side.component */
    "./src/app/portal/bot-side/bot-side.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var FlightsDetailsComponent = /*#__PURE__*/function () {
      function FlightsDetailsComponent(flightsService, router, route) {
        _classCallCheck(this, FlightsDetailsComponent);

        this.flightsService = flightsService;
        this.router = router;
        this.route = route;
        this.headerLabel = 'headers.details.label';
        this.bdcrumbsLabel = 'bdcrumbs.search.label';
        this.showDetails = true;
        this.iconLabel = 'assignment';
      }

      return _createClass(FlightsDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          //this.flightDetails = this.flightsService.flightDetails;
          this.route.data.subscribe(function (data) {
            _this16.flightDetails = data['flightDetails'];

            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(_this16.flightDetails)) {
              localStorage.setItem('flightDetails', JSON.stringify(_this16.flightDetails));
            }
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.flightDetails)) {
            this.flightDetails = JSON.parse(localStorage.getItem('flightDetails'));
            localStorage.removeItem('flightDetails');
          }

          this.navigationExtras = {
            state: {
              InflightServices: this.flightDetails.inflightInfos
            },
            relativeTo: this.route
          };
        }
      }, {
        key: "viewInflightServices",
        value: function viewInflightServices() {
          this.router.navigate(['services'], this.navigationExtras);
        }
      }]);
    }();

    FlightsDetailsComponent.ɵfac = function FlightsDetailsComponent_Factory(t) {
      return new (t || FlightsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_3__["FlightsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    FlightsDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FlightsDetailsComponent,
      selectors: [["app-flights-details"]],
      decls: 20,
      vars: 13,
      consts: [[3, "headerLabel", "bdcrumbsLabel", "showDetails", "iconLabel"], ["id", "mainContainer"], ["id", "mainMargin"], ["id", "main"], [3, "flightAction"], [3, "flightInfos"], ["id", "mainBanner"], ["id", "view"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function FlightsDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-right-side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-top-side", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-left-side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-action-bloc", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-flight-infos", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-cabin-details", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightsDetailsComponent_Template_button_click_14_listener() {
            return ctx.viewInflightServices();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "chevron_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-bot-side");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerLabel", ctx.headerLabel)("bdcrumbsLabel", ctx.bdcrumbsLabel)("showDetails", ctx.showDetails)("iconLabel", ctx.iconLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flightAction", ctx.flightDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flightInfos", ctx.flightDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flightInfos", ctx.flightDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, "DetailsPage.inflight.header"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, "DetailsPage.inflight.button"), " ");
        }
      },
      directives: [_portal_top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_5__["TopRightSideComponent"], _portal_top_side_top_side_component__WEBPACK_IMPORTED_MODULE_6__["TopSideComponent"], _portal_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_7__["LeftSideComponent"], _components_action_bloc_action_bloc_component__WEBPACK_IMPORTED_MODULE_8__["ActionBlocComponent"], _components_flight_infos_flight_infos_component__WEBPACK_IMPORTED_MODULE_9__["FlightInfosComponent"], _components_cabin_details_cabin_details_component__WEBPACK_IMPORTED_MODULE_10__["CabinDetailsComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_12__["BotSideComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvcGFnZXMvZmxpZ2h0cy9mbGlnaHRzLWRldGFpbHMvZmxpZ2h0cy1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(100%)',
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(0%)',
          'opacity': 1
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(0%)',
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(100%)',
          'opacity': 0
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightsDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-flights-details',
          templateUrl: './flights-details.component.html',
          styleUrls: ['./flights-details.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(100%)',
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(0%)',
            'opacity': 1
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(0%)',
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(100%)',
            'opacity': 0
          }))])])]
        }]
      }], function () {
        return [{
          type: _app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_3__["FlightsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/flights/pages/flights/flights-page/flights-page.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/flights/pages/flights/flights-page/flights-page.component.ts ***!
    \******************************************************************************/

  /*! exports provided: FlightsPageComponent */

  /***/
  function srcAppFlightsPagesFlightsFlightsPageFlightsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightsPageComponent", function () {
      return FlightsPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_models_flight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../app/shared/models/flight */
    "./src/app/shared/models/flight.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _app_shared_models_bookmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../app/shared/models/bookmark */
    "./src/app/shared/models/bookmark.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../app/flights/services/flights.service */
    "./src/app/flights/services/flights.service.ts");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _portal_top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../portal/top-right-side/top-right-side.component */
    "./src/app/portal/top-right-side/top-right-side.component.ts");
    /* harmony import */


    var _portal_top_side_top_side_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../portal/top-side/top-side.component */
    "./src/app/portal/top-side/top-side.component.ts");
    /* harmony import */


    var _portal_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../portal/left-side/left-side.component */
    "./src/app/portal/left-side/left-side.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../shared/components/search-form/search-form.component */
    "./src/app/shared/components/search-form/search-form.component.ts");
    /* harmony import */


    var _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../portal/bot-side/bot-side.component */
    "./src/app/portal/bot-side/bot-side.component.ts");
    /* harmony import */


    var _components_flight_search_summary_flight_search_summary_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../components/flight-search-summary/flight-search-summary.component */
    "./src/app/flights/components/flight-search-summary/flight-search-summary.component.ts");
    /* harmony import */


    var _components_flights_list_flights_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../components/flights-list/flights-list.component */
    "./src/app/flights/components/flights-list/flights-list.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function FlightsPageComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "errorMessage.emptyData.label"));
      }
    }

    function FlightsPageComponent_h3_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "searchFlightForm.header.label"));
      }
    }

    function FlightsPageComponent_h3_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "searchFlightForm.Filter.label"));
      }
    }

    function FlightsPageComponent_mat_icon_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FlightsPageComponent_mat_icon_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_less");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FlightsPageComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FlightsPageComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "flightsList.searchResult.label"));
      }
    }

    function FlightsPageComponent_div_18_app_flight_search_summary_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-flight-search-summary", 16);
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("remontedResult", ctx_r9.remontedResult);
      }
    }

    function FlightsPageComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FlightsPageComponent_div_18_app_flight_search_summary_1_Template, 1, 1, "app-flight-search-summary", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.loading);
      }
    }

    function FlightsPageComponent_div_19_app_flights_list_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-flights-list", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bookmarkTitle", function FlightsPageComponent_div_19_app_flights_list_1_Template_app_flights_list_bookmarkTitle_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.addBookmark($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flights", ctx_r10.flightsData);
      }
    }

    function FlightsPageComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FlightsPageComponent_div_19_app_flights_list_1_Template, 1, 1, "app-flights-list", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.loading);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "display": a0
      };
    };

    var FlightsPageComponent = /*#__PURE__*/function () {
      function FlightsPageComponent(flightsService, sharedService, _snackBar) {
        _classCallCheck(this, FlightsPageComponent);

        this.flightsService = flightsService;
        this.sharedService = sharedService;
        this._snackBar = _snackBar;
        this.flightsData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.isHiddenSearch = false;
        this.show = false;
        this.emptyData = false;
        this.loading = false;
        this.headerLabel = 'headers.home.label';
        this.iconLabel = 'search';
        this.bdcrumbsLabel = 'bdcrumbs.search.label';
        this.subscriptions = [];
        this.flights = [];
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
      }

      return _createClass(FlightsPageComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.flights.push(new _app_shared_models_flight__WEBPACK_IMPORTED_MODULE_1__["Flight"]());
        }
      }, {
        key: "searchFlights",
        value: function searchFlights(flightCriteria) {
          var _this17 = this;

          this.flightCriteria = flightCriteria;
          this.isHiddenSearch = true;
          this.loading = true;
          this.subscriptions.push(this.flightsService.searchFlights(flightCriteria).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (_err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_this17.flights);
          })).subscribe(function (flightsList) {
            _this17.flightsData.data = flightsList;
            _this17.remontedResult = flightsList.length;
            _this17.loading = false;

            if (_this17.remontedResult === 0) {
              _this17.emptyData = true;
              _this17.show = false;
              _this17.isHiddenSearch = false;
            } else {
              _this17.sharedService.remontedResultSub = _this17.remontedResult;
              _this17.sharedService.haveResult = true;
              _this17.show = true;
              _this17.emptyData = false;
            }
          }));
        }
      }, {
        key: "changeVisibilitySearchForm",
        value: function changeVisibilitySearchForm() {
          this.isHiddenSearch = !this.isHiddenSearch;
        }
      }, {
        key: "showFlightsList",
        value: function showFlightsList(showList) {
          this.show = showList;
        }
      }, {
        key: "addBookmark",
        value: function addBookmark(title) {
          var _this18 = this;

          var bookmark = new _app_shared_models_bookmark__WEBPACK_IMPORTED_MODULE_3__["Bookmark"]();
          bookmark.title = title;
          bookmark.addingDate = new Date();
          bookmark.flightCriteria = this.flightCriteria;
          bookmark.nbFlights = this.remontedResult;
          this.subscriptions.push(this.flightsService.addBookmark(bookmark).subscribe(function (data) {
            _this18._snackBar.open('Bookmark added successfully !', null, {
              duration: 2000,
              horizontalPosition: _this18.horizontalPosition,
              verticalPosition: _this18.verticalPosition,
              panelClass: ['blue-snackbar']
            });
          }));
        }
      }]);
    }();

    FlightsPageComponent.ɵfac = function FlightsPageComponent_Factory(t) {
      return new (t || FlightsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_7__["FlightsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
    };

    FlightsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FlightsPageComponent,
      selectors: [["app-flights-page"]],
      decls: 21,
      vars: 16,
      consts: [[3, "show", "headerLabel", "iconLabel", "bdcrumbsLabel"], ["id", "mainContainer"], ["id", "mainMargin"], ["id", "main"], ["class", "t-error", "id", "ferror", 4, "ngIf"], ["id", "mainBanner"], [4, "ngIf"], [1, "expand", 3, "click"], [3, "ngStyle"], [3, "onSearch", "showFlightsList"], ["id", "loader", 4, "ngIf"], ["id", "mainBanner", 4, "ngIf"], ["id", "ferror", 1, "t-error"], ["id", "loader"], ["alt", "Return to Home Page", "src", "../../../assets/imgs/ajax-wait.gif"], [3, "remontedResult", 4, "ngIf"], [3, "remontedResult"], [3, "flights", "bookmarkTitle", 4, "ngIf"], [3, "flights", "bookmarkTitle"]],
      template: function FlightsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-right-side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-top-side", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-left-side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FlightsPageComponent_div_6_Template, 5, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FlightsPageComponent_h3_8_Template, 3, 3, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FlightsPageComponent_h3_9_Template, 3, 3, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlightsPageComponent_Template_span_click_11_listener() {
            return ctx.changeVisibilitySearchForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FlightsPageComponent_mat_icon_12_Template, 2, 0, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FlightsPageComponent_mat_icon_13_Template, 2, 0, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-search-form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSearch", function FlightsPageComponent_Template_app_search_form_onSearch_15_listener($event) {
            return ctx.searchFlights($event);
          })("showFlightsList", function FlightsPageComponent_Template_app_search_form_showFlightsList_15_listener($event) {
            return ctx.showFlightsList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FlightsPageComponent_div_16_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FlightsPageComponent_div_17_Template, 4, 3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FlightsPageComponent_div_18_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FlightsPageComponent_div_19_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-bot-side");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("headerLabel", ctx.headerLabel)("iconLabel", ctx.iconLabel)("bdcrumbsLabel", ctx.bdcrumbsLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emptyData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHiddenSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isHiddenSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.isHiddenSearch ? "none" : "inherit"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        }
      },
      directives: [_portal_top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_9__["TopRightSideComponent"], _portal_top_side_top_side_component__WEBPACK_IMPORTED_MODULE_10__["TopSideComponent"], _portal_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_11__["LeftSideComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _shared_components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_13__["SearchFormComponent"], _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_14__["BotSideComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _components_flight_search_summary_flight_search_summary_component__WEBPACK_IMPORTED_MODULE_15__["FlightSearchSummaryComponent"], _components_flights_list_flights_list_component__WEBPACK_IMPORTED_MODULE_16__["FlightsListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvcGFnZXMvZmxpZ2h0cy9mbGlnaHRzLXBhZ2UvZmxpZ2h0cy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])("orientAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])("* => *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 1,
          transform: 'scale(1) translateY(0)'
        }))], {
          optional: true
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('2000ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'scale(1)',
          offset: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          transform: 'scale(0.5) translateX(-25%) rotate(0)',
          offset: 0.35
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0,
          transform: 'translateX(-50%) rotate(-180deg) scale(6)',
          offset: 1
        })]))], {
          optional: true
        })])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-flights-page',
          templateUrl: './flights-page.component.html',
          styleUrls: ['./flights-page.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])("orientAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])("* => *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'scale(0) translateY(100%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            opacity: 1,
            transform: 'scale(1) translateY(0)'
          }))], {
            optional: true
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('2000ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            transform: 'scale(1)',
            offset: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            transform: 'scale(0.5) translateX(-25%) rotate(0)',
            offset: 0.35
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            opacity: 0,
            transform: 'translateX(-50%) rotate(-180deg) scale(6)',
            offset: 1
          })]))], {
            optional: true
          })])])]
        }]
      }], function () {
        return [{
          type: _app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_7__["FlightsService"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/flights/pages/flights/flights.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/flights/pages/flights/flights.component.ts ***!
    \************************************************************/

  /*! exports provided: FlightsComponent */

  /***/
  function srcAppFlightsPagesFlightsFlightsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightsComponent", function () {
      return FlightsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FlightsComponent = /*#__PURE__*/function () {
      function FlightsComponent(sharedService) {
        _classCallCheck(this, FlightsComponent);

        this.sharedService = sharedService;
      }

      return _createClass(FlightsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    FlightsComponent.ɵfac = function FlightsComponent_Factory(t) {
      return new (t || FlightsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]));
    };

    FlightsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FlightsComponent,
      selectors: [["app-flights"]],
      decls: 1,
      vars: 0,
      template: function FlightsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvcGFnZXMvZmxpZ2h0cy9mbGlnaHRzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-flights',
          templateUrl: './flights.component.html',
          styleUrls: ['./flights.component.css']
        }]
      }], function () {
        return [{
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/flights/pages/synthesis/synthesis-criteria/synthesis-criteria.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/flights/pages/synthesis/synthesis-criteria/synthesis-criteria.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: SynthesisCriteriaComponent */

  /***/
  function srcAppFlightsPagesSynthesisSynthesisCriteriaSynthesisCriteriaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SynthesisCriteriaComponent", function () {
      return SynthesisCriteriaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/datepicker.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var SynthesisCriteriaComponent = /*#__PURE__*/function () {
      function SynthesisCriteriaComponent(sharedService) {
        _classCallCheck(this, SynthesisCriteriaComponent);

        this.sharedService = sharedService;
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      return _createClass(SynthesisCriteriaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.synthesisForm = this.sharedService.synthesisForm;

          if (this.sharedService.syntheseHaveResult) {
            this.doSynthesis();
          }
        }
      }, {
        key: "doSynthesis",
        value: function doSynthesis() {
          var synthesisCriteriaValues = this.synthesisForm.value;
          this.onSearch.emit(synthesisCriteriaValues);
        }
      }]);
    }();

    SynthesisCriteriaComponent.ɵfac = function SynthesisCriteriaComponent_Factory(t) {
      return new (t || SynthesisCriteriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]));
    };

    SynthesisCriteriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SynthesisCriteriaComponent,
      selectors: [["app-synthesis-criteria"]],
      outputs: {
        onSearch: "onSearch"
      },
      decls: 34,
      vars: 17,
      consts: [["name", "synthesisForm", "id", "synthesisForm", 3, "formGroup"], ["id", "search"], [1, "search"], [1, "inline"], [1, "left"], ["matInput", "", "formControlName", "departureDateMin", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "right"], ["matInput", "", "formControlName", "departureDateMax", 3, "matDatepicker"], ["picker1", ""], ["id", "buttonBar"], [1, "firstRight"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "nextRight"], ["mat-raised-button", ""]],
      template: function SynthesisCriteriaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-datepicker-toggle", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-datepicker", null, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-datepicker-toggle", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-datepicker", null, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SynthesisCriteriaComponent_Template_button_click_25_listener() {
            return ctx.doSynthesis();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "pie_chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.synthesisForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, "searchFlightForm.deparDateMin.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 11, "searchFlightForm.deparDateMax.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 13, "searchFlightForm.synthesisButton.label"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 15, "searchFlightForm.cancelButton.label"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerToggle"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepicker"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvcGFnZXMvc3ludGhlc2lzL3N5bnRoZXNpcy1jcml0ZXJpYS9zeW50aGVzaXMtY3JpdGVyaWEuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SynthesisCriteriaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-synthesis-criteria',
          templateUrl: './synthesis-criteria.component.html',
          styleUrls: ['./synthesis-criteria.component.css']
        }]
      }], function () {
        return [{
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]
        }];
      }, {
        onSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/flights/pages/synthesis/synthesis-flights/synthesis-flights.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/flights/pages/synthesis/synthesis-flights/synthesis-flights.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: SynthesisFlightsComponent */

  /***/
  function srcAppFlightsPagesSynthesisSynthesisFlightsSynthesisFlightsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SynthesisFlightsComponent", function () {
      return SynthesisFlightsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_util_pipes_i18n_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/util/pipes/i18n-date.pipe */
    "./src/app/shared/util/pipes/i18n-date.pipe.ts");

    var SynthesisFlightsComponent = /*#__PURE__*/function () {
      function SynthesisFlightsComponent() {
        _classCallCheck(this, SynthesisFlightsComponent);
      }

      return _createClass(SynthesisFlightsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    SynthesisFlightsComponent.ɵfac = function SynthesisFlightsComponent_Factory(t) {
      return new (t || SynthesisFlightsComponent)();
    };

    SynthesisFlightsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SynthesisFlightsComponent,
      selectors: [["app-synthesis-flights"]],
      inputs: {
        nbFlights: "nbFlights",
        synthesisCriteria: "synthesisCriteria"
      },
      decls: 21,
      vars: 16,
      consts: [["id", "result", 1, "t-data-grid"], [1, "t-data-grid"]],
      template: function SynthesisFlightsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "i18nDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "i18nDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "searchFlightForm.deparDateMin.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, "searchFlightForm.deparDateMax.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, "bookmarkList.nbFlights"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, ctx.synthesisCriteria.departureDateMin));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 14, ctx.synthesisCriteria.departureDateMax));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nbFlights);
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], _shared_util_pipes_i18n_date_pipe__WEBPACK_IMPORTED_MODULE_2__["I18nDatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvcGFnZXMvc3ludGhlc2lzL3N5bnRoZXNpcy1mbGlnaHRzL3N5bnRoZXNpcy1mbGlnaHRzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SynthesisFlightsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-synthesis-flights',
          templateUrl: './synthesis-flights.component.html',
          styleUrls: ['./synthesis-flights.component.css']
        }]
      }], function () {
        return [];
      }, {
        nbFlights: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        synthesisCriteria: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/flights/pages/synthesis/synthesis-summary/synthesis-summary.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/flights/pages/synthesis/synthesis-summary/synthesis-summary.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: SynthesisSummaryComponent */

  /***/
  function srcAppFlightsPagesSynthesisSynthesisSummarySynthesisSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SynthesisSummaryComponent", function () {
      return SynthesisSummaryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _shared_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/theme/theme.service */
    "./src/app/shared/theme/theme.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    function SynthesisSummaryComponent_tr_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var synthesisCompany_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "searchFlightForm.company." + synthesisCompany_r1.companyName));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](synthesisCompany_r1.nbFlights);
      }
    }

    var SynthesisSummaryComponent = /*#__PURE__*/function () {
      function SynthesisSummaryComponent(themeService, translateService) {
        _classCallCheck(this, SynthesisSummaryComponent);

        this.themeService = themeService;
        this.translateService = translateService;
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartType = 'pie';
        this.totalFlights = 0;
        this.colors = [];
        this.synthesisCompanies = [];
      }

      return _createClass(SynthesisSummaryComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.colorsSubscription.unsubscribe();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this19 = this;

          this.pieChartLabels = [];
          this.pieChartData = [];
          this.totalFlights = 0;
          this.synthesisCompanies.forEach(function (row) {
            _this19.totalFlights = _this19.totalFlights + row.nbFlights;
          });
          this.synthesisCompanies.forEach(function (row) {
            _this19.pieChartLabels.push(_this19.translateService.instant('searchFlightForm.company.' + row.companyName));

            _this19.pieChartData.push(+(row.nbFlights / _this19.totalFlights * 100).toFixed(2));
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.colorsSubscription = this.themeService.colorsSub.subscribe(function (colors) {
            _this20.colors = colors;
          });
          var constract = localStorage.getItem('constractType');

          if (constract === 'high') {
            this.colors = [{
              backgroundColor: ['#03257A', '#EEEEEE', '#D3D3D3']
            }];
          } else if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(constract) || constract === 'normal') {
            this.colors = [{
              backgroundColor: ['#3f51b5', '#EAF9FF', '#B2CDD7']
            }];
          }
        }
      }]);
    }();

    SynthesisSummaryComponent.ɵfac = function SynthesisSummaryComponent_Factory(t) {
      return new (t || SynthesisSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
    };

    SynthesisSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SynthesisSummaryComponent,
      selectors: [["app-synthesis-summary"]],
      inputs: {
        synthesisCompanies: "synthesisCompanies"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 12,
      vars: 13,
      consts: [["id", "result", 1, "t-data-grid", "left"], [1, "t-data-grid"], [4, "ngFor", "ngForOf"], [1, "right", 2, "display", "block"], ["baseChart", "", "width", "600", "height", "300", 3, "data", "labels", "chartType", "colors"]],
      template: function SynthesisSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SynthesisSummaryComponent_tr_9_Template, 6, 4, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "canvas", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@tableAnimation", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, "flightsList.company.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, "bookmarkList.nbFlights"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.synthesisCompanies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@pieAnimation", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("chartType", ctx.pieChartType)("colors", ctx.colors);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvcGFnZXMvc3ludGhlc2lzL3N5bnRoZXNpcy1zdW1tYXJ5L3N5bnRoZXNpcy1zdW1tYXJ5LmNvbXBvbmVudC5jc3MifQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("pieAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'scale(0) rotate(-180deg)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'scale(-1) rotate(180deg)'
        })]))])
        /*         query(
                  ":leave",
                  [
                    animate('2000ms ease', keyframes([
                      style({ transform: 'scale(1)', offset: 0 }),
                      style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
                      style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
                    ])),          ],
                  { optional: true }
                ) */
        ]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("tableAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'translateX(-200%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'translateX(0)'
        })]))])
        /*         query(
                  ":leave",
                  [
                    animate('2000ms ease', keyframes([
                      style({ transform: 'scale(1)', offset: 0 }),
                      style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
                      style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
                    ])),          ],
                  { optional: true }
                ) */
        ])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SynthesisSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-synthesis-summary',
          templateUrl: './synthesis-summary.component.html',
          styleUrls: ['./synthesis-summary.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("pieAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'scale(0) rotate(-180deg)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'scale(-1) rotate(180deg)'
          })]))])
          /*         query(
                    ":leave",
                    [
                      animate('2000ms ease', keyframes([
                        style({ transform: 'scale(1)', offset: 0 }),
                        style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
                        style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
                      ])),          ],
                    { optional: true }
                  ) */
          ]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("tableAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateX(-200%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateX(0)'
          })]))])
          /*         query(
                    ":leave",
                    [
                      animate('2000ms ease', keyframes([
                        style({ transform: 'scale(1)', offset: 0 }),
                        style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
                        style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
                      ])),          ],
                    { optional: true }
                  ) */
          ])]
        }]
      }], function () {
        return [{
          type: _shared_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      }, {
        synthesisCompanies: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/flights/pages/synthesis/synthesis-trip/synthesis-trip.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/flights/pages/synthesis/synthesis-trip/synthesis-trip.component.ts ***!
    \************************************************************************************/

  /*! exports provided: SynthesisTripComponent */

  /***/
  function srcAppFlightsPagesSynthesisSynthesisTripSynthesisTripComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SynthesisTripComponent", function () {
      return SynthesisTripComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_shared_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../app/shared/theme/theme.service */
    "./src/app/shared/theme/theme.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    function SynthesisTripComponent_tr_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var synthesisTrip_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "searchFlightForm.trip." + synthesisTrip_r1.travelType));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](synthesisTrip_r1.nbFlights);
      }
    }

    var SynthesisTripComponent = /*#__PURE__*/function () {
      function SynthesisTripComponent(themeService, translateService) {
        _classCallCheck(this, SynthesisTripComponent);

        this.themeService = themeService;
        this.translateService = translateService;
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartType = 'pie';
        this.totalFlights = 0;
        this.colors = [];
        this.synthesisTrips = [];
      }

      return _createClass(SynthesisTripComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.colorsSubscription.unsubscribe();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this21 = this;

          this.pieChartLabels = [];
          this.pieChartData = [];
          this.totalFlights = 0;
          this.synthesisTrips.forEach(function (row) {
            _this21.totalFlights = _this21.totalFlights + row.nbFlights;
          });
          this.synthesisTrips.forEach(function (row) {
            _this21.pieChartLabels.push(_this21.translateService.instant('searchFlightForm.trip.' + row.travelType));

            _this21.pieChartData.push(+(row.nbFlights / _this21.totalFlights * 100).toFixed(2));
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.colorsSubscription = this.themeService.colorsSub.subscribe(function (colors) {
            _this22.colors = colors;
          });
          var constract = localStorage.getItem('constractType');

          if (constract === 'high') {
            this.colors = [{
              backgroundColor: ['#03257A', '#EEEEEE', '#D3D3D3']
            }];
          } else if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(constract) || constract === 'normal') {
            this.colors = [{
              backgroundColor: ['#3f51b5', '#EAF9FF', '#B2CDD7']
            }];
          }
        }
      }]);
    }();

    SynthesisTripComponent.ɵfac = function SynthesisTripComponent_Factory(t) {
      return new (t || SynthesisTripComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
    };

    SynthesisTripComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SynthesisTripComponent,
      selectors: [["app-synthesis-trip"]],
      inputs: {
        synthesisTrips: "synthesisTrips",
        lang: "lang"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 12,
      vars: 13,
      consts: [["id", "result", 1, "t-data-grid", "left"], [1, "t-data-grid"], [4, "ngFor", "ngForOf"], [1, "right", 2, "display", "block"], ["baseChart", "", "width", "600", "height", "300", 3, "data", "labels", "chartType", "colors"]],
      template: function SynthesisTripComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SynthesisTripComponent_tr_9_Template, 6, 4, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "canvas", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@tableAnimation", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, "flightsList.trip.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, "bookmarkList.nbFlights"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.synthesisTrips);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@pieAnimation", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("chartType", ctx.pieChartType)("colors", ctx.colors);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvcGFnZXMvc3ludGhlc2lzL3N5bnRoZXNpcy10cmlwL3N5bnRoZXNpcy10cmlwLmNvbXBvbmVudC5jc3MifQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("pieAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'scale(0) rotate(-180deg)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'scale(-1) rotate(180deg)'
        })]))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("tableAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'translateX(-200%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'translateX(0)'
        })]))])
        /*         query(
                  ":leave",
                  [
                    animate('2000ms ease', keyframes([
                      style({ transform: 'scale(1)', offset: 0 }),
                      style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
                      style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
                    ])),          ],
                  { optional: true }
                ) */
        ])]
      },
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SynthesisTripComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-synthesis-trip',
          templateUrl: './synthesis-trip.component.html',
          styleUrls: ['./synthesis-trip.component.css'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("pieAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'scale(0) rotate(-180deg)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'scale(-1) rotate(180deg)'
          })]))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("tableAnimation", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateX(-200%)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateX(0)'
          })]))])
          /*         query(
                    ":leave",
                    [
                      animate('2000ms ease', keyframes([
                        style({ transform: 'scale(1)', offset: 0 }),
                        style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
                        style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
                      ])),          ],
                    { optional: true }
                  ) */
          ])]
        }]
      }], function () {
        return [{
          type: _app_shared_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      }, {
        synthesisTrips: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lang: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/flights/pages/synthesis/synthesis.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/flights/pages/synthesis/synthesis.component.ts ***!
    \****************************************************************/

  /*! exports provided: SynthesisComponent */

  /***/
  function srcAppFlightsPagesSynthesisSynthesisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SynthesisComponent", function () {
      return SynthesisComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _services_flights_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/flights.service */
    "./src/app/flights/services/flights.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _portal_top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../portal/top-right-side/top-right-side.component */
    "./src/app/portal/top-right-side/top-right-side.component.ts");
    /* harmony import */


    var _portal_top_side_top_side_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../portal/top-side/top-side.component */
    "./src/app/portal/top-side/top-side.component.ts");
    /* harmony import */


    var _portal_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../portal/left-side/left-side.component */
    "./src/app/portal/left-side/left-side.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _synthesis_criteria_synthesis_criteria_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./synthesis-criteria/synthesis-criteria.component */
    "./src/app/flights/pages/synthesis/synthesis-criteria/synthesis-criteria.component.ts");
    /* harmony import */


    var _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../portal/bot-side/bot-side.component */
    "./src/app/portal/bot-side/bot-side.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _synthesis_flights_synthesis_flights_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./synthesis-flights/synthesis-flights.component */
    "./src/app/flights/pages/synthesis/synthesis-flights/synthesis-flights.component.ts");
    /* harmony import */


    var _synthesis_summary_synthesis_summary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./synthesis-summary/synthesis-summary.component */
    "./src/app/flights/pages/synthesis/synthesis-summary/synthesis-summary.component.ts");
    /* harmony import */


    var _synthesis_trip_synthesis_trip_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./synthesis-trip/synthesis-trip.component */
    "./src/app/flights/pages/synthesis/synthesis-trip/synthesis-trip.component.ts");

    function SynthesisComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "errorMessage.emptyData.label"));
      }
    }

    function SynthesisComponent_mat_icon_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SynthesisComponent_mat_icon_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_less");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SynthesisComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "synthesisPage.flightSynthesis.header"));
      }
    }

    function SynthesisComponent_div_18_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SynthesisComponent_div_18_app_synthesis_flights_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-synthesis-flights", 16);
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbFlights", ctx_r10.nbFlights)("synthesisCriteria", ctx_r10.synthesisCriteria);
      }
    }

    function SynthesisComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SynthesisComponent_div_18_div_1_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SynthesisComponent_div_18_app_synthesis_flights_2_Template, 1, 2, "app-synthesis-flights", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.loading1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.loading1);
      }
    }

    function SynthesisComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "synthesisPage.companieSynthesis.header"));
      }
    }

    function SynthesisComponent_div_20_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SynthesisComponent_div_20_app_synthesis_summary_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-synthesis-summary", 18);
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("synthesisCompanies", ctx_r12.synthesisCompanies);
      }
    }

    function SynthesisComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SynthesisComponent_div_20_div_1_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SynthesisComponent_div_20_app_synthesis_summary_2_Template, 1, 1, "app-synthesis-summary", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.loading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.loading);
      }
    }

    function SynthesisComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "synthesisPage.tripSynthesis.header"));
      }
    }

    function SynthesisComponent_div_22_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SynthesisComponent_div_22_app_synthesis_trip_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-synthesis-trip", 20);
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("synthesisTrips", ctx_r14.synthesisTrips)("lang", ctx_r14.lang);
      }
    }

    function SynthesisComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SynthesisComponent_div_22_div_1_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SynthesisComponent_div_22_app_synthesis_trip_2_Template, 1, 2, "app-synthesis-trip", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.loading2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.loading2);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "display": a0
      };
    };

    var SynthesisComponent = /*#__PURE__*/function () {
      function SynthesisComponent(sharedService, flightsService, translateService) {
        var _this23 = this;

        _classCallCheck(this, SynthesisComponent);

        this.sharedService = sharedService;
        this.flightsService = flightsService;
        this.translateService = translateService;
        this.isHiddenSearch = false;
        this.show = false;
        this.loading = false;
        this.loading1 = false;
        this.loading2 = false;
        this.emptyData = false;
        this.synthesisCompanies = [];
        this.synthesisTrips = [];
        this.headerLabel = 'headers.synthesis.label';
        this.bdcrumbsLabel = 'bdcrumbs.synthesis.label';
        this.iconLabel = 'pie_chart';
        this.showSynthesis = true;
        this.subscriptions = [];
        this.subscriptions.push(this.sharedService.selectedLanguage.subscribe(function (lang) {
          _this23.lang = lang;
        }));
      }

      return _createClass(SynthesisComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.sharedService.syntheseCreationDone === false) this.sharedService.createSynthesisCriteriaForm();
          this.sharedService.syntheseCreationDone = true;
        }
      }, {
        key: "changeVisibilitySearchForm",
        value: function changeVisibilitySearchForm() {
          this.isHiddenSearch = !this.isHiddenSearch;
        }
      }, {
        key: "doSynthesis",
        value: function doSynthesis(synthesisCriteria) {
          var _this24 = this;

          this.loading1 = true;
          this.loading2 = true;
          this.loading = true;
          this.synthesisCriteria = synthesisCriteria;
          this.subscriptions.push(this.flightsService.synthesisCompanyFlights(synthesisCriteria).subscribe(function (synthesisCompanies) {
            _this24.synthesisCompanies = synthesisCompanies;
            _this24.loading = false;
          }));
          this.subscriptions.push(this.flightsService.synthesisTripFlights(synthesisCriteria).subscribe(function (synthesisTrips) {
            _this24.synthesisTrips = synthesisTrips;
            _this24.loading2 = false;
          }));
          this.subscriptions.push(this.flightsService.getNumberFlights(synthesisCriteria).subscribe(function (nbFlights) {
            _this24.nbFlights = nbFlights;
            _this24.loading1 = false;
            _this24.sharedService.syntheseHaveResult = true;

            if (_this24.nbFlights === 0) {
              _this24.emptyData = true;
              _this24.show = false;
            } else {
              _this24.emptyData = false;
              _this24.show = true;
            }
          }));
        }
      }]);
    }();

    SynthesisComponent.ɵfac = function SynthesisComponent_Factory(t) {
      return new (t || SynthesisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_flights_service__WEBPACK_IMPORTED_MODULE_2__["FlightsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
    };

    SynthesisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SynthesisComponent,
      selectors: [["app-synthesis"]],
      decls: 24,
      vars: 19,
      consts: [[3, "showSynthesis", "headerLabel", "iconLabel", "bdcrumbsLabel"], ["id", "mainContainer"], ["id", "mainMargin"], ["id", "main"], ["class", "t-error", "id", "ferror", 4, "ngIf"], ["id", "mainBanner"], [1, "expand", 3, "click"], [4, "ngIf"], [3, "ngStyle"], [3, "onSearch"], ["id", "mainBanner", 4, "ngIf"], ["id", "ferror", 1, "t-error"], ["id", "loader", 4, "ngIf"], [3, "nbFlights", "synthesisCriteria", 4, "ngIf"], ["id", "loader"], ["alt", "Return to Home Page", "src", "../../../assets/imgs/ajax-wait.gif"], [3, "nbFlights", "synthesisCriteria"], [3, "synthesisCompanies", 4, "ngIf"], [3, "synthesisCompanies"], [3, "synthesisTrips", "lang", 4, "ngIf"], [3, "synthesisTrips", "lang"]],
      template: function SynthesisComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-right-side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-top-side", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-left-side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SynthesisComponent_div_6_Template, 5, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SynthesisComponent_Template_span_click_12_listener() {
            return ctx.changeVisibilitySearchForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SynthesisComponent_mat_icon_13_Template, 2, 0, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SynthesisComponent_mat_icon_14_Template, 2, 0, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-synthesis-criteria", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSearch", function SynthesisComponent_Template_app_synthesis_criteria_onSearch_16_listener($event) {
            return ctx.doSynthesis($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SynthesisComponent_div_17_Template, 4, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SynthesisComponent_div_18_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SynthesisComponent_div_19_Template, 4, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SynthesisComponent_div_20_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SynthesisComponent_div_21_Template, 4, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SynthesisComponent_div_22_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-bot-side");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSynthesis", ctx.showSynthesis)("headerLabel", ctx.headerLabel)("iconLabel", ctx.iconLabel)("bdcrumbsLabel", ctx.bdcrumbsLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emptyData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 15, "synthesisPage.synthesis.header"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHiddenSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isHiddenSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.isHiddenSearch ? "none" : "inherit"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        }
      },
      directives: [_portal_top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_4__["TopRightSideComponent"], _portal_top_side_top_side_component__WEBPACK_IMPORTED_MODULE_5__["TopSideComponent"], _portal_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_6__["LeftSideComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _synthesis_criteria_synthesis_criteria_component__WEBPACK_IMPORTED_MODULE_8__["SynthesisCriteriaComponent"], _portal_bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_9__["BotSideComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _synthesis_flights_synthesis_flights_component__WEBPACK_IMPORTED_MODULE_11__["SynthesisFlightsComponent"], _synthesis_summary_synthesis_summary_component__WEBPACK_IMPORTED_MODULE_12__["SynthesisSummaryComponent"], _synthesis_trip_synthesis_trip_component__WEBPACK_IMPORTED_MODULE_13__["SynthesisTripComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHMvcGFnZXMvc3ludGhlc2lzL3N5bnRoZXNpcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SynthesisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-synthesis',
          templateUrl: './synthesis.component.html',
          styleUrls: ['./synthesis.component.css']
        }]
      }], function () {
        return [{
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]
        }, {
          type: _services_flights_service__WEBPACK_IMPORTED_MODULE_2__["FlightsService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/flights/services/flights.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/flights/services/flights.service.ts ***!
    \*****************************************************/

  /*! exports provided: FlightsService */

  /***/
  function srcAppFlightsServicesFlightsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightsService", function () {
      return FlightsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_authentification_services_authentification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/authentification/services/authentification.service */
    "./src/app/authentification/services/authentification.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FlightsService = /*#__PURE__*/function () {
      function FlightsService(http, authService, router) {
        _classCallCheck(this, FlightsService);

        this.http = http;
        this.authService = authService;
        this.router = router;
        this.FLIGHTS_URL = "/flight-webservices/api/v1.0/flights";
        this.flightsIds = [];
        this.subscriptions = [];
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer ".concat(this.authService.getJwtToken())
          })
        };
      }

      return _createClass(FlightsService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }, {
        key: "getFlightList",
        value: function getFlightList() {
          return this.http.get(this.FLIGHTS_URL);
        }
      }, {
        key: "searchFlights",
        value: function searchFlights(flightCriteria) {
          return this.http.post(this.FLIGHTS_URL, flightCriteria);
        }
      }, {
        key: "getFlight",
        value: function getFlight(idFlight) {
          return this.http.get("".concat(this.FLIGHTS_URL, "/").concat(idFlight));
        }
      }, {
        key: "synthesisCompanyFlights",
        value: function synthesisCompanyFlights(synthesisCriteria) {
          return this.http.post(this.FLIGHTS_URL + '/syntheseCompanyFlights', synthesisCriteria);
        }
      }, {
        key: "synthesisTripFlights",
        value: function synthesisTripFlights(synthesisCriteria) {
          return this.http.post(this.FLIGHTS_URL + '/syntheseTripFlights', synthesisCriteria);
        }
      }, {
        key: "getNumberFlights",
        value: function getNumberFlights(synthesisCriteria) {
          return this.http.post(this.FLIGHTS_URL + '/numberFlights', synthesisCriteria);
        }
      }, {
        key: "addBookmark",
        value: function addBookmark(bookmark) {
          return this.http.post(this.FLIGHTS_URL + '/bookmarks', bookmark);
        }
      }, {
        key: "getBookmarkList",
        value: function getBookmarkList() {
          return this.http.get(this.FLIGHTS_URL + '/bookmarks');
        }
      }, {
        key: "getBookmark",
        value: function getBookmark(idBookmark) {
          return this.http.get("".concat(this.FLIGHTS_URL, "/bookmarks/").concat(idBookmark));
        }
      }, {
        key: "deleteBookmark",
        value: function deleteBookmark(idBookmark) {
          return this.http["delete"]("".concat(this.FLIGHTS_URL, "/bookmarks/").concat(idBookmark));
        }
      }, {
        key: "deleteAllBookmark",
        value: function deleteAllBookmark() {
          return this.http["delete"]("".concat(this.FLIGHTS_URL, "/bookmarks"));
        }
      }, {
        key: "contact",
        value: function contact(email) {
          return this.http.post(this.FLIGHTS_URL + '/contact', email);
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(email) {
          return this.http.post(this.FLIGHTS_URL + '/forgotPassword', email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.token;
          }));
        }
      }, {
        key: "getFlightDetails",
        value: function getFlightDetails(idFlight) {
          var _this25 = this;

          this.subscriptions.push(this.getFlight(idFlight).subscribe(function (flightResult) {
            _this25.flightDetails = flightResult;

            _this25.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              return _this25.router.navigate(['/flights/details']);
            });
          }));
        }
      }, {
        key: "viewBookmark",
        value: function viewBookmark(idBookmark) {
          var _this26 = this;

          this.subscriptions.push(this.getBookmark(idBookmark).subscribe(function (bookmark) {
            _this26.flightCriteria = bookmark.flightCriteria;

            _this26.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              return _this26.router.navigate(['/flights/search']);
            });
          }));
        }
      }]);
    }();

    FlightsService.ɵfac = function FlightsService_Factory(t) {
      return new (t || FlightsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_authentification_services_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthentificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    FlightsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FlightsService,
      factory: FlightsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: src_app_authentification_services_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthentificationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/portal/bot-side/bot-side.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/portal/bot-side/bot-side.component.ts ***!
    \*******************************************************/

  /*! exports provided: BotSideComponent */

  /***/
  function srcAppPortalBotSideBotSideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotSideComponent", function () {
      return BotSideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    var BotSideComponent = /*#__PURE__*/function () {
      function BotSideComponent() {
        _classCallCheck(this, BotSideComponent);
      }

      return _createClass(BotSideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    BotSideComponent.ɵfac = function BotSideComponent_Factory(t) {
      return new (t || BotSideComponent)();
    };

    BotSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BotSideComponent,
      selectors: [["app-bot-side"]],
      decls: 5,
      vars: 0,
      consts: [["id", "footer"], ["color", "primary"]],
      template: function BotSideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA9 MyFlight-App, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9ib3Qtc2lkZS9ib3Qtc2lkZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotSideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bot-side',
          templateUrl: './bot-side.component.html',
          styleUrls: ['./bot-side.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/portal/left-side/left-side.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/portal/left-side/left-side.component.ts ***!
    \*********************************************************/

  /*! exports provided: LeftSideComponent */

  /***/
  function srcAppPortalLeftSideLeftSideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeftSideComponent", function () {
      return LeftSideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_authentification_services_authentification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/authentification/services/authentification.service */
    "./src/app/authentification/services/authentification.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");

    function LeftSideComponent_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r1 === "fr_FR" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "lang.french.label") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "lang.english.label"), " ");
      }
    }

    var LeftSideComponent = /*#__PURE__*/function () {
      function LeftSideComponent(authService, translateService, sharedService, router, fb) {
        _classCallCheck(this, LeftSideComponent);

        this.authService = authService;
        this.translateService = translateService;
        this.sharedService = sharedService;
        this.router = router;
        this.fb = fb;
        translateService.addLangs(['en_US', 'fr_FR']);
      }

      return _createClass(LeftSideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.langs = this.translateService.getLangs();
          this.language = this.fb.group({
            language: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          var toSelect = this.langs.find(function (c) {
            return c == localStorage.getItem('language');
          });
          this.language.get('language').setValue(toSelect);
          this.remontedResult = this.sharedService.remontedResultSub;
          this.loggedUser = localStorage.getItem("loggedUser");
        }
      }, {
        key: "synthesisPage",
        value: function synthesisPage() {
          this.router.navigate(['/flights/synthesis']);
        }
      }, {
        key: "flightsPage",
        value: function flightsPage() {
          this.sharedService.remontedResultSub = null;
          this.router.navigate(['/flights/search']);
        }
      }, {
        key: "bookmarksPage",
        value: function bookmarksPage() {
          this.router.navigate(['/flights/bookmarks']);
        }
      }, {
        key: "contact",
        value: function contact() {
          this.router.navigate(['/flights/contact']);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.authService.doLogoutUser();
          this.sharedService.haveResult = false;
          this.sharedService.syntheseHaveResult = false;
          this.sharedService.remontedResultSub = null;
          this.router.navigate(['/authentification/login']);
        }
      }, {
        key: "changeLang",
        value: function changeLang(language) {
          localStorage.setItem('language', language);
          this.translateService.use(language);

          if (language === 'en_US') {
            this.sharedService.selectedLanguage.next('en');
          } else if (language === 'fr_FR') {
            this.sharedService.selectedLanguage.next('fr');
          }
        }
      }]);
    }();

    LeftSideComponent.ɵfac = function LeftSideComponent_Factory(t) {
      return new (t || LeftSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentification_services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    LeftSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LeftSideComponent,
      selectors: [["app-left-side"]],
      decls: 49,
      vars: 24,
      consts: [["id", "leftSide"], ["id", "Lang", 3, "formGroup"], ["formControlName", "language", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "menu"], [1, "menu"], [3, "click"], [1, "leftIcon"], ["matBadgeColor", "accent", "matBadgePosition", "before", 1, "leftIcon", 3, "matBadge"], [3, "value"]],
      template: function LeftSideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function LeftSideComponent_Template_mat_select_selectionChange_3_listener($event) {
            return ctx.changeLang($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LeftSideComponent_mat_option_4_Template, 4, 6, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftSideComponent_Template_a_click_8_listener() {
            return ctx.flightsPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftSideComponent_Template_a_click_14_listener() {
            return ctx.flightsPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "flight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftSideComponent_Template_a_click_20_listener() {
            return ctx.bookmarksPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "bookmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftSideComponent_Template_a_click_26_listener() {
            return ctx.synthesisPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "pie_chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftSideComponent_Template_a_click_32_listener() {
            return ctx.contact();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " contacts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftSideComponent_Template_a_click_44_listener() {
            return ctx.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "power_settings_new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.language);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.langs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, "menu.home.label"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx.remontedResult);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 12, "menu.flights.label"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 14, "menu.bookmarks.label"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 16, "menu.synthesis.label"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 18, "menu.contact.label"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 20, "menu.help.label"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 22, "menu.logout.label"), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadge"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9sZWZ0LXNpZGUvbGVmdC1zaWRlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftSideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-left-side',
          templateUrl: './left-side.component.html',
          styleUrls: ['./left-side.component.css']
        }]
      }], function () {
        return [{
          type: src_app_authentification_services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/portal/portal.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/portal/portal.module.ts ***!
    \*****************************************/

  /*! exports provided: PortalModule */

  /***/
  function srcAppPortalPortalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalModule", function () {
      return PortalModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _left_side_left_side_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./left-side/left-side.component */
    "./src/app/portal/left-side/left-side.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./bot-side/bot-side.component */
    "./src/app/portal/bot-side/bot-side.component.ts");
    /* harmony import */


    var _top_side_top_side_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./top-side/top-side.component */
    "./src/app/portal/top-side/top-side.component.ts");
    /* harmony import */


    var _top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./top-right-side/top-right-side.component */
    "./src/app/portal/top-right-side/top-right-side.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var PortalModule = /*#__PURE__*/_createClass(function PortalModule() {
      _classCallCheck(this, PortalModule);
    });

    PortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PortalModule
    });
    PortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PortalModule_Factory(t) {
        return new (t || PortalModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, {
        declarations: [_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_2__["LeftSideComponent"], _bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_4__["BotSideComponent"], _top_side_top_side_component__WEBPACK_IMPORTED_MODULE_5__["TopSideComponent"], _top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_6__["TopRightSideComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"]],
        exports: [_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_2__["LeftSideComponent"], _bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_4__["BotSideComponent"], _top_side_top_side_component__WEBPACK_IMPORTED_MODULE_5__["TopSideComponent"], _top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_6__["TopRightSideComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_2__["LeftSideComponent"], _bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_4__["BotSideComponent"], _top_side_top_side_component__WEBPACK_IMPORTED_MODULE_5__["TopSideComponent"], _top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_6__["TopRightSideComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"]],
          exports: [_left_side_left_side_component__WEBPACK_IMPORTED_MODULE_2__["LeftSideComponent"], _bot_side_bot_side_component__WEBPACK_IMPORTED_MODULE_4__["BotSideComponent"], _top_side_top_side_component__WEBPACK_IMPORTED_MODULE_5__["TopSideComponent"], _top_right_side_top_right_side_component__WEBPACK_IMPORTED_MODULE_6__["TopRightSideComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/portal/top-right-side/top-right-side.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/portal/top-right-side/top-right-side.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TopRightSideComponent */

  /***/
  function srcAppPortalTopRightSideTopRightSideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopRightSideComponent", function () {
      return TopRightSideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var TopRightSideComponent = /*#__PURE__*/function () {
      function TopRightSideComponent(sharedService) {
        _classCallCheck(this, TopRightSideComponent);

        this.sharedService = sharedService;
      }

      return _createClass(TopRightSideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeContrast",
        value: function changeContrast(constract) {
          localStorage.setItem('constractType', constract);
          this.sharedService.constractType.next(constract);
        }
      }]);
    }();

    TopRightSideComponent.ɵfac = function TopRightSideComponent_Factory(t) {
      return new (t || TopRightSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]));
    };

    TopRightSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopRightSideComponent,
      selectors: [["app-top-right-side"]],
      decls: 9,
      vars: 6,
      consts: [["id", "tools"], ["id", "hcLk", "accesskey", "I", 3, "click"], ["id", "ncLk", "accesskey", "N", 3, "click"]],
      template: function TopRightSideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopRightSideComponent_Template_a_click_2_listener() {
            return ctx.changeContrast("high");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopRightSideComponent_Template_a_click_6_listener() {
            return ctx.changeContrast("normal");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "contrast.high.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, "contrast.normal.label"));
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC90b3AtcmlnaHQtc2lkZS90b3AtcmlnaHQtc2lkZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopRightSideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-right-side',
          templateUrl: './top-right-side.component.html',
          styleUrls: ['./top-right-side.component.css']
        }]
      }], function () {
        return [{
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/portal/top-side/top-side.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/portal/top-side/top-side.component.ts ***!
    \*******************************************************/

  /*! exports provided: TopSideComponent */

  /***/
  function srcAppPortalTopSideTopSideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopSideComponent", function () {
      return TopSideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function TopSideComponent_p_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " > ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "bdcrumbs.home.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx_r0.bdcrumbsLabel), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" > ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, ctx_r0.bdcrumbsResultLabel), " ");
      }
    }

    function TopSideComponent_p_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "bdcrumbs.home.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" > ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx_r1.bdcrumbsLabel), " ");
      }
    }

    function TopSideComponent_p_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " > ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " > ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopSideComponent_p_18_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.goToSearchResult();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "bdcrumbs.home.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx_r2.bdcrumbsLabel));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, ctx_r2.bdcrumbsResultLabel));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" > ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, ctx_r2.bdcrumbsDetailsLabel), " ");
      }
    }

    function TopSideComponent_p_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " > ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " > ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopSideComponent_p_19_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.goToSearchResult();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " > ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopSideComponent_p_19_Template_a_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.backToTheFlightDetails();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "bdcrumbs.home.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx_r3.bdcrumbsLabel));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, ctx_r3.bdcrumbsResultLabel));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 11, ctx_r3.bdcrumbsDetailsLabel));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" > ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 13, ctx_r3.bdcrumbsInflightLabel), " ");
      }
    }

    function TopSideComponent_p_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "bdcrumbs.home.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" > ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx_r4.bdcrumbsLabel), " ");
      }
    }

    function TopSideComponent_p_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "bdcrumbs.home.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" > ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx_r5.bdcrumbsLabel), " ");
      }
    }

    var TopSideComponent = /*#__PURE__*/function () {
      function TopSideComponent(router) {
        _classCallCheck(this, TopSideComponent);

        this.router = router;
        this.bdcrumbsResultLabel = 'bdcrumbs.searchResult.label';
        this.bdcrumbsDetailsLabel = 'bdcrumbs.details.label';
        this.bdcrumbsInflightLabel = 'bdcrumbs.inflight.label';
      }

      return _createClass(TopSideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToSearchResult",
        value: function goToSearchResult() {
          this.router.navigate(['/flights/search']);
        }
      }, {
        key: "backToTheFlightDetails",
        value: function backToTheFlightDetails() {
          this.router.navigate(['/flights/details']);
        }
      }]);
    }();

    TopSideComponent.ɵfac = function TopSideComponent_Factory(t) {
      return new (t || TopSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    TopSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopSideComponent,
      selectors: [["app-top-side"]],
      inputs: {
        headerLabel: "headerLabel",
        iconLabel: "iconLabel",
        bdcrumbsLabel: "bdcrumbsLabel",
        show: "show",
        showDetails: "showDetails",
        showSynthesis: "showSynthesis",
        showBookmark: "showBookmark",
        showInflights: "showInflights"
      },
      decls: 22,
      vars: 10,
      consts: [["id", "head"], ["id", "topside"], ["id", "headToolbar"], ["color", "primary"], [1, "leftIcon"], ["id", "titbar"], ["id", "bdcrumbs"], [4, "ngIf"], ["href", "/flights/search"], [3, "click"]],
      template: function TopSideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "flight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "MyFlight-App ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TopSideComponent_p_16_Template, 10, 9, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TopSideComponent_p_17_Template, 6, 6, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TopSideComponent_p_18_Template, 14, 12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TopSideComponent_p_19_Template, 18, 15, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TopSideComponent_p_20_Template, 6, 6, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TopSideComponent_p_21_Template, 6, 6, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.iconLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, ctx.headerLabel), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show && !ctx.showDetails && !ctx.showSynthesis && !ctx.showBookmark && !ctx.showInflights);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showInflights);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSynthesis);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showBookmark);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC90b3Atc2lkZS90b3Atc2lkZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopSideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-side',
          templateUrl: './top-side.component.html',
          styleUrls: ['./top-side.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        headerLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        iconLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bdcrumbsLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        show: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showDetails: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showSynthesis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showBookmark: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showInflights: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/search-form/search-form.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/search-form/search-form.component.ts ***!
    \************************************************************************/

  /*! exports provided: SearchFormComponent */

  /***/
  function srcAppSharedComponentsSearchFormSearchFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function () {
      return SearchFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../app/flights/services/flights.service */
    "./src/app/flights/services/flights.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/datepicker.js");
    /* harmony import */


    var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-material-timepicker */
    "./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function SearchFormComponent_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var company_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", company_r19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "searchFlightForm.company." + company_r19), " ");
      }
    }

    function SearchFormComponent_mat_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var trip_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", trip_r20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "searchFlightForm.trip." + trip_r20), " ");
      }
    }

    function SearchFormComponent_mat_option_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var flightType_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", flightType_r21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "searchFlightForm.flightType." + flightType_r21), " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        display: a0
      };
    };

    var SearchFormComponent = /*#__PURE__*/function () {
      function SearchFormComponent(sharedService, flightsService) {
        _classCallCheck(this, SearchFormComponent);

        this.sharedService = sharedService;
        this.flightsService = flightsService;
        this.depart = [];
        this.departureLocation = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.companies = [];
        this.trips = [];
        this.flightTypes = [];
        this.airports = [];
        this.exportTime = {
          hour: 7,
          minute: 15,
          meriden: 'PM',
          format: 24
        };
        this.showBack = true;
        this.showConnection = true;
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showFlightsList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blueTheme = {
          container: {
            bodyBackgroundColor: '#3f51b5',
            buttonColor: '#fff'
          },
          dial: {
            dialBackgroundColor: '#B2CDD7',
            dialEditableBackgroundColor: '#000000'
          },
          clockFace: {
            clockFaceBackgroundColor: '#F1F1F1',
            clockHandColor: '#3f51b5',
            clockFaceTimeInactiveColor: '#000000'
          }
        };
      }

      return _createClass(SearchFormComponent, [{
        key: "onChangeHour",
        value: function onChangeHour(event) {
          console.log('event', event);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.sharedService.creationDone === false) {
            this.sharedService.createFlightCriteriaForm();
            this.sharedService.initDropDownLists();
            this.sharedService.creationDone = true;
          }

          this.companies = this.sharedService.companies;
          this.trips = this.sharedService.trips;
          this.flightTypes = this.sharedService.flightTypes;
          this.searchFlightForm = this.sharedService.searchCriteresForm;

          if (this.sharedService.haveResult) {
            this.searchFlight();
          }

          if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.flightsService.flightCriteria)) {
            this.sharedService.bookmarkHaveResult = true;
            this.onSearch.emit(this.flightsService.flightCriteria);
            this.flightsService.flightCriteria = null;
          }
        }
      }, {
        key: "selectedTripType",
        value: function selectedTripType(value) {
          this.tripType = value;

          if (value === 'ONEWAYTICKET') {
            this.showBack = false;
          } else {
            this.showBack = true;
          }
        }
      }, {
        key: "selectedFlightType",
        value: function selectedFlightType(value) {
          this.flightType = value;

          if (value === 'DIRECT') {
            this.showConnection = false;
          } else {
            this.showConnection = true;
          }
        }
      }, {
        key: "selectedCompanyName",
        value: function selectedCompanyName(value) {
          this.company = value;
        }
      }, {
        key: "searchFlight",
        value: function searchFlight() {
          var searchFlightValues = this.searchFlightForm.value;

          if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(searchFlightValues.company) || searchFlightValues.company === '') {
            searchFlightValues.company = null;
          }

          if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(searchFlightValues.flightType) || searchFlightValues.flightType === '') {
            searchFlightValues.flightType = null;
          }

          if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(searchFlightValues.travelType) || searchFlightValues.travelType === '') {
            searchFlightValues.travelType = null;
          }

          this.onSearch.emit(searchFlightValues);
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          this.showFlightsList.emit(false);
          form.reset();
          Object.keys(form.controls).forEach(function (key) {
            form.get(key).setErrors(null);
          });
          this.sharedService.remontedResultSub = null;
        }
      }]);
    }();

    SearchFormComponent.ɵfac = function SearchFormComponent_Factory(t) {
      return new (t || SearchFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_4__["FlightsService"]));
    };

    SearchFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchFormComponent,
      selectors: [["app-search-form"]],
      outputs: {
        onSearch: "onSearch",
        showFlightsList: "showFlightsList"
      },
      decls: 223,
      vars: 150,
      consts: [["name", "searchFlight", "id", "searchFlight", 3, "formGroup"], ["id", "search"], [1, "search"], [1, "inline"], ["formControlName", "company", 3, "selectionChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "left"], ["formControlName", "travelType", 3, "selectionChange"], [1, "right"], ["formControlName", "flightType", 3, "selectionChange"], ["matInput", "", "formControlName", "aircraftType", 3, "placeholder"], ["matInput", "", "formControlName", "departureLocation", 3, "placeholder"], ["matInput", "", "formControlName", "arrivalLocation", 3, "placeholder"], ["matInput", "", "formControlName", "departureDateMin", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "departureDateMax", 3, "matDatepicker"], ["picker1", ""], ["matInput", "", "readonly", "", "formControlName", "departureTimeMin", 3, "ngxTimepicker", "disableClick", "format"], [3, "for"], [3, "theme"], ["toggleTimepicker", ""], ["matInput", "", "readonly", "", "formControlName", "departureTimeMax", 3, "ngxTimepicker", "disableClick", "format"], ["toggleTimepicker1", ""], ["matInput", "", "formControlName", "arrivalDateMin", 3, "matDatepicker"], ["picker2", ""], ["matInput", "", "formControlName", "arrivalDateMax", 3, "matDatepicker"], ["picker3", ""], ["matInput", "", "readonly", "", "formControlName", "arrivalTimeMin", 3, "ngxTimepicker", "disableClick", "format"], ["toggleTimepicker2", ""], ["matInput", "", "readonly", "", "formControlName", "arrivalTimeMax", 3, "ngxTimepicker", "disableClick", "format"], ["toggleTimepicker3", ""], [1, "leftDuration"], ["matInput", "", "readonly", "", "formControlName", "flightDurationMin", 3, "ngxTimepicker", "disableClick", "format"], ["toggleTimepicker5", ""], ["matInput", "", "readonly", "", "formControlName", "flightDurationMax", 3, "ngxTimepicker", "disableClick", "format"], ["toggleTimepicker6", ""], [1, "leftFare"], ["matInput", "", "formControlName", "fareMin", 3, "placeholder"], ["matInput", "", "formControlName", "fareMax", 3, "placeholder"], [1, "inline", 3, "ngStyle"], ["matInput", "", "formControlName", "backDateMin", 3, "matDatepicker"], ["picker4", ""], ["matInput", "", "formControlName", "backDateMax", 3, "matDatepicker"], ["picker5", ""], ["matInput", "", "readonly", "", "formControlName", "backTimeMin", 3, "ngxTimepicker", "disableClick", "format"], ["toggleTimepicker4", ""], ["matInput", "", "readonly", "", "formControlName", "backTimeMax", 3, "ngxTimepicker", "disableClick", "format"], ["toggleTimepicker9", ""], ["matInput", "", "readonly", "", "formControlName", "connectionDurationMin", 3, "ngxTimepicker", "disableClick", "format"], ["toggleTimepicker7", ""], ["matInput", "", "readonly", "", "formControlName", "connectionDurationMax", 3, "ngxTimepicker", "disableClick", "format"], ["toggleTimepicker8", ""], ["id", "buttonBar"], [1, "firstRight"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "nextRight"], ["mat-raised-button", "", 3, "click"]],
      template: function SearchFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function SearchFormComponent_Template_mat_select_selectionChange_9_listener($event) {
            return ctx.selectedCompanyName($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchFormComponent_mat_option_11_Template, 3, 4, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function SearchFormComponent_Template_mat_select_selectionChange_18_listener($event) {
            return ctx.selectedTripType($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SearchFormComponent_mat_option_20_Template, 3, 4, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function SearchFormComponent_Template_mat_select_selectionChange_25_listener($event) {
            return ctx.selectedFlightType($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SearchFormComponent_mat_option_27_Template, 3, 4, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "flight_takeoff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "flight_land");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "mat-datepicker-toggle", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "mat-datepicker", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "mat-datepicker-toggle", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "mat-datepicker", null, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "ngx-material-timepicker-toggle", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "ngx-material-timepicker", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "ngx-material-timepicker-toggle", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "ngx-material-timepicker", 21, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "mat-datepicker-toggle", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "mat-datepicker", null, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](101, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "mat-datepicker-toggle", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "mat-datepicker", null, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](111, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "ngx-material-timepicker-toggle", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "ngx-material-timepicker", 21, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](120, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "ngx-material-timepicker-toggle", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "ngx-material-timepicker", 21, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](131, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "ngx-material-timepicker-toggle", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "ngx-material-timepicker", 21, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](140, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "ngx-material-timepicker-toggle", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "ngx-material-timepicker", 21, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](149, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](153, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](160, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "mat-datepicker-toggle", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "mat-datepicker", null, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](169, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "mat-datepicker-toggle", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "mat-datepicker", null, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](179, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "ngx-material-timepicker-toggle", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "ngx-material-timepicker", 21, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](188, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "ngx-material-timepicker-toggle", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "ngx-material-timepicker", 21, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](198, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "ngx-material-timepicker-toggle", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "ngx-material-timepicker", 21, 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](207, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "ngx-material-timepicker-toggle", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "ngx-material-timepicker", 21, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchFormComponent_Template_button_click_214_listener() {
            return ctx.searchFlight();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](218, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchFormComponent_Template_button_click_220_listener() {
            return ctx.resetForm(ctx.searchFlightForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](222, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](66);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](76);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](85);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](96);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](105);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](115);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](124);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](135);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](144);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](164);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](173);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](183);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](192);

          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](202);

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchFlightForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 94, "searchFlightForm.companyName.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 96, "searchFlightForm.tripType.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trips);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 98, "searchFlightForm.flight.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.flightTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 100, "searchFlightForm.aircraft.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 102, "searchFlightForm.departingFrom.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 104, "searchFlightForm.arrivingAt.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 106, "searchFlightForm.deparDateMin.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 108, "searchFlightForm.deparDateMax.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 110, "searchFlightForm.deparTimeMin.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r5)("disableClick", true)("format", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.blueTheme);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 112, "searchFlightForm.deparTimeMax.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r6)("disableClick", true)("format", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.blueTheme);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 114, "searchFlightForm.arrivDateMin.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](101, 116, "searchFlightForm.arrivDateMax.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](111, 118, "searchFlightForm.arrivTimeMin.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r9)("disableClick", true)("format", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.blueTheme);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](120, 120, "searchFlightForm.arrivTimeMax.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r10)("disableClick", true)("format", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.blueTheme);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](131, 122, "searchFlightForm.flightDurMin.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r11)("disableClick", true)("format", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.blueTheme);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](140, 124, "searchFlightForm.flightDurMax.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r12)("disableClick", true)("format", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.blueTheme);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](149, 126, "searchFlightForm.farMin.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](153, 128, "searchFlightForm.farMax.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](146, _c0, ctx.showBack ? "flex" : "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](160, 130, "searchFlightForm.backDateMin.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](169, 132, "searchFlightForm.backDateMax.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](179, 134, "searchFlightForm.backTimeMin.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r15)("disableClick", true)("format", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.blueTheme);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](188, 136, "searchFlightForm.backTimeMax.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r16)("disableClick", true)("format", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.blueTheme);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](148, _c0, ctx.showConnection ? "flex" : "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](198, 138, "searchFlightForm.connectDurMin.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r17)("disableClick", true)("format", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.blueTheme);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](207, 140, "searchFlightForm.connectDurMax.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r18)("disableClick", true)("format", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.blueTheme);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](218, 142, "searchFlightForm.searchButton.label"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](222, 144, "searchFlightForm.cancelButton.label"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_9__["TimepickerDirective"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_9__["ɵc"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_9__["NgxMaterialTimepickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-form',
          templateUrl: './search-form.component.html'
        }]
      }], function () {
        return [{
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: _app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_4__["FlightsService"]
        }];
      }, {
        onSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        showFlightsList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/csvDataExporter/CsvDataService.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/csvDataExporter/CsvDataService.ts ***!
    \**********************************************************/

  /*! exports provided: CsvDataService */

  /***/
  function srcAppSharedCsvDataExporterCsvDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CsvDataService", function () {
      return CsvDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _util_pipes_i18n_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/pipes/i18n-date.pipe */
    "./src/app/shared/util/pipes/i18n-date.pipe.ts");
    /* harmony import */


    var _util_pipes_replace_null_value_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util/pipes/replace-null-value.pipe */
    "./src/app/shared/util/pipes/replace-null-value.pipe.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var CsvDataService = /*#__PURE__*/function () {
      function CsvDataService(translateService) {
        _classCallCheck(this, CsvDataService);

        this.translateService = translateService;
        this.locale = '';
        this.i18nDatePipe = new _util_pipes_i18n_date_pipe__WEBPACK_IMPORTED_MODULE_1__["I18nDatePipe"](this.translateService);
        this.replaceNullValuePipe = new _util_pipes_replace_null_value_pipe__WEBPACK_IMPORTED_MODULE_2__["ReplaceNullValuePipe"]();
        this.headerList = [this.translateService.instant('flightsList.flightNb.label'), this.translateService.instant('flightsList.company.label'), this.translateService.instant('flightsList.flight.label'), this.translateService.instant('flightsList.trip.label'), this.translateService.instant('flightsList.deparDate.label'), this.translateService.instant('flightsList.arrivDate.label'), this.translateService.instant('flightsList.backDate.label'), this.translateService.instant('flightsList.departingFrom.label'), this.translateService.instant('flightsList.flightDuration.label'), this.translateService.instant('flightsList.connection.label'), this.translateService.instant('flightsList.aircraft.label'), this.translateService.instant('flightsList.arrivingAt.label')];
      }

      return _createClass(CsvDataService, [{
        key: "downloadFile",
        value: function downloadFile(data) {
          var csvData = this.ConvertToCSV(data, this.headerList);
          var blob = new Blob(["\uFEFF" + csvData], {
            type: 'text/csv;charset=utf-8;'
          });
          var dwldLink = document.createElement("a");
          var url = URL.createObjectURL(blob);
          var isSafariBrowser = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;

          if (isSafariBrowser) {
            //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
          }

          dwldLink.setAttribute("href", url);
          dwldLink.setAttribute("download", this.translateService.instant('csvExport.filename.label') + ".csv");
          dwldLink.style.visibility = "hidden";
          document.body.appendChild(dwldLink);
          dwldLink.click();
          document.body.removeChild(dwldLink);
        }
      }, {
        key: "ConvertToCSV",
        value: function ConvertToCSV(objArray, headerList) {
          var array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
          var str = '';
          var row = 'Id;';

          for (var index in headerList) {
            row += headerList[index] + ';';
          }

          row = row.slice(0, -1);
          str += row + '\r\n';

          for (var i = 0; i < array.length; i++) {
            var line = array[i]["idFlight"] + '';

            for (var _index in headerList) {
              var head = headerList[_index];

              if (head === this.translateService.instant('flightsList.flightNb.label')) {
                line += ';' + this.replaceNullValuePipe.transform(array[i]["idFlight"]);
              } else if (head === this.translateService.instant('flightsList.company.label')) {
                line += ';' + this.replaceNullValuePipe.transform(this.translateService.instant('searchFlightForm.company.' + array[i]["companyName"]));
              } else if (head === this.translateService.instant('flightsList.flight.label')) {
                line += ';' + this.replaceNullValuePipe.transform(this.translateService.instant('searchFlightForm.flightType.' + array[i]["flightType"]));
              } else if (head === this.translateService.instant('flightsList.trip.label')) {
                line += ';' + this.replaceNullValuePipe.transform(this.translateService.instant('searchFlightForm.trip.' + array[i]["travelType"]));
              } else if (head === this.translateService.instant('flightsList.deparDate.label')) {
                line += ';' + this.replaceNullValuePipe.transform(this.i18nDatePipe.transform(array[i]["departureDate"]));
              } else if (head === this.translateService.instant('flightsList.arrivDate.label')) {
                line += ';' + this.replaceNullValuePipe.transform(this.i18nDatePipe.transform(array[i]["arrivalDate"]));
              } else if (head === this.translateService.instant('flightsList.backDate.label')) {
                line += ';' + this.replaceNullValuePipe.transform(this.i18nDatePipe.transform(array[i]["backDate"]));
              } else if (head === this.translateService.instant('flightsList.departingFrom.label')) {
                line += ';' + this.replaceNullValuePipe.transform(array[i]["departureLocation"]);
              } else if (head === this.translateService.instant('flightsList.flightDuration.label')) {
                line += ';' + this.replaceNullValuePipe.transform(array[i]["flightDuration"]);
              } else if (head === this.translateService.instant('flightsList.connection.label')) {
                line += ';' + this.replaceNullValuePipe.transform(array[i]["connectionDuration"]);
              } else if (head === this.translateService.instant('flightsList.aircraft.label')) {
                line += ';' + this.replaceNullValuePipe.transform(array[i]["aircraftType"]);
              } else if (head === this.translateService.instant('flightsList.arrivingAt.label')) {
                line += ';' + this.replaceNullValuePipe.transform(array[i]["arrivalLocation"]);
              } else {
                line += ';' + array[i][head];
              }
            }

            str += line + '\r\n';
          }

          return str;
        }
      }]);
    }();

    CsvDataService.ɵfac = function CsvDataService_Factory(t) {
      return new (t || CsvDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
    };

    CsvDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CsvDataService,
      factory: CsvDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CsvDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/lang/custom-translate-loader.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/lang/custom-translate-loader.service.ts ***!
    \****************************************************************/

  /*! exports provided: CustomTranslateLoader */

  /***/
  function srcAppSharedLangCustomTranslateLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomTranslateLoader", function () {
      return CustomTranslateLoader;
    });

    var CustomTranslateLoader = /*#__PURE__*/function () {
      function CustomTranslateLoader(langService) {
        _classCallCheck(this, CustomTranslateLoader);

        this.langService = langService;
      }
      /**
       * Gets the translations by language.
       *
       * @param lang selected language.
       * @returns {Object}
       */


      return _createClass(CustomTranslateLoader, [{
        key: "getTranslation",
        value: function getTranslation(lang) {
          return this.langService.getLabels(lang);
        }
      }]);
    }();
    /***/

  },

  /***/
  "./src/app/shared/lang/services/lang.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/lang/services/lang.service.ts ***!
    \******************************************************/

  /*! exports provided: LangService */

  /***/
  function srcAppSharedLangServicesLangServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LangService", function () {
      return LangService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LangService = /*#__PURE__*/function () {
      function LangService(http) {
        _classCallCheck(this, LangService);

        this.http = http;
      }
      /**
      * Get label object representing list of labels by language : {labelKey: labelValue}.
      * @param lang The current translate selected language.
      */


      return _createClass(LangService, [{
        key: "getLabels",
        value: function getLabels(lang) {
          return this.http.get("assets/i18n/" + lang + ".json");
        }
      }]);
    }();

    LangService.ɵfac = function LangService_Factory(t) {
      return new (t || LangService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LangService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LangService,
      factory: LangService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LangService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/lang/services/language.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/lang/services/language.service.ts ***!
    \**********************************************************/

  /*! exports provided: LanguageService */

  /***/
  function srcAppSharedLangServicesLanguageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
      return LanguageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LanguageService = /*#__PURE__*/function () {
      function LanguageService(translateService, http) {
        _classCallCheck(this, LanguageService);

        this.translateService = translateService;
        this.http = http;
        this.defaultLanguage = "fr_FR";
        this.translateService.use(this.getLang());
      }
      /**
       *
       *
       * @param {string} [language=this.get()]
       * @memberof LanguageService
       */


      return _createClass(LanguageService, [{
        key: "set",
        value: function set() {
          var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getLang();
          this.translateService.use(language);
          localStorage.setItem("language", language);
        }
        /**
         *
         *
         * @returns {string}
         * @memberof LanguageService
         */

      }, {
        key: "getLang",
        value: function getLang() {
          return localStorage.getItem("language") !== null ? localStorage.getItem("language") : this.defaultLanguage;
        }
        /**
         * Add observable to could refresh the language when choosing eng or seconde language
         * on the headerBar component
         * Observable navItem source
         *
           @param {string} lang
         * @memberof LanguageService
         */

      }, {
        key: "changeLang",
        value: function changeLang(lang) {
          var langSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.defaultLanguage);
          langSource.next(lang);
        }
      }]);
    }();

    LanguageService.ɵfac = function LanguageService_Factory(t) {
      return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LanguageService,
      factory: LanguageService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/bookmark.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/models/bookmark.ts ***!
    \*******************************************/

  /*! exports provided: Bookmark */

  /***/
  function srcAppSharedModelsBookmarkTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Bookmark", function () {
      return Bookmark;
    });

    var Bookmark = /*#__PURE__*/_createClass(function Bookmark() {
      _classCallCheck(this, Bookmark);
    });
    /***/

  },

  /***/
  "./src/app/shared/models/flight.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/models/flight.ts ***!
    \*****************************************/

  /*! exports provided: Flight */

  /***/
  function srcAppSharedModelsFlightTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Flight", function () {
      return Flight;
    });

    var Flight = /*#__PURE__*/_createClass(function Flight() {
      _classCallCheck(this, Flight);
    });
    /***/

  },

  /***/
  "./src/app/shared/models/theme.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/models/theme.ts ***!
    \****************************************/

  /*! exports provided: Theme */

  /***/
  function srcAppSharedModelsThemeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Theme", function () {
      return Theme;
    });

    var Theme = /*#__PURE__*/_createClass(function Theme() {
      _classCallCheck(this, Theme);
    });
    /***/

  },

  /***/
  "./src/app/shared/services/shared.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/shared.service.ts ***!
    \***************************************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppSharedServicesSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _util_enums_companyName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/enums/companyName */
    "./src/app/shared/util/enums/companyName.ts");
    /* harmony import */


    var _util_enums_travelType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util/enums/travelType */
    "./src/app/shared/util/enums/travelType.ts");
    /* harmony import */


    var _util_enums_flightType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../util/enums/flightType */
    "./src/app/shared/util/enums/flightType.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SharedService = /*#__PURE__*/function () {
      function SharedService(http) {
        _classCallCheck(this, SharedService);

        this.http = http;
        this.companies = [];
        this.trips = [];
        this.flightTypes = [];
        this.airports = [];
        this.creationDone = false;
        this.syntheseCreationDone = false;
        this.constractType = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      return _createClass(SharedService, [{
        key: "synthesisForm",
        get: function get() {
          return this._synthesisForm;
        },
        set: function set(value) {
          this._synthesisForm = value;
        }
      }, {
        key: "searchCriteresForm",
        get: function get() {
          return this._searchCriteresForm;
        },
        set: function set(value) {
          this._searchCriteresForm = value;
        }
      }, {
        key: "initDropDownLists",
        value: function initDropDownLists() {
          var companyKeys = Object.keys(_util_enums_companyName__WEBPACK_IMPORTED_MODULE_1__["CompanyName"]);
          this.companies = companyKeys.slice(companyKeys.length / 2);
          var tripKeys = Object.keys(_util_enums_travelType__WEBPACK_IMPORTED_MODULE_2__["TravelType"]);
          this.trips = tripKeys.slice(tripKeys.length / 2);
          var flightTypesKeys = Object.keys(_util_enums_flightType__WEBPACK_IMPORTED_MODULE_3__["FlightType"]);
          this.flightTypes = flightTypesKeys.slice(flightTypesKeys.length / 2);
        }
      }, {
        key: "createFlightCriteriaForm",
        value: function createFlightCriteriaForm() {
          this._searchCriteresForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            flightType: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            travelType: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            departureLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            arrivalLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            departureDateMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            arrivalDateMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            backDateMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            departureTimeMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            arrivalTimeMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            backTimeMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            flightDurationMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            connectionDurationMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            departureDateMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            arrivalDateMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            backDateMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            departureTimeMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            arrivalTimeMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            backTimeMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            flightDurationMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            connectionDurationMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            aircraftType: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            fareMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            fareMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
          });
        }
      }, {
        key: "createSynthesisCriteriaForm",
        value: function createSynthesisCriteriaForm() {
          this.currentDate = new Date();
          this.previousDate = new Date();
          this.previousDate.setMonth(new Date().getMonth() - 1);
          this._synthesisForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            departureDateMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.previousDate),
            departureDateMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.currentDate)
          });
        }
      }]);
    }();

    SharedService.ɵfac = function SharedService_Factory(t) {
      return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
    };

    SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharedService,
      factory: SharedService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule, TranslateLoaderFactory */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateLoaderFactory", function () {
      return TranslateLoaderFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/search-form/search-form.component */
    "./src/app/shared/components/search-form/search-form.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");
    /* harmony import */


    var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-material-timepicker */
    "./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _lang_services_lang_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./lang/services/lang.service */
    "./src/app/shared/lang/services/lang.service.ts");
    /* harmony import */


    var _lang_services_language_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./lang/services/language.service */
    "./src/app/shared/lang/services/language.service.ts");
    /* harmony import */


    var _lang_custom_translate_loader_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./lang/custom-translate-loader.service */
    "./src/app/shared/lang/custom-translate-loader.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/scrolling.js");

    var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
      _classCallCheck(this, SharedModule);
    });

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"], _lang_services_lang_service__WEBPACK_IMPORTED_MODULE_15__["LangService"], _lang_services_language_service__WEBPACK_IMPORTED_MODULE_16__["LanguageService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_12__["NgxMaterialTimepickerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["ScrollingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_2__["SearchFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_12__["NgxMaterialTimepickerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["ScrollingModule"]],
        exports: [_components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_2__["SearchFormComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_2__["SearchFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_12__["NgxMaterialTimepickerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["ScrollingModule"]],
          exports: [_components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_2__["SearchFormComponent"]],
          providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"], _lang_services_lang_service__WEBPACK_IMPORTED_MODULE_15__["LangService"], _lang_services_language_service__WEBPACK_IMPORTED_MODULE_16__["LanguageService"]]
        }]
      }], null, null);
    })();

    function TranslateLoaderFactory(langService) {
      return new _lang_custom_translate_loader_service__WEBPACK_IMPORTED_MODULE_17__["CustomTranslateLoader"](langService);
    }
    /***/

  },

  /***/
  "./src/app/shared/theme/theme.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/theme/theme.service.ts ***!
    \***********************************************/

  /*! exports provided: defaultTheme, ThemeService */

  /***/
  function srcAppSharedThemeThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultTheme", function () {
      return defaultTheme;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return ThemeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var defaultTheme = {
      firstColor: '#3f51b5',
      secondColor: '#336EFF',
      thirdColor: '#B2CDD7',
      fourthColor: '#EAF9FF'
    };

    var ThemeService = /*#__PURE__*/function () {
      function ThemeService(document) {
        _classCallCheck(this, ThemeService);

        this.document = document;
        this.isThemeReady = false;
        this.colors = [];
        this.colorsSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
      }

      return _createClass(ThemeService, [{
        key: "toggleDefaultTheme",
        value: function toggleDefaultTheme() {
          this.setTheme(defaultTheme);
          this.colors = [{
            backgroundColor: ['#3f51b5', '#EAF9FF', '#B2CDD7']
          }];
        }
      }, {
        key: "setTheme",
        value: function setTheme(theme) {
          this.isThemeReady = false;
          this.setThemeForVarCss(theme);
          this.colors = [{
            backgroundColor: [theme.firstColor, theme.fourthColor, theme.thirdColor]
          }];
          this.colorsSub.next(this.colors);

          if (this.isIEOrEdge) {
            this.removeThemeStyleFromDomIfPresent();
            var style = this.buildThemeStyle(theme);
            this.document.querySelector("head").innerHTML += style;
          }

          this.isThemeReady = true;
        }
      }, {
        key: "buildThemeStyle",
        value: function buildThemeStyle(theme) {
          // --theme-color && --green variables
          var style = "<style id='theme-style'>"; //SideBar

          style += "\n    .menu {\n      background: ".concat(theme.firstColor, ";\n    }\n    .menu a:hover {\n      background: ").concat(theme.secondColor, ";\n    }\n    #titbar {\n      background: ").concat(theme.thirdColor, ";\n  }\n  #mainBanner {\n    background:none no-repeat scroll left bottom ").concat(theme.firstColor, ";\n}\n#flights tr:nth-child(even),#result tr:nth-child(even) {background:").concat(theme.fourthColor, "}\nTABLE.t-data-grid TR:nth-child(even),#result tr:nth-child(even) {background:").concat(theme.fourthColor, "}\n#flights .mat-cell a{\n    color: ").concat(theme.firstColor, ";\n}\n#mainBanner p span.expand{\n  color: ").concat(theme.firstColor, ";\n}\n#action #buttonBar{\n  background-color: ").concat(theme.fourthColor, ";\n}\n  ");
          style += "</style>";
          return style;
        }
      }, {
        key: "removeThemeStyleFromDomIfPresent",
        value: function removeThemeStyleFromDomIfPresent() {
          var styleDomElement = this.document.querySelector("#theme-style");

          if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(styleDomElement)) {
            styleDomElement.parentNode.removeChild(styleDomElement);
          }
        }
      }, {
        key: "setThemeForVarCss",
        value: function setThemeForVarCss(theme) {
          Object.keys(theme).forEach(function (k) {
            return document.documentElement.style.setProperty("--".concat(k), theme[k]);
          });
        }
      }]);
    }();

    ThemeService.ɵfac = function ThemeService_Factory(t) {
      return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ThemeService,
      factory: ThemeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/util/dateAdapter/locale-date-adapter.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/util/dateAdapter/locale-date-adapter.ts ***!
    \****************************************************************/

  /*! exports provided: LocaleDateAdapter */

  /***/
  function srcAppSharedUtilDateAdapterLocaleDateAdapterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocaleDateAdapter", function () {
      return LocaleDateAdapter;
    });
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LocaleDateAdapter = /*#__PURE__*/function (_angular_material__WE) {
      function LocaleDateAdapter() {
        _classCallCheck(this, LocaleDateAdapter);

        return _callSuper(this, LocaleDateAdapter, arguments);
      }

      _inherits(LocaleDateAdapter, _angular_material__WE);

      return _createClass(LocaleDateAdapter, [{
        key: "parse",
        value: function parse(value) {
          if (typeof value === 'string' && value.indexOf('/') > -1) {
            var str = value.split('/');

            if (str.length < 2 || isNaN(+str[0]) || isNaN(+str[1]) || isNaN(+str[2])) {
              return null;
            }

            return new Date(Number(str[2]), Number(str[1]) - 1, Number(str[0]), 12);
          }

          var timestamp = typeof value === 'number' ? value : Date.parse(value);
          return isNaN(timestamp) ? null : new Date(timestamp);
        }
      }]);
    }(_angular_material__WEBPACK_IMPORTED_MODULE_0__["NativeDateAdapter"]);

    LocaleDateAdapter.ɵfac = function LocaleDateAdapter_Factory(t) {
      return ɵLocaleDateAdapter_BaseFactory(t || LocaleDateAdapter);
    };

    LocaleDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LocaleDateAdapter,
      factory: LocaleDateAdapter.ɵfac
    });

    var ɵLocaleDateAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](LocaleDateAdapter);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocaleDateAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/util/directives/matElevationDirective.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/util/directives/matElevationDirective.ts ***!
    \*****************************************************************/

  /*! exports provided: MatElevationDirective */

  /***/
  function srcAppSharedUtilDirectivesMatElevationDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatElevationDirective", function () {
      return MatElevationDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MatElevationDirective = /*#__PURE__*/function () {
      function MatElevationDirective(element, renderer) {
        _classCallCheck(this, MatElevationDirective);

        this.element = element;
        this.renderer = renderer;
      }

      return _createClass(MatElevationDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.clicked === false) {
            this.removeFullScreen();
          }
        }
      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          this.setElevation();
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.removeElevation();
        }
      }, {
        key: "onClick",
        value: function onClick() {
          if (this.clicked === true) {
            this.addFullScreen();
          } else {
            this.removeFullScreen();
          }
        }
      }, {
        key: "setElevation",
        value: function setElevation() {
          this.renderer.addClass(this.element.nativeElement, "mat-elevation-z24");
        }
      }, {
        key: "removeElevation",
        value: function removeElevation() {
          this.renderer.removeClass(this.element.nativeElement, "mat-elevation-z24");
        }
      }, {
        key: "addFullScreen",
        value: function addFullScreen() {
          this.renderer.addClass(this.element.nativeElement, 'fullscreen');
          this.renderer.setStyle(this.element.nativeElement, 'box-shadow', 'rgb(180, 180, 180) 329px 237px 365px 69px');
        }
      }, {
        key: "removeFullScreen",
        value: function removeFullScreen() {
          this.renderer.removeClass(this.element.nativeElement, 'fullscreen');
          this.renderer.removeStyle(this.element.nativeElement, 'box-shadow');
        }
      }]);
    }();

    MatElevationDirective.ɵfac = function MatElevationDirective_Factory(t) {
      return new (t || MatElevationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    MatElevationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatElevationDirective,
      selectors: [["", "matElevation", ""]],
      hostBindings: function MatElevationDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MatElevationDirective_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function MatElevationDirective_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          })("click", function MatElevationDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        clicked: ["matElevation", "clicked"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatElevationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matElevation]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        clicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matElevation']
        }],
        onMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseenter']
        }],
        onMouseLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave']
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/util/enums/companyName.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/util/enums/companyName.ts ***!
    \**************************************************/

  /*! exports provided: CompanyName */

  /***/
  function srcAppSharedUtilEnumsCompanyNameTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyName", function () {
      return CompanyName;
    });

    var CompanyName;

    (function (CompanyName) {
      CompanyName[CompanyName["TAP"] = 0] = "TAP";
      CompanyName[CompanyName["AIRFRANCE"] = 1] = "AIRFRANCE";
      CompanyName[CompanyName["EMIRATES"] = 2] = "EMIRATES";
      CompanyName[CompanyName["IBERIA"] = 3] = "IBERIA";
      CompanyName[CompanyName["QATARAIRWAYS"] = 4] = "QATARAIRWAYS";
    })(CompanyName || (CompanyName = {}));
    /***/

  },

  /***/
  "./src/app/shared/util/enums/flightType.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/util/enums/flightType.ts ***!
    \*************************************************/

  /*! exports provided: FlightType */

  /***/
  function srcAppSharedUtilEnumsFlightTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightType", function () {
      return FlightType;
    });

    var FlightType;

    (function (FlightType) {
      FlightType[FlightType["DIRECT"] = 0] = "DIRECT";
      FlightType[FlightType["CONNECTING"] = 1] = "CONNECTING";
    })(FlightType || (FlightType = {}));
    /***/

  },

  /***/
  "./src/app/shared/util/enums/travelType.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/util/enums/travelType.ts ***!
    \*************************************************/

  /*! exports provided: TravelType */

  /***/
  function srcAppSharedUtilEnumsTravelTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelType", function () {
      return TravelType;
    });

    var TravelType;

    (function (TravelType) {
      TravelType[TravelType["ONEWAYTICKET"] = 0] = "ONEWAYTICKET";
      TravelType[TravelType["ROUNDTRIP"] = 1] = "ROUNDTRIP";
    })(TravelType || (TravelType = {}));
    /***/

  },

  /***/
  "./src/app/shared/util/matchValidators/errorStateMatcher.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/util/matchValidators/errorStateMatcher.ts ***!
    \******************************************************************/

  /*! exports provided: MyErrorStateMatcher */

  /***/
  function srcAppSharedUtilMatchValidatorsErrorStateMatcherTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
      return MyErrorStateMatcher;
    });

    var MyErrorStateMatcher = /*#__PURE__*/function () {
      function MyErrorStateMatcher() {
        _classCallCheck(this, MyErrorStateMatcher);
      }

      return _createClass(MyErrorStateMatcher, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          var isSubmitted = form && form.submitted;
          return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        }
      }]);
    }();
    /***/

  },

  /***/
  "./src/app/shared/util/matchValidators/must-match.validator.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/util/matchValidators/must-match.validator.ts ***!
    \*********************************************************************/

  /*! exports provided: MustMatch */

  /***/
  function srcAppSharedUtilMatchValidatorsMustMatchValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
      return MustMatch;
    }); // custom validator to check that two fields match


    function MustMatch(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/shared/util/matchValidators/password-strength.validator.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/util/matchValidators/password-strength.validator.ts ***!
    \****************************************************************************/

  /*! exports provided: PasswordStrengthValidator */

  /***/
  function srcAppSharedUtilMatchValidatorsPasswordStrengthValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordStrengthValidator", function () {
      return PasswordStrengthValidator;
    });

    var PasswordStrengthValidator = function PasswordStrengthValidator(control) {
      var value = control.value || '';
      var msg = "";

      if (!value) {
        return null;
      }

      var upperCaseCharacters = /[A-Z]+/g;
      var lowerCaseCharacters = /[a-z]+/g;
      var numberCharacters = /[0-9]+/g;
      var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

      if (upperCaseCharacters.test(value) === false || lowerCaseCharacters.test(value) === false || numberCharacters.test(value) === false || specialCharacters.test(value) === false) {
        return {
          passwordStrength: 'Password not valid'
        };
      }
    };
    /***/

  },

  /***/
  "./src/app/shared/util/pipes/i18n-date.pipe.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/util/pipes/i18n-date.pipe.ts ***!
    \*****************************************************/

  /*! exports provided: I18nDatePipe */

  /***/
  function srcAppSharedUtilPipesI18nDatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "I18nDatePipe", function () {
      return I18nDatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var I18nDatePipe = /*#__PURE__*/function () {
      function I18nDatePipe(translateService) {
        _classCallCheck(this, I18nDatePipe);

        this.translateService = translateService;
      }

      return _createClass(I18nDatePipe, [{
        key: "transform",
        value: function transform(value) {
          var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "dd MMMM yyyy";
          var ngPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.translateService.currentLang);
          return ngPipe.transform(value, pattern);
        }
      }]);
    }();

    I18nDatePipe.ɵfac = function I18nDatePipe_Factory(t) {
      return new (t || I18nDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
    };

    I18nDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "i18nDate",
      type: I18nDatePipe,
      pure: false
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](I18nDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'i18nDate',
          pure: false
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/util/pipes/replace-null-value.pipe.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/util/pipes/replace-null-value.pipe.ts ***!
    \**************************************************************/

  /*! exports provided: ReplaceNullValuePipe */

  /***/
  function srcAppSharedUtilPipesReplaceNullValuePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReplaceNullValuePipe", function () {
      return ReplaceNullValuePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ReplaceNullValuePipe = /*#__PURE__*/function () {
      function ReplaceNullValuePipe() {
        _classCallCheck(this, ReplaceNullValuePipe);
      }

      return _createClass(ReplaceNullValuePipe, [{
        key: "transform",
        value: function transform(value) {
          var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          return value === null ? '-' : value;
        }
      }]);
    }();

    ReplaceNullValuePipe.ɵfac = function ReplaceNullValuePipe_Factory(t) {
      return new (t || ReplaceNullValuePipe)();
    };

    ReplaceNullValuePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "replaceNullValue",
      type: ReplaceNullValuePipe,
      pure: false
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplaceNullValuePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'replaceNullValue',
          pure: false
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/util/resolvers/flight-resolver.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/util/resolvers/flight-resolver.service.ts ***!
    \******************************************************************/

  /*! exports provided: FlightResolverService */

  /***/
  function srcAppSharedUtilResolversFlightResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightResolverService", function () {
      return FlightResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/flights/services/flights.service */
    "./src/app/flights/services/flights.service.ts");

    var FlightResolverService = /*#__PURE__*/function () {
      function FlightResolverService(flightsService) {
        _classCallCheck(this, FlightResolverService);

        this.flightsService = flightsService;
      }

      return _createClass(FlightResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.flightsService.flightDetails;
        }
      }]);
    }();

    FlightResolverService.ɵfac = function FlightResolverService_Factory(t) {
      return new (t || FlightResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_1__["FlightsService"]));
    };

    FlightResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FlightResolverService,
      factory: FlightResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_flights_services_flights_service__WEBPACK_IMPORTED_MODULE_1__["FlightsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: "/flight-webservices/api/v1.0/flights"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/masales/Development/projects/flight-app/flight-app-front/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map