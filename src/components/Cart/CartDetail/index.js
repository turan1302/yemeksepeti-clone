import React, { Component } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as  NavigationService from "../../../NavigationService";
import styles from "./styles";

export default class CartDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      windowDimensions: Dimensions.get('window'),
    }
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener('change', this.handleResize);
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
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      (position==="LANDSCAPE") ? (
     <ScrollView showsVerticalScrollIndicator={false} bounces>
       <View style={[styles.container,{width : "100%",paddingVertical : 20}]}>
         <Image source={require("../../../assets/sepet/yemeksepeti.webp")} />
         <Text style={styles.title}>Sepetiniz şu an boş görünüyor</Text>
         <Text style={styles.text}>Yemek, market ve günlük ihtiyaçların için hemen seçeneklere göz at</Text>
         <TouchableOpacity onPress={()=>NavigationService.reset()} style={styles.button_area}>
           <Text style={styles.button_text}>Keşfet</Text>
         </TouchableOpacity>
       </View>
     </ScrollView>
      ) : (
        <View style={[styles.container,{width : "70%"}]}>
          <Image source={require("../../../assets/sepet/yemeksepeti.webp")} />
          <Text style={styles.title}>Sepetiniz şu an boş görünüyor</Text>
          <Text style={styles.text}>Yemek, market ve günlük ihtiyaçların için hemen seçeneklere göz at</Text>
          <TouchableOpacity onPress={()=>NavigationService.reset()} style={styles.button_area}>
            <Text style={styles.button_text}>Keşfet</Text>
          </TouchableOpacity>
        </View>
      )
    );
  }
}
