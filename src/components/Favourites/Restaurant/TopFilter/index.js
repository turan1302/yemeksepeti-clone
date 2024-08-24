import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default class TopFilter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
            <View style={styles.button_area}>
              <Text style={styles.button_text}>Teslimat</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.button_area,{marginLeft : 10}]}>
              <Text style={styles.button_text}>Gel Al</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}
