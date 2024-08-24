import React, { Component } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { getFocusedRouteNameFromRoute, NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";


import { navigationRef } from "../../src/NavigationService";
import Ionicons from "react-native-vector-icons/Ionicons";
import DrawerComponent from "../components/Drawer/DrawerComponent";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { createDrawerNavigator } from "@react-navigation/drawer";
import AdressNavigator from "./AdressNavigator";
import ProfileNavigator from "./ProfileNavigator";
import AntDesign from "react-native-vector-icons/AntDesign";
import OrderNavigator from "./OrderNavigator";
import CouponNavigator from "./CouponNavigator";

const Drawer = createDrawerNavigator();

export default class Routes extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      windowDimensions: Dimensions.get("window"),
    };
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener("change", this.handleResize);
  }

  componentWillUnmount() {
    if (this.dimensionsSubscription) {
      this.dimensionsSubscription.remove();
    }
  }

  handleResize = ({ window }) => {
    this.setState({ windowDimensions: window });
  };

  render() {
    const { width, height } = Dimensions.get("window");
    const position = width > height ? "LANDSCAPE" : "PORTRAIT";

    return (
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator initialRouteName={"HomeScreen"} screenOptions={({ route }) => ({
          headerShadowVisible: false,
          headerShown: ((route) => {
            const drawerHidden = ["Favourite", "Cart","Adres","Orders","Coupons"];
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";

            if (drawerHidden.includes(routeName)) {
              return false;
            }
          })(route),
        })} drawerContent={({ navigation }) => <DrawerComponent navigation={navigation} />}>
          <Drawer.Screen name="HomeScreen" component={HomeNavigator} options={({ navigation, route }) => ({
            drawerStyle: {
              width: (position === "PORTRAIT") ? width * 0.75 : width * 0.40,
            },
            headerLeft: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => {
                  navigation.openDrawer();
                }}>
                  <MaterialIcons name={"menu"} size={23} color={"white"} />
                </TouchableOpacity>
                <View style={{ marginLeft: 20 }}>
                  <Text style={{ color: "white", fontWeight: "500", fontSize: 15 }}>Ev Adresi</Text>
                  <Text style={{ color: "white", fontSize: 13 }}>Kendi odasına tıkılmış bir developer</Text>
                </View>
              </View>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Favourite")}>
                  <Ionicons name={"heart-outline"} size={23} color={"white"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={{ marginLeft: 18 }}>
                  <Ionicons name={"bag-outline"} size={23} color={"white"} />
                </TouchableOpacity>
              </View>
            ),
            headerLeftContainerStyle: {
              paddingHorizontal: 15,
            },
            headerRightContainerStyle: {
              paddingRight: 15,
            },
            title: "",
            headerStyle: {
              shadowColor: "transparent",
              backgroundColor: "#ea004b",
            },
          })} />
          <Drawer.Screen name="AdressScreen" component={AdressNavigator} options={({ navigation, route }) => ({
            drawerStyle: {
              width: (position === "PORTRAIT") ? width * 0.75 : width * 0.40,
            },
            headerLeft: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => {
                  navigation.goBack();
                }}>
                  <MaterialIcons name={"arrow-back"} size={23} color={"black"} />
                </TouchableOpacity>
                <View style={{ marginLeft: 20 }}>
                  <Text style={{ color: "black", fontWeight: "500", fontSize: 15 }}>Adreslerim</Text>
                </View>
              </View>
            ),
            headerLeftContainerStyle: {
              paddingHorizontal: 15,
            },
            headerRightContainerStyle: {
              paddingRight: 15,
            },
            title: "",
            headerShadowVisible : true,
            headerStyle: {
              shadowOpacity : 0.1,
              backgroundColor: "white",
              borderBottomWidth : 0.19,
              borderBottomColor  :"gray"
            },
          })} />
          <Drawer.Screen name="ProfileScreen" component={ProfileNavigator} options={({ navigation, route }) => ({
            drawerStyle: {
              width: (position === "PORTRAIT") ? width * 0.75 : width * 0.40,
            },
            headerLeft: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => {
                  navigation.goBack();
                }}>
                  <AntDesign name={"close"} size={23} color={"black"} />
                </TouchableOpacity>
                <View style={{ marginLeft: 20 }}>
                  <Text style={{ color: "black", fontWeight: "500", fontSize: 15 }}>Hesabım</Text>
                </View>
              </View>
            ),
            headerLeftContainerStyle: {
              paddingHorizontal: 15,
            },
            headerRightContainerStyle: {
              paddingRight: 15,
            },
            title: "",
            headerShadowVisible : true,
            headerStyle: {
              shadowOpacity : 0.1,
              backgroundColor: "white",
              borderBottomWidth : 0.19,
              borderBottomColor  :"gray"
            },
          })} />
          <Drawer.Screen name="OrderScreen" component={OrderNavigator} options={({ navigation, route }) => ({
            drawerStyle: {
              width: (position === "PORTRAIT") ? width * 0.75 : width * 0.40,
            },
            headerLeft: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => {
                  navigation.goBack();
                }}>
                  <AntDesign name={"close"} size={23} color={"black"} />
                </TouchableOpacity>
                <View style={{ marginLeft: 20 }}>
                  <Text style={{ color: "black", fontWeight: "500", fontSize: 15 }}>Siparişlerim</Text>
                </View>
              </View>
            ),
            headerLeftContainerStyle: {
              paddingHorizontal: 15,
            },
            headerRightContainerStyle: {
              paddingRight: 15,
            },
            title: "",
            headerShadowVisible : true,
            headerStyle: {
              shadowOpacity : 0.1,
              backgroundColor: "white",
              borderBottomWidth : 0.19,
              borderBottomColor  :"gray"
            },
          })} />
          <Drawer.Screen name="CouponScreen" component={CouponNavigator} options={({ navigation, route }) => ({
            drawerStyle: {
              width: (position === "PORTRAIT") ? width * 0.75 : width * 0.40,
            },
            headerLeft: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => {
                  navigation.goBack();
                }}>
                  <AntDesign name={"arrowleft"} size={23} color={"black"} />
                </TouchableOpacity>
                <View style={{ marginLeft: 20 }}>
                  <Text style={{ color: "black", fontWeight: "500", fontSize: 15 }}>Kuponlarım</Text>
                </View>
              </View>
            ),
            headerLeftContainerStyle: {
              paddingHorizontal: 15,
            },
            headerRightContainerStyle: {
              paddingRight: 15,
            },
            title: "",
            headerShadowVisible : true,
            headerStyle: {
              shadowOpacity : 0.1,
              backgroundColor: "white",
              borderBottomWidth : 0.19,
              borderBottomColor  :"gray"
            },
          })} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
