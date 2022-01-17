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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.PlantSelect = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var core_1 = require("@react-navigation/core");
var EnvironmentButton_1 = require("../Components/EnvironmentButton");
var PlantCardPrimary_1 = require("../Components/PlantCardPrimary");
var Load_1 = require("../Components/Load");
var Header_1 = require("./Template/Header");
var api_1 = require("../services/api");
var colors_1 = require("../styles/colors");
var fonts_1 = require("../styles/fonts");
function PlantSelect() {
    var _a = react_1.useState([]), environment = _a[0], setEnvironment = _a[1];
    var _b = react_1.useState([]), plants = _b[0], setPlants = _b[1];
    var _c = react_1.useState([]), filteredPlants = _c[0], setFilteredPlants = _c[1];
    var _d = react_1.useState("all"), environmentSelected = _d[0], setEnvironmentSelected = _d[1];
    var _e = react_1.useState(true), loading = _e[0], setLoading = _e[1];
    var _f = react_1.useState(1), page = _f[0], setPage = _f[1];
    var _g = react_1.useState(false), loadMore = _g[0], setLoadMore = _g[1];
    var navigation = core_1.useNavigation();
    function handlePlantSelect(plant) {
        navigation.navigate('PlantSave', { plant: plant });
    }
    function handleEnvironmentSelected(envValue) {
        setEnvironmentSelected(envValue);
        if (envValue === "all")
            return setFilteredPlants(plants);
        var filtered = plants.filter(function (plant) {
            return plant.environments.includes(envValue);
        });
        setFilteredPlants(filtered);
    }
    function fetchPlants() {
        return __awaiter(this, void 0, void 0, function () {
            var data_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, api_1["default"].get("plants?_sort=name&_order=asc&_page=" + page + "&_limit=8")];
                    case 1:
                        data_1 = (_a.sent()).data;
                        if (!data_1)
                            return [2 /*return*/, setLoading(true)];
                        if (page > 1) {
                            setPlants(function (oldValue) { return __spreadArrays(oldValue, data_1); });
                            setFilteredPlants(function (oldValue) { return __spreadArrays(oldValue, data_1); });
                        }
                        else {
                            setPlants(data_1);
                            setFilteredPlants(data_1);
                        }
                        setLoading(false);
                        setLoadMore(false);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function handleFetchMore(distance) {
        if (distance < 1) {
            return;
        }
        setLoadMore(true);
        setPage(function (oldValue) { return oldValue + 1; });
        fetchPlants();
    }
    /* executado antes da tela ser montada */
    react_1.useEffect(function () {
        function fetchEnviroment() {
            return __awaiter(this, void 0, void 0, function () {
                var data, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, api_1["default"].get("plants_environments?_sort=title&_order=asc")];
                        case 1:
                            data = (_a.sent()).data;
                            setEnvironment(__spreadArrays([{
                                    key: 'all',
                                    title: 'Todos'
                                }], data));
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
        fetchEnviroment();
    }, []);
    react_1.useEffect(function () {
        fetchPlants();
    }, []);
    if (loading)
        return react_1["default"].createElement(Load_1.Load, null);
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.View, { style: styles.header },
            react_1["default"].createElement(Header_1.Header, null),
            react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Em qual ambiente"),
            react_1["default"].createElement(react_native_1.Text, { style: styles.subtitle }, "voc\u00EA quer colocar sua planta ?")),
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.FlatList, { data: environment, keyExtractor: function (item) { return String(item.key); }, renderItem: function (_a) {
                    var item = _a.item;
                    return (react_1["default"].createElement(EnvironmentButton_1.EnvironmentButton, { title: item.title, active: item.key === environmentSelected, onPress: function () { return handleEnvironmentSelected(item.key); } }));
                }, horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: styles.environmentList })),
        react_1["default"].createElement(react_native_1.View, { style: styles.plants },
            react_1["default"].createElement(react_native_1.FlatList, { data: filteredPlants, keyExtractor: function (item) { return String(item.id); }, renderItem: function (_a) {
                    var item = _a.item;
                    return (react_1["default"].createElement(PlantCardPrimary_1.PlantCardPrimary, { data: item, onPress: function () { return handlePlantSelect(item); } }));
                }, showsVerticalScrollIndicator: false, numColumns: 2, contentContainerStyle: styles.plantsList, onEndReachedThreshold: 0.1, onEndReached: function (_a) {
                    var distanceFromEnd = _a.distanceFromEnd;
                    return handleFetchMore(distanceFromEnd);
                }, ListFooterComponent: loadMore
                    ? react_1["default"].createElement(react_native_1.ActivityIndicator, { color: colors_1["default"].purple })
                    : react_1["default"].createElement(react_1["default"].Fragment, null) }))));
}
exports.PlantSelect = PlantSelect;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1["default"].background
    },
    header: {
        paddingHorizontal: 30
    },
    title: {
        color: colors_1["default"].heading,
        fontFamily: fonts_1["default"].heading,
        fontSize: 17,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle: {
        fontSize: 17,
        lineHeight: 20,
        color: colors_1["default"].heading,
        fontFamily: fonts_1["default"].text
    },
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginVertical: 32
    },
    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    },
    plantsList: {}
});
