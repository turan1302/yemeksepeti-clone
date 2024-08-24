import React, { Component } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import CartDetail from "../../components/Cart/CartDetail";

export default class Cart extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
        <StatusBar backgroundColor={"#ea004b"} />
        <CartDetail/>
      </View>
    );
  }
}
