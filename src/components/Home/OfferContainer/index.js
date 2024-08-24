import React, { Component } from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default class OfferContainer extends Component {

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
  }

  render() {
    const { width, height } = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
        <View style={styles.container(width,height,position)}>
          <View style={styles.left_container(width,height,position)}>
            <TouchableOpacity>
              <Image style={styles.left_first_image(width,height,position)} source={require("../../../assets/resimler/mahalle.png")}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.left_second_image(width,height,position)} source={require("../../../assets/resimler/market.png")}/>
            </TouchableOpacity>
          </View>
          <View style={styles.right_container}>
            <TouchableOpacity>
              <Image style={styles.right_first_image(width,height,position)} source={require("../../../assets/resimler/yemek.png")}/>
            </TouchableOpacity>
          </View>
        </View>
    )
  }
}
