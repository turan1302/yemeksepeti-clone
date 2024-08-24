import React, { Component } from 'react'
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import * as NavigationService from "../../../NavigationService";
import TopFilter from "./TopFilter";

export default class Restaurant extends Component {

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
      <View style={{flex : 1,backgroundColor : "white"}}>
        <TopFilter/>
        {(position==="LANDSCAPE") ? (
          <ScrollView showsVerticalScrollIndicator={false} bounces>
            <View style={styles.container}>
              <Image style={styles.image(width,height,position)} source={require("../../../assets/favori/yemeksepeti.webp")}/>
              <Text style={styles.title}> Favori Mağazanız Yok </Text>
              <Text style={styles.subtitle}>Tüm favorilerinizi burada görebilirsiniz.</Text>
              <TouchableOpacity onPress={()=>NavigationService.reset()} style={styles.button_area}>
                <Text style={styles.button_text}>Keşfet</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        ) : (
          <View style={styles.container}>
            <Image style={styles.image(width,height,position)} source={require("../../../assets/favori/yemeksepeti.webp")}/>
            <Text style={styles.title}> Favori Mağazanız Yok </Text>
            <Text style={styles.subtitle}>Tüm favorilerinizi burada görebilirsiniz.</Text>
            <TouchableOpacity onPress={()=>NavigationService.reset()} style={styles.button_area}>
              <Text style={styles.button_text}>Keşfet</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
