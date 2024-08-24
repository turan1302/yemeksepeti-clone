import React, { Component } from "react";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Coupons from "../pages/Coupons";

const Stack = createNativeStackNavigator();

export default class CouponNavigator extends React.PureComponent {


  render() {
    return (
      <Stack.Navigator screenOptions={({ route, navigation }) => {
        return {
          headerShadowVisible: false,
          headerShown: false,
        };
      }} initialRouteName={"Coupons"}>
        <Stack.Screen name="Coupons" component={Coupons} />
      </Stack.Navigator>
    );
  }
}
