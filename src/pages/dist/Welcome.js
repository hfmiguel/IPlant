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
exports.Welcome = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var watering_png_1 = require("../assets/watering.png");
var colors_1 = require("../styles/colors");
var fonts_1 = require("../styles/fonts");
var core_1 = require("@react-navigation/core");
var async_storage_1 = require("@react-native-async-storage/async-storage");
function Welcome() {
    var navigation = core_1.useNavigation();
    function navigate() {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_storage_1["default"].getItem('@iplant:user')];
                    case 1:
                        data = _a.sent();
                        console.log("Data :", data);
                        if (typeof data != undefined && data != "" && data != null) {
                            navigation.navigate('LoggedUser');
                        }
                        else {
                            navigation.navigate('UserIdentification');
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement(react_native_1.SafeAreaView, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.wrapper },
            react_1["default"].createElement(react_native_1.Text, { style: styles.title },
                "Gerencie ",
                '\n',
                "suas plantas de",
                '\n',
                "forma facil"),
            react_1["default"].createElement(react_native_1.Image, { source: watering_png_1["default"], style: styles.image, resizeMode: "contain" }),
            react_1["default"].createElement(react_native_1.Text, { style: styles.subtitle }, "N\u00E3o esque\u00E7a mais de regar suas plantas. N\u00F3s cuidamos de lembrar voc\u00EA sempre-"),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.button, activeOpacity: 0.2, onPress: navigate },
                react_1["default"].createElement(vector_icons_1.Feather, { name: "chevron-right", style: styles.buttonIcon })))));
}
exports.Welcome = Welcome;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors_1["default"].heading,
        fontFamily: fonts_1["default"].heading,
        marginTop: 38,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors_1["default"].heading,
        fontFamily: fonts_1["default"].text
    },
    image: {
        height: react_native_1.Dimensions.get("window").width * 0.7
    },
    button: {
        backgroundColor: colors_1["default"].green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonIcon: {
        color: colors_1["default"].white,
        fontSize: 32
    }
});
