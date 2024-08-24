import React, { Component } from "react";
import { TouchableOpacity } from "react-native";

import Home from "../pages/Home";
import Ionicons from "react-native-vector-icons/Ionicons";
import Favourite from "../pages/Favourite";
import AntDesign from "react-native-vector-icons/AntDesign";
import Cart from "../pages/Cart";


import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default class HomeNavigator extends React.PureComponent {


  render() {
    return (
      <Stack.Navigator screenOptions={({ route, navigation }) => {
        return {
          headerShadowVisible: false,
          headerShown: false,
        };
      }}
                       initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Favourite" component={Favourite} options={({ navigation }) => ({
          headerShadowVisible: false,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 15 }}>
              <AntDesign name={"arrowleft"} color={"black"} size={20} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={{ marginLeft: 18 }}>
              <Ionicons name={"bag-outline"} size={23} color={"black"} />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          title: "Favoriler",
        })} />
        <Stack.Screen name="Cart" component={Cart} options={({ navigation }) => ({
          headerShadowVisible: false,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 15 }}>
              <AntDesign name={"close"} color={"black"} size={20} />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          title: "Sepetim",
        })} />
      </Stack.Navigator>
    );
  }
}
