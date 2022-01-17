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
exports.PlantSave = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_svg_1 = require("react-native-svg");
var Toast_1 = require("../Components/Toast");
var Button_1 = require("../Components/Button");
var react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
var core_1 = require("@react-navigation/core");
var datetimepicker_1 = require("@react-native-community/datetimepicker");
var storage_1 = require("../libs/storage");
var date_fns_1 = require("date-fns");
var waterdrop_png_1 = require("../assets/waterdrop.png");
var colors_1 = require("../styles/colors");
var fonts_1 = require("../styles/fonts");
function PlantSave() {
    var navigation = core_1.useNavigation();
    var _a = react_1.useState(new Date()), selectedDateTime = _a[0], setSelectedDateTime = _a[1];
    var _b = react_1.useState(react_native_1.Platform.OS === 'ios'), showDatePicker = _b[0], setShowDatePicker = _b[1];
    var _c = react_1.useState(false), isToastActive = _c[0], setIsToastActive = _c[1];
    var route = core_1.useRoute();
    var plant = route.params.plant;
    function handleViewToast(value) {
        setIsToastActive(value);
    }
    function handleChangeTime(event, dateTime) {
        if (react_native_1.Platform.OS == 'android') {
            setShowDatePicker(function (oldState) { return !oldState; });
        }
        /* verifica se tem uma data sendo passada e se a data passada eh menor que a atual */
        if (dateTime && date_fns_1.isBefore(dateTime, new Date())) {
            setSelectedDateTime(new Date());
            return Toast_1.Toasts({
                type: "error",
                title: "⏱",
                content: "Escolha um horario um pouco mais tarde",
                position: "top",
                onHide: function () { return handleViewToast(false); },
                onShow: function () { return handleViewToast(true); }
            });
        }
        if (dateTime) {
            setSelectedDateTime(dateTime);
        }
    }
    function handleOpenDatetimePickerForAndroid() {
        setShowDatePicker(function (oldState) { return !oldState; });
    }
    function handleNextScreen() {
        navigation.navigate('MyPlants');
    }
    function handleSave() {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, storage_1.loadPlant()];
                    case 1:
                        data = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, storage_1.savePlant(__assign(__assign({}, plant), { dateTimeNotification: selectedDateTime })).then(function () {
                                Toast_1.Toasts({
                                    type: "success",
                                    title: "Pronto 🤩!",
                                    content: "Sua plantinha foi salva.Você receberá uma notificação para lembra-lo(a) de rega-la",
                                    position: "top",
                                    onHide: function () { handleViewToast(false); handleNextScreen(); },
                                    onShow: function () { return handleViewToast(true); }
                                });
                            })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        return [2 /*return*/, Toast_1.Toasts({
                                type: "error",
                                title: "Ops! 😯",
                                content: "Falha ao salvar sua planta.Tente novamente por favor",
                                position: "top",
                                onHide: function () { return handleViewToast(false); },
                                onShow: function () { return handleViewToast(true); }
                            })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement(react_native_1.ScrollView, { showsVerticalScrollIndicator: false, contentContainerStyle: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.container },
            react_1["default"].createElement(react_native_1.View, { style: styles.plantInfo },
                react_1["default"].createElement(react_native_svg_1.SvgFromUri, { uri: plant.photo, height: 150, width: 150 }),
                react_1["default"].createElement(react_native_1.Text, { style: styles.plantName }, plant.name),
                react_1["default"].createElement(react_native_1.Text, { style: styles.plantAbout }, plant.about)),
            react_1["default"].createElement(react_native_1.View, { style: styles.controller },
                react_1["default"].createElement(react_native_1.View, { style: styles.tipsContainer },
                    react_1["default"].createElement(react_native_1.Image, { source: waterdrop_png_1["default"], style: styles.tipImage }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.tipText }, plant.water_tips)),
                react_1["default"].createElement(react_native_1.Text, { style: styles.alertLabel }, "Ecolha o melhor hor\u00E1rio para ser lembrado:"),
                showDatePicker &&
                    react_1["default"].createElement(datetimepicker_1["default"], { value: selectedDateTime, mode: 'time', display: 'default', onChange: handleChangeTime }),
                react_native_1.Platform.OS === 'android' && (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.dateTimePickerButton, onPress: handleOpenDatetimePickerForAndroid },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.dateTimePickerText }, "Hor\u00E1rio " + date_fns_1.format(selectedDateTime, 'HH:mm')))),
                react_1["default"].createElement(Button_1.Button, { title: 'Cadastrar planta', onPress: handleSave })))));
}
exports.PlantSave = PlantSave;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: colors_1["default"].shape
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors_1["default"].shape
    },
    plantName: {
        fontFamily: fonts_1["default"].heading,
        fontSize: 24,
        color: colors_1["default"].heading,
        marginTop: 15
    },
    plantAbout: {
        textAlign: 'center',
        fontFamily: fonts_1["default"].text,
        color: colors_1["default"].heading,
        fontSize: 17,
        marginTop: 10
    },
    controller: {
        backgroundColor: colors_1["default"].white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: react_native_iphone_x_helper_1.getBottomSpace() || 20
    },
    tipsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors_1["default"].purple_light,
        borderColor: colors_1["default"].purple_dark,
        borderWidth: 1,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 70
    },
    tipImage: {
        width: 56,
        height: 56
    },
    tipText: {
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts_1["default"].text,
        color: colors_1["default"].white,
        fontSize: 17,
        textAlign: 'center'
    },
    alertLabel: {
        textAlign: 'center',
        fontFamily: fonts_1["default"].complement,
        color: colors_1["default"].heading,
        fontSize: 12,
        marginBottom: 5
    },
    dateTimePickerButton: {
        backgroundColor: colors_1["default"].shape,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        height: 56,
        paddingVertical: 20,
        marginTop: 20,
        marginBottom: 20
    },
    dateTimePickerText: {
        color: colors_1["default"].heading,
        fontSize: 24,
        fontFamily: fonts_1["default"].text
    }
});
