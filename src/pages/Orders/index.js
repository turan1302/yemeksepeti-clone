import React, { Component } from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import OrderItem from "../../components/Orders/OrderItem";

import styles from "./styles";

export default class Orders extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#ea004b"}/>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll_area}>
          <Text style={styles.text_area}> Siparişlerim </Text>
          <OrderItem />
        </ScrollView>
      </View>
    );
  }
}
