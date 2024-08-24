import React, { Component } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

export default class OrderItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      windowDimensions: Dimensions.get("window"),
    };
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener("change", this.handleResize);
  }

  componentWillUnmount() {
    if (this.dimensionsSubscription) {
      this.dimensionsSubscription.remove();
    }
  }

  handleResize = ({ window }) => {
    this.setState({ windowDimensions: window });
  };


  render() {
    const { width, height } = this.state.windowDimensions;
    const position = width > height ? "LANDSCAPE" : "PORTRAIT";

    return (
      <View style={styles.container}>
        <View style={styles.container_top_area}>
          <Image style={styles.container_top_left_image(position,width,height)} source={require("../../../assets/siparis/pasta.png")} />
          <View style={styles.container_top_right_area}>
            <View style={styles.container_top_right_first_area}>
              <Text style={styles.product_name}>Kuru Pasta</Text>
              <Text style={styles.product_price}>240.00 TL</Text>
            </View>
            <View style={styles.container_right_bottom_area}>
              <Text style={styles.order_date}>19 Ara 20.44 tarihinde teslim edildi</Text>
              <Text style={styles.product_desc}>Tuzlu taze kuru pasta, Coca-Cola (33 cl.)</Text>
            </View>
          </View>
        </View>
        <View style={styles.button_area}>
          <TouchableOpacity
            style={styles.button}>
            <Text style={styles.button_text}>Siparişi Tekrarla</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
