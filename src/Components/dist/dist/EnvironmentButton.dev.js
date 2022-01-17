"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

exports.__esModule = true;
exports.EnvironmentButton = void 0;

var react_1 = require("react");

var react_native_1 = require("react-native");

var react_native_gesture_handler_1 = require("react-native-gesture-handler");

var colors_1 = require("../styles/colors");

var fonts_1 = require("../styles/fonts");

function EnvironmentButton(_a) {
  var title = _a.title,
      _b = _a.active,
      active = _b === void 0 ? false : _b,
      rest = __rest(_a, ["title", "active"]);

  return react_1["default"].createElement(react_native_gesture_handler_1.RectButton, __assign({
    style: [styles.container, active && styles.containerActive]
  }, rest), react_1["default"].createElement(react_native_1.View, {
    style: [styles.viewContainer, active && styles.containerActive]
  }, react_1["default"].createElement(react_native_1.Text, {
    style: [styles.text, active && styles.textActive]
  }, title)));
}

exports.EnvironmentButton = EnvironmentButton;
var styles = react_native_1.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors_1["default"].shape,
    width: 76,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 12
  },
  viewContainer: {
    width: '100%',
    height: '100%',
    borderColor: colors_1["default"].purple_light,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerActive: {
    backgroundColor: colors_1["default"].purple_light,
    borderColor: colors_1["default"].white
  },
  text: {
    color: colors_1["default"].heading,
    fontFamily: fonts_1["default"].text
  },
  textActive: {
    fontFamily: fonts_1["default"].heading,
    color: colors_1["default"].white
  }
});