"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Button = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var colors_1 = require("../styles/colors");
function Button(_a) {
    var title = _a.title, rest = __rest(_a, ["title"]);
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, __assign({ style: style.container, activeOpacity: 0.2 }, rest),
        react_1["default"].createElement(react_native_1.Text, { style: style.text }, title)));
}
exports.Button = Button;
var style = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: colors_1["default"].purple_light,
        borderColor: colors_1["default"].purple_dark,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        height: 56,
        paddingHorizontal: 50
    },
    text: {
        color: colors_1["default"].white,
        fontSize: 20
    }
});
