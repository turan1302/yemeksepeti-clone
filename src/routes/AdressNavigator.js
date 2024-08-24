import React, { Component } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Adress from "../pages/Adress";

const Stack = createNativeStackNavigator();

export default class AdressNavigator extends React.PureComponent {


  render() {
    return (
      <Stack.Navigator screenOptions={({ route, navigation }) => {
        return {
          headerShadowVisible: false,
          headerShown: false,
        };
      }} initialRouteName={"Adres"}>
        <Stack.Screen name="Adres" component={Adress} />
      </Stack.Navigator>
    );
  }
}
