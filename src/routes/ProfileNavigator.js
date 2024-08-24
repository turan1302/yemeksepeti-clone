import React, { Component } from "react";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../pages/Profile";

const Stack = createNativeStackNavigator();

export default class ProfileNavigator extends React.PureComponent {


  render() {
    return (
      <Stack.Navigator screenOptions={({ route, navigation }) => {
        return {
          headerShadowVisible: false,
          headerShown: false,
        };
      }} initialRouteName={"Profile"}>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  }
}
