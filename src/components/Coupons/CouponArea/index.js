import React, { Component } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";

export default class CouponArea extends Component {

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
        <View style={styles.coupon_container_top}>
          <View style={styles.coupon_container_left_area}>
            <Text style={styles.winner_price}>0.00 TL</Text>
            <Text style={styles.winner_price_text}>Bu Ayki Kazancın</Text>
          </View>
          <View style={styles.coupon_container_right_area}/>
          <View style={styles.coupon_container_right_location}>
            <MaterialCommunityIcons name={"ticket-confirmation-outline"} color={"black"} size={30}/>
            <Text style={styles.add_coupon_text}>Kupon Ekle</Text>
          </View>
        </View>
        <View style={{marginTop : 20,alignItems : "center"}}>
          <Image source={require("../../../assets/coupon/yemeksepeti.webp")}/>
          <Text style={{fontSize : 25,fontWeight : "bold",color : "black"}}>Henüz Kuponunuz Yok.</Text>
          <Text style={{fontSize : 13,color : "black",marginTop : 10}}>Görünüşe göre henüz kuponunuz yok.</Text>
        </View>
      </View>
    );
  }
}
