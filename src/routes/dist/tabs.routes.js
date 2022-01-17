"use strict";
exports.__esModule = true;
var react_1 = require("react");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var colors_1 = require("../styles/colors");
var PlantSelect_1 = require("../pages/PlantSelect");
var vector_icons_1 = require("@expo/vector-icons");
var MyPlants_1 = require("../pages/MyPlants");
var react_native_1 = require("react-native");
var AppTab = bottom_tabs_1.createBottomTabNavigator();
var AuthRoutes = function () {
    return (react_1["default"].createElement(AppTab.Navigator, { tabBarOptions: {
            activeTintColor: colors_1["default"].activeMenu,
            inactiveTintColor: colors_1["default"].inactiveMenu,
            labelPosition: 'beside-icon',
            style: {
                paddingVertical: react_native_1.Platform.OS === 'ios' ? 20 : 0,
                height: 88
            }
        } },
        react_1["default"].createElement(AppTab.Screen, { name: "Nova Planta", component: PlantSelect_1.PlantSelect, options: {
                tabBarIcon: (function (_a) {
                    var size = _a.size, color = _a.color;
                    return (react_1["default"].createElement(vector_icons_1.MaterialIcons, { name: "add-circle-outline", size: size, color: color }));
                })
            } }),
        react_1["default"].createElement(AppTab.Screen, { name: "Minhas Plantas", component: MyPlants_1.MyPlants, options: {
                tabBarIcon: (function (_a) {
                    var size = _a.size, color = _a.color;
                    return (react_1["default"].createElement(vector_icons_1.MaterialIcons, { name: "format-list-bulleted", size: size, color: color }));
                })
            } })));
};
exports["default"] = AuthRoutes;
