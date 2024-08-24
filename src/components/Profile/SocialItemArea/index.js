import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "./styles";

export default class Index extends Component {
  render() {
    const { title,icon,color } = this.props;

    return (
      <TouchableOpacity style={styles.button_area}>
        <View style={styles.view_area}>
          <View style={styles.view_left_area}>
            <Ionicons color={color} name={icon} size={20}/>
            <Text style={styles.title_text}>{title}</Text>
          </View>
          <Text style={styles.connect_text}>Bağla</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
