"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
var react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
var react_native_1 = require("react-native");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var colors_1 = require("../../styles/colors");
var fonts_1 = require("../../styles/fonts");
function Header() {
    var _a = react_1.useState(), userName = _a[0], setUserName = _a[1];
    var userImg = 'https://avatars.githubusercontent.com/u/14097051?v=4';
    react_1.useEffect(function () {
        function getUserName() {
            return __awaiter(this, void 0, void 0, function () {
                var user, keys;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, async_storage_1["default"].getItem("@iplant:user")];
                        case 1:
                            user = _a.sent();
                            if (!(!user || user == "" || user == null)) return [3 /*break*/, 4];
                            return [4 /*yield*/, async_storage_1["default"].getAllKeys()];
                        case 2:
                            keys = _a.sent();
                            return [4 /*yield*/, async_storage_1["default"].multiRemove(keys)];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            setUserName(user || '');
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        }
        getUserName();
    }, [userName]);
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.Text, { style: styles.greeting }, "Ol\u00E1,"),
            react_1["default"].createElement(react_native_1.Text, { style: styles.userName }, userName)),
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.Image, { style: styles.image, source: { uri: userImg } }))));
}
exports.Header = Header;
var styles = react_native_1.StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: react_native_iphone_x_helper_1.getStatusBarHeight()
    },
    greeting: {
        fontSize: 32,
        color: colors_1["default"].heading,
        fontFamily: fonts_1["default"].text
    },
    userName: {
        fontSize: 32,
        color: colors_1["default"].heading,
        fontFamily: fonts_1["default"].heading,
        lineHeight: 40
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40
    }
});
