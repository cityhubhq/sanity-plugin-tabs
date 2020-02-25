"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formBuilder = require("part:@sanity/form-builder");

var _default2 = _interopRequireDefault(require("part:@sanity/components/labels/default"));

var PathUtils = _interopRequireWildcard(require("@sanity/util/paths.js"));

var _warningIcon = _interopRequireDefault(require("part:@sanity/base/warning-icon"));

var _default3 = _interopRequireDefault(require("part:@sanity/components/buttons/default"));

var _tabs = _interopRequireDefault(require("./tabs.css"));

var _defaultStyle = _interopRequireDefault(require("part:@sanity/components/formfields/default-style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setIfMissing = _formBuilder.patches.setIfMissing;

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "focusRef", _react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeTab: ""
    });

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      console.debug("[Tabs] Focus");
    });

    _defineProperty(_assertThisInitialized(_this), "getTabFields", function (tabName) {
      return _this.props.type.fields.filter(function (f) {
        return f.fieldset == tabName;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "flattenFields", function (arr) {
      var result = [];
      arr.forEach(function (a) {
        result.push(a);

        if (a.type && Array.isArray(a.type.fields)) {
          result = result.concat(_this.flattenFields(a.type.fields));
        }
      });
      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "trimChildPath", function (path, childPath) {
      return PathUtils.startsWith(path, childPath) ? PathUtils.trimLeft(path, childPath) : [];
    });

    _defineProperty(_assertThisInitialized(_this), "getFieldSet", function (path) {
      if (path && path.length > 0) {
        var f = _this.props.type.fields.find(function (f) {
          return path.findIndex(f.name) > -1;
        });

        return f.fieldset;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getTabMarkers", function (tabName) {
      var fields = _this.flattenFields(_this.getTabFields(tabName));

      var markers = fields.reduce(function (result, f) {
        var fm = _this.getFieldMarkers(f.name);

        if (fm && fm.length > 0) {
          result = result.concat(fm);
        }

        return result;
      }, []);
      return markers;
    });

    _defineProperty(_assertThisInitialized(_this), "getFieldMarkers", function (fieldName) {
      return _this.props.markers.filter(function (marker) {
        return PathUtils.startsWith([fieldName], marker.path);
      }).map(function (marker) {
        return _objectSpread({}, marker, {
          path: _this.trimChildPath([fieldName], marker.path)
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getActiveTabFields", function () {
      if (_this.state.activeTab !== "") {
        return _this.getTabFields(_this.state.activeTab);
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "onFieldFocusHandler", function (field, path) {
      var _this$props = _this.props,
          onFocus = _this$props.onFocus,
          type = _this$props.type;
      console.debug("[Tabs] FieldFocused:", field, path);
    });

    _defineProperty(_assertThisInitialized(_this), "onFieldChangeHandler", function (field, fieldPatchEvent) {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          type = _this$props2.type;
      var e = fieldPatchEvent.prefixAll(field.name).prepend(setIfMissing({
        _type: type.name
      }));
      console.debug("[Tabs] FieldChanged:", field, e);
      onChange(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTabClicked", function (fieldset) {
      _this.setState({
        activeTab: fieldset.name
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      console.debug("[Tabs] Props:", _this.props);
      var _this$props3 = _this.props,
          type = _this$props3.type,
          value = _this$props3.value,
          level = _this$props3.level;

      var tabFields = _this.getActiveTabFields();

      var contentStyle = _tabs["default"].content_document;
      console.log(_tabs["default"]);

      if (type.options.layout === "object") {
        contentStyle = _tabs["default"].content_object;
      }

      return _react["default"].createElement("div", {
        className: _tabs["default"].tabs
      }, type.title && _react["default"].createElement("div", {
        className: _defaultStyle["default"].header
      }, _react["default"].createElement("div", {
        className: _defaultStyle["default"].headerMain
      }, _react["default"].createElement(_default2["default"], {
        className: _defaultStyle["default"].label,
        level: level
      }, type.title))), type.fieldsets && type.fieldsets.length > 0 && type.fieldsets[0].single !== true && _react["default"].createElement("div", {
        className: _tabs["default"].tab_headers
      }, type.fieldsets.map(function (fs) {
        var markers = _this.getTabMarkers(fs.name);

        var validation = markers.filter(function (marker) {
          return marker.type === "validation";
        });
        var errors = validation.filter(function (marker) {
          return marker.level === "error";
        });
        var title = fs.title || "Other";
        return _react["default"].createElement(_default3["default"], {
          key: fs.name || "other",
          className: _tabs["default"].tab,
          color: "primary",
          inverted: _this.state.activeTab == fs.name ? false : true,
          onClick: function onClick() {
            return _this.onTabClicked(fs);
          },
          padding: "small"
        }, title, errors.length > 0 && _react["default"].createElement(_warningIcon["default"], {
          className: _tabs["default"].tab_header__error
        }));
      })), _react["default"].createElement("div", {
        className: contentStyle
      }, tabFields && tabFields.map(function (field) {
        var m = _this.getFieldMarkers(field.name);

        var fieldProps = _objectSpread({}, _this.props, {}, field, {
          key: field.name,
          markers: m,
          value: value && value[field.name],
          onFocus: function onFocus(path) {
            return _this.onFieldFocusHandler(field, path);
          },
          onChange: function onChange(patchEvent) {
            return _this.onFieldChangeHandler(field, patchEvent);
          }
        });

        return _react["default"].createElement(_formBuilder.FormBuilderInput, fieldProps);
      })));
    });

    return _this;
  }

  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.activeTab === "" && this.props.type.fieldsets.length > 0) {
        this.setState({
          activeTab: this.props.type.fieldsets[0].name
        });
      }
    }
  }]);

  return Tabs;
}(_react["default"].Component);

_defineProperty(Tabs, "propTypes", {
  type: _propTypes["default"].shape({
    fieldsets: _propTypes["default"].array.isRequired,
    fields: _propTypes["default"].array.isRequired
  }).isRequired,
  value: _propTypes["default"].object,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onChange: _propTypes["default"].func.isRequired,
  level: _propTypes["default"].number
});

_defineProperty(Tabs, "defaultProps", {
  level: 1
});

var _default = (0, _formBuilder.withDocument)(Tabs);

exports["default"] = _default;