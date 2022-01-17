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
exports.MyPlants = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var colors_1 = require("../styles/colors");
var fonts_1 = require("../styles/fonts");
var waterdrop_png_1 = require("../assets/waterdrop.png");
var Header_1 = require("./Template/Header");
var storage_1 = require("../libs/storage");
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
var PlantCardSecondary_1 = require("../Components/PlantCardSecondary");
var Load_1 = require("../Components/Load");
function MyPlants() {
    var _a = react_1.useState([]), myPlants = _a[0], setMyPlants = _a[1];
    var _b = react_1.useState(true), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(), nextWatered = _c[0], setNextWatered = _c[1];
    function handleRemove(plant) {
        var _this = this;
        react_native_1.Alert.alert("Remover", "Deseja remover a " + plant.name, [
            {
                text: 'Não 🙏',
                style: 'cancel'
            },
            {
                text: 'Sim 😭',
                style: 'default',
                onPress: function () { return __awaiter(_this, void 0, void 0, function () {
                    var error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, storage_1.removePlant(plant.id)];
                            case 1:
                                _a.sent();
                                setMyPlants(function (oldData) { return (oldData.filter(function (item) { return item.id !== plant.id; })); });
                                return [3 /*break*/, 3];
                            case 2:
                                error_1 = _a.sent();
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }
            }
        ]);
    }
    react_1.useEffect(function () {
        function loadStorageData() {
            return __awaiter(this, void 0, void 0, function () {
                var plantsStoraged, nextTime, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, storage_1.loadPlant()];
                        case 1:
                            plantsStoraged = _a.sent();
                            if (typeof plantsStoraged != undefined && typeof plantsStoraged[0] != "undefined") {
                                nextTime = date_fns_1.formatDistance(new Date(plantsStoraged[0].dateTimeNotification).getTime(), new Date().getTime(), {
                                    locale: locale_1.pt
                                });
                                setNextWatered("Regue sua " + plantsStoraged[0].name + " daqui a " + nextTime);
                                setMyPlants(plantsStoraged);
                            }
                            setLoading(false);
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.log(error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        loadStorageData();
    }, []);
    if (loading)
        return react_1["default"].createElement(Load_1.Load, null);
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(Header_1.Header, null),
        react_1["default"].createElement(react_native_1.View, { style: styles.spotlight },
            react_1["default"].createElement(react_native_1.Image, { source: waterdrop_png_1["default"], style: styles.spotlightImage }),
            react_1["default"].createElement(react_native_1.Text, { style: styles.spotlightText }, nextWatered)),
        react_1["default"].createElement(react_native_1.View, { style: styles.plants },
            react_1["default"].createElement(react_native_1.Text, { style: styles.plantsTitle }, "Pr\u00F3ximas regadas"),
            react_1["default"].createElement(react_native_1.FlatList, { data: myPlants, keyExtractor: function (item) { return String(item.id); }, renderItem: function (_a) {
                    var item = _a.item;
                    return (react_1["default"].createElement(PlantCardSecondary_1.PlantCardSecondary, { data: item, handleRemove: function () { handleRemove(item); } }));
                }, showsVerticalScrollIndicator: false }))));
}
exports.MyPlants = MyPlants;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: colors_1["default"].background
    },
    spotlight: {
        backgroundColor: colors_1["default"].purple_light,
        borderColor: colors_1["default"].purple_dark,
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    spotlightImage: {
        width: 60,
        height: 60
    },
    spotlightText: {
        flex: 1,
        color: colors_1["default"].white,
        paddingHorizontal: 20
    },
    plants: {
        flex: 1,
        width: '100%'
    },
    plantsTitle: {
        fontSize: 24,
        fontFamily: fonts_1["default"].heading,
        color: colors_1["default"].heading,
        marginVertical: 20
    }
});
