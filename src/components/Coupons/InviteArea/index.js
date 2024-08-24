import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

export default class InviteArea extends Component {
  render() {
    return (
      <View style={styles.container_area}>
        <View style={styles.container}>
          <Text style={styles.invite_text}>Arkadaşlarını Davet Et</Text>
          <View style={styles.items_location}>
            <Image style={styles.item_image} source={require("../../../assets/davet/invite.png")} />
            <View style={styles.right_items_location}>
              <Text style={styles.right_items_text}>Arkadaşını davet et 150 TL kupon
                kazan!</Text>
              <TouchableOpacity style={styles.button_area}>
                <Text style={styles.button_text}>Hemen davet et</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
