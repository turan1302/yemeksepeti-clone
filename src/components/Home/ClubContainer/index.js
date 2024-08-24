import React, { Component } from 'react'
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";
import styles from "./styles";

export default class ClubContainer extends Component {

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
    const {width,height} = Dimensions.get("window");
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <View style={styles.container(width,height,position)}>
        <View>
          <Text style={styles.title}>Her siparişte kazan!</Text>
          <Text style={styles.subtitle}>Seçili işletmelerde harca!</Text>
        </View>
          <Image style={styles.image(width,height,position)} source={require("../../../assets/club/yclub.png")}/>
      </View>
    )
  }
}
