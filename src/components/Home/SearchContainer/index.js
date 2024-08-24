import React, { Component } from "react";
import { Dimensions, Text, TextInput, View } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";

export default class SearchContainer extends Component {

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
      <View style={styles.container(width,height,position)}>
        <View style={styles.search_area(width,height,position)}>
          <AntDesign style={{marginRight : 5}} name={"search1"} color={"gray"} size={20} />
          <TextInput style={{flex : 1}} placeholderTextColor={"gray"} placeholder={"Restoran veya mağaza arayın"} />
        </View>
      </View>
    );
  }
}
