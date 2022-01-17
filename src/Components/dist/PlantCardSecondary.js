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
exports.PlantCardSecondary = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var Swipeable_1 = require("react-native-gesture-handler/Swipeable");
var colors_1 = require("../styles/colors");
var fonts_1 = require("../styles/fonts");
var react_native_svg_1 = require("react-native-svg");
var vector_icons_1 = require("@expo/vector-icons");
function PlantCardSecondary(_a) {
    var data = _a.data, handleRemove = _a.handleRemove, rest = __rest(_a, ["data", "handleRemove"]);
    return (react_1["default"].createElement(Swipeable_1["default"], { overshootRight: false, renderRightActions: function () { return (react_1["default"].createElement(react_native_1.Animated.View, null,
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_gesture_handler_1.RectButton, { style: styles.buttonRemove, onPress: handleRemove },
                    react_1["default"].createElement(vector_icons_1.Feather, { name: "trash", size: 32, color: colors_1["default"].white }))))); } },
        react_1["default"].createElement(react_native_gesture_handler_1.RectButton, __assign({ style: styles.container }, rest),
            react_1["default"].createElement(react_native_1.View, { style: styles.viewContainer },
                react_1["default"].createElement(react_native_svg_1.SvgFromUri, { uri: data.photo, width: 50, height: 50 }),
                react_1["default"].createElement(react_native_1.Text, { style: styles.title }, data.name),
                react_1["default"].createElement(react_native_1.View, { style: styles.details },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.timeLabel }, "Regar \u00E0s"),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.time }, data.hour))))));
}
exports.PlantCardSecondary = PlantCardSecondary;
var styles = react_native_1.StyleSheet.create({
    container: {
        width: '100%'
    },
    viewContainer: {
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors_1["default"].shape,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: colors_1["default"].purple_light,
        borderStyle: 'solid'
    },
    title: {
        flex: 1,
        marginLeft: 10,
        fontFamily: fonts_1["default"].heading,
        fontSize: 17,
        color: colors_1["default"].purple_light
    },
    details: {
        alignItems: 'flex-end',
        marginRight: 6,
        color: colors_1["default"].purple_light
    },
    timeLabel: {
        fontSize: 16,
        fontFamily: fonts_1["default"].text,
        color: colors_1["default"].purple_light
    },
    time: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: fonts_1["default"].heading,
        color: colors_1["default"].purple_dark
    },
    buttonRemove: {
        width: 100,
        height: 85,
        backgroundColor: colors_1["default"].red,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 20,
        paddingLeft: 15
    }
});
