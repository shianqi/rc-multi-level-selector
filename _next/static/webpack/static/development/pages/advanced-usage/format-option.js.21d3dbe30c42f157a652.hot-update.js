webpackHotUpdate("static/development/pages/advanced-usage/format-option.js",{

/***/ "./docs/src/components/AppWrapper.jsx":
/*!********************************************!*\
  !*** ./docs/src/components/AppWrapper.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var REDUX_app_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! REDUX/app/action */ "./docs/src/redux/app/action.js");
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppBar */ "./docs/src/components/AppBar.jsx");
/* harmony import */ var _AppDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AppDrawer */ "./docs/src/components/AppDrawer.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n  }\n\n  #root {\n    display: flex;\n    flex: 1 1 0;\n  }\n\n  #__next {\n    height: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var GlobalStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());
var Root = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AppWrapper__Root",
  componentId: "sc-1nmjdd2-0"
})(["flex-grow:1;z-index:1;overflow:hidden;position:relative;display:flex;height:100%;"]);
var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main.withConfig({
  displayName: "AppWrapper__Main",
  componentId: "sc-1nmjdd2-1"
})(["flex-grow:1;overflow-y:auto;background-color:", ";padding:", "px;& >:first-child{margin-top:0 !important;}"], function (props) {
  return props.theme.palette.background.default;
}, function (props) {
  return props.theme.spacing.unit * 3;
});

var AppWrapper =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AppWrapper, _React$PureComponent);

  function AppWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AppWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AppWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      mobileOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDrawerToggle", function () {
      _this.setState(function (state) {
        return {
          mobileOpen: !state.mobileOpen
        };
      });
    });

    return _this;
  }

  _createClass(AppWrapper, [{
    key: "render",
    value: function render() {
      var mobileOpen = this.state.mobileOpen;
      var _this$props = this.props,
          children = _this$props.children,
          actions = _this$props.actions,
          language = _this$props.language,
          loading = _this$props.loading;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Root, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyled, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        loading: loading,
        language: language,
        toggleLoadingState: actions.toggleLoadingState,
        handleDrawerToggle: this.handleDrawerToggle,
        handleChangeLanguage: actions.changeLanguage
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppDrawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        open: mobileOpen,
        handleDrawerToggle: this.handleDrawerToggle
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, null), children));
    }
  }]);

  return AppWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  var app = state.app,
      menu = state.menu;
  var menuOpenState = menu.menuOpenState;
  var language = app.language,
      loading = app.loading;
  return {
    loading: loading,
    language: language,
    menuOpenState: menuOpenState
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(REDUX_app_action__WEBPACK_IMPORTED_MODULE_5__["default"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(AppWrapper));

/***/ })

})
//# sourceMappingURL=format-option.js.21d3dbe30c42f157a652.hot-update.js.map