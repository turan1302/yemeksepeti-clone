import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";

import styles from "./styles";

export default class Index extends Component {
  render() {
    const { title, iconActive, item, active } = this.props;

    return (
      <TouchableOpacity style={styles.button_area}>
        <View style={styles.button_top_items_area}>
          <Text style={{ color: "black" }}>{title}</Text>
          {(iconActive === true) &&
            <Octicons name={"pencil"} size={20} color={"black"} />
          }
        </View>
        <View style={styles.item_area}>
          <Text style={styles.item_text}>{item}</Text>
        </View>
        {(active === true) &&
          <View style={styles.active_area}>
            <Text style={styles.active_text}>Onaylanmış</Text>
          </View>}
      </TouchableOpacity>
    );
  }
}
