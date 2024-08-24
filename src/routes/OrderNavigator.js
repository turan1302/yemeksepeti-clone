import React, { Component } from "react";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "../pages/Orders";

const Stack = createNativeStackNavigator();

export default class OrderNavigator extends React.PureComponent {


  render() {
    return (
      <Stack.Navigator screenOptions={({ route, navigation }) => {
        return {
          headerShadowVisible: false,
          headerShown: false,
        };
      }} initialRouteName={"Orders"}>
        <Stack.Screen name="Orders" component={Orders} />
      </Stack.Navigator>
    );
  }
}
