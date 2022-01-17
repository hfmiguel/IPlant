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
exports.PlantCardPrimary = void 0;

var react_1 = require("react");

var react_native_1 = require("react-native");

var react_native_svg_1 = require("react-native-svg");

var colors_1 = require("../styles/colors");

var fonts_1 = require("../styles/fonts");

var react_native_gesture_handler_1 = require("react-native-gesture-handler");

exports.PlantCardPrimary = function (_a) {
  var data = _a.data,
      rest = __rest(_a, ["data"]);

  return react_1["default"].createElement(react_native_gesture_handler_1.RectButton, __assign({
    style: styles.container
  }, rest), react_1["default"].createElement(react_native_1.View, {
    style: styles.viewContainer
  }, react_1["default"].createElement(react_native_svg_1.SvgFromUri, {
    uri: data.photo,
    width: 70,
    height: 70
  }), react_1["default"].createElement(react_native_1.Text, {
    style: styles.text
  }, data.name)));
};

var styles = react_native_1.StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%'
  },
  viewContainer: {
    backgroundColor: colors_1["default"].shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: colors_1["default"].purple_light,
    borderStyle: 'solid'
  },
  text: {
    color: colors_1["default"].green_dark,
    fontFamily: fonts_1["default"].heading,
    marginVertical: 16
  }
});