"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _loadScript = require("./loadScript");

var _package = _interopRequireDefault(require("../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lastEditorId = 0;

var _default = /*#__PURE__*/function (_Component) {
  _inheritsLoose(_default, _Component);

  function _default(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "loadEditor", function () {
      var options = _this.props.options || {};

      if (_this.props.projectId) {
        options.projectId = _this.props.projectId;
      }

      if (_this.props.tools) {
        options.tools = _this.props.tools;
      }

      if (_this.props.appearance) {
        options.appearance = _this.props.appearance;
      }

      if (_this.props.locale) {
        options.locale = _this.props.locale;
      }

      _this.editor = unlayer.createEditor(_extends({}, options, {
        id: _this.editorId,
        displayMode: 'email',
        source: {
          name: _package["default"].name,
          version: _package["default"].version
        }
      })); // All properties starting with on[Name] are registered as event listeners.

      for (var _i = 0, _Object$entries = Object.entries(_this.props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _Object$entries[_i],
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (/^on/.test(key) && key !== 'onLoad' && key !== 'onReady') {
          _this.addEventListener(key, value);
        }
      }

      var _this$props = _this.props,
          onLoad = _this$props.onLoad,
          onReady = _this$props.onReady; // @deprecated

      onLoad && onLoad();
      if (onReady) _this.editor.addEventListener('editor:ready', onReady);
    });

    _defineProperty(_assertThisInitialized(_this), "registerCallback", function (type, callback) {
      _this.editor.registerCallback(type, callback);
    });

    _defineProperty(_assertThisInitialized(_this), "addEventListener", function (type, callback) {
      _this.editor.addEventListener(type, callback);
    });

    _defineProperty(_assertThisInitialized(_this), "loadDesign", function (design) {
      _this.editor.loadDesign(design);
    });

    _defineProperty(_assertThisInitialized(_this), "saveDesign", function (callback) {
      _this.editor.saveDesign(callback);
    });

    _defineProperty(_assertThisInitialized(_this), "exportHtml", function (callback) {
      _this.editor.exportHtml(callback);
    });

    _defineProperty(_assertThisInitialized(_this), "setMergeTags", function (mergeTags) {
      _this.editor.setMergeTags(mergeTags);
    });

    _this.editorId = props.editorId || "editor-" + ++lastEditorId;
    return _this;
  }

  var _proto = _default.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0, _loadScript.loadScript)(this.loadEditor, this.props.scriptUrl);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$minHeigh = _this$props2.minHeight,
        minHeight = _this$props2$minHeigh === void 0 ? 500 : _this$props2$minHeigh,
        _this$props2$style = _this$props2.style,
        style = _this$props2$style === void 0 ? {} : _this$props2$style;
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        minHeight: minHeight
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      id: this.editorId,
      style: _extends({}, style, {
        flex: 1
      })
    }));
  };

  return _default;
}(_react.Component);

exports["default"] = _default;
module.exports = exports.default;