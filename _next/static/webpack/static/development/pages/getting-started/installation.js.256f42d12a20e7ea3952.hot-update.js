webpackHotUpdate("static/development/pages/getting-started/installation.js",{

/***/ "./docs/src/components/Document.jsx":
/*!******************************************!*\
  !*** ./docs/src/components/Document.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var UTILS_novaCodeHighlighting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! UTILS/novaCodeHighlighting */ "./docs/src/utils/novaCodeHighlighting.js");
/* harmony import */ var UTILS_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! UTILS/theme */ "./docs/src/utils/theme.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  hr {\n    margin: 0;\n    border: 0;\n    border-top: 1px solid ", ";\n    margin-bottom: 8px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var GlobaNova = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), UTILS_novaCodeHighlighting__WEBPACK_IMPORTED_MODULE_4__["default"]);
var DocumentStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject2(), UTILS_theme__WEBPACK_IMPORTED_MODULE_5__["paletteGrey"][200]);
var H1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, props, {
    variant: "h1"
  }));
}).withConfig({
  displayName: "Document__H1",
  componentId: "alx4rd-0"
})(["opacity:1;border-bottom:1px solid #eaecef;margin-bottom:16px;margin-top:24px;position:relative;&:first-child{margin-top:0;}"]);
var H2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, props, {
    variant: "h2"
  }));
}).withConfig({
  displayName: "Document__H2",
  componentId: "alx4rd-1"
})(["opacity:1;border-bottom:1px solid #eaecef;margin-bottom:16px;margin-top:24px;position:relative;&:first-child{margin-top:0;}"]);
var H3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, props, {
    variant: "h3"
  }));
}).withConfig({
  displayName: "Document__H3",
  componentId: "alx4rd-2"
})(["opacity:1;border-bottom:1px solid #eaecef;margin-bottom:16px;margin-top:24px;position:relative;"]);
var H4 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, props, {
    variant: "h4"
  }));
}).withConfig({
  displayName: "Document__H4",
  componentId: "alx4rd-3"
})(["opacity:1;border-bottom:1px solid #eaecef;margin-bottom:16px;margin-top:24px;position:relative;"]);
var H5 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, props, {
    variant: "h5"
  }));
}).withConfig({
  displayName: "Document__H5",
  componentId: "alx4rd-4"
})(["opacity:1;position:relative;"]);
var H6 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, props, {
    variant: "h6"
  }));
}).withConfig({
  displayName: "Document__H6",
  componentId: "alx4rd-5"
})(["opacity:1;position:relative;"]);
var A = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Document__A",
  componentId: "alx4rd-6"
})(["background-color:rgba(187,239,253,0.3);text-decoration:none;color:rgba(0,0,0,0.87);border-bottom:1px solid rgba(0,0,0,0.38);&:hover{border-bottom:1px solid rgba(0,0,0,0.87);}"]);
var P = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, props, {
    variant: "body1"
  }));
}).withConfig({
  displayName: "Document__P",
  componentId: "alx4rd-7"
})(["opacity:1;"]);
var UL = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Document__UL",
  componentId: "alx4rd-8"
})(["opacity:1;"]);
var LI = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Document__LI",
  componentId: "alx4rd-9"
})(["opacity:1;"]);
var Table = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].table.withConfig({
  displayName: "Document__Table",
  componentId: "alx4rd-10"
})(["display:block;overflow:auto;width:100%;line-height:1.5;border-collapse:collapse;border-spacing:0;background:#fff;"]);
var TR = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].tr.withConfig({
  displayName: "Document__TR",
  componentId: "alx4rd-11"
})(["border-top:1px solid #c6cbd1;&:nth-child(2n){background-color:#f6f8fa;}"]);
var TD = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].td.withConfig({
  displayName: "Document__TD",
  componentId: "alx4rd-12"
})(["border:1px solid #dfe2e5;min-width:200px;padding:6px 13px;"]);
var TH = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].th.withConfig({
  displayName: "Document__TH",
  componentId: "alx4rd-13"
})(["border:1px solid #dfe2e5;padding:6px 13px;"]);
var InlineCode = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].code.withConfig({
  displayName: "Document__InlineCode",
  componentId: "alx4rd-14"
})(["padding:2px 4px;background-color:#f2f2f2;border:none;font-size:16px;white-space:pre-wrap;color:#c7254e;border-radius:4px;"]);
var Code = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].code.withConfig({
  displayName: "Document__Code",
  componentId: "alx4rd-15"
})(["overflow-x:auto;background:#282c34;color:#abb2bf;"]);
var Pre = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].pre.withConfig({
  displayName: "Document__Pre",
  componentId: "alx4rd-16"
})(["overflow-x:auto;padding:12px 18px;background:#282c34;color:#abb2bf;border-radius:4px;"]);
var Blockquote = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].blockquote.withConfig({
  displayName: "Document__Blockquote",
  componentId: "alx4rd-17"
})(["margin:16px 0;border-left:", "px solid ", ";background:", ";padding:16px 24px;"], UTILS_theme__WEBPACK_IMPORTED_MODULE_5__["spacingUnit"], UTILS_theme__WEBPACK_IMPORTED_MODULE_5__["paletteSecondaryMain"], UTILS_theme__WEBPACK_IMPORTED_MODULE_5__["paletteGrey"][200]);

var getDocs = function getDocs(name, lang) {
  return __webpack_require__("./docs/src/pages sync recursive ^\\.\\/.*\\.mdx$")("./".concat(name).concat(lang, ".mdx")).default;
};

var Document =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Document, _React$PureComponent);

  function Document() {
    _classCallCheck(this, Document);

    return _possibleConstructorReturn(this, _getPrototypeOf(Document).apply(this, arguments));
  }

  _createClass(Document, [{
    key: "render",
    value: function render() {
      var language = this.props.language;
      var long = language === 'en' ? '' : "-".concat(language);
      var _this$props$name = this.props.name,
          name = _this$props$name === void 0 ? 'installation' : _this$props$name;
      var Component = getDocs(name, long);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobaNova, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DocumentStyle, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
        components: {
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          h5: H5,
          h6: H6,
          ul: UL,
          li: LI,
          p: P,
          a: A,
          table: Table,
          tr: TR,
          th: TH,
          td: TD,
          pre: Pre,
          code: Code,
          blockquote: Blockquote,
          inlineCode: InlineCode
        }
      }));
    }
  }]);

  return Document;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  var app = state.app;
  var language = app.language;
  return {
    language: language
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Document));

/***/ })

})
//# sourceMappingURL=installation.js.256f42d12a20e7ea3952.hot-update.js.map