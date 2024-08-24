import React, { Component } from 'react'
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default class CampaignContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      campaigns : [
        {id : 1,image : require("../../../assets/kampanyalar/kampanya.png")},
        {id : 2,image : require("../../../assets/kampanyalar/kampanya1.png")},
        {id : 3,image : require("../../../assets/kampanyalar/kampanya2.png")},
        {id : 4,image : require("../../../assets/kampanyalar/kampanya3.png")},
        {id : 5,image : require("../../../assets/kampanyalar/kampanya4.png")},
        {id : 6,image : require("../../../assets/kampanyalar/kampanya5.png")},
        {id : 7,image : require("../../../assets/kampanyalar/kampanya6.png")},
        {id : 8,image : require("../../../assets/kampanyalar/kampanya7.png")},
        {id : 9,image : require("../../../assets/kampanyalar/kampanya8.png")},
      ],
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

  renderItem = (item,width,height,position)=>{
    return (
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("Favourite")}>
        <View style={styles.item_area}>
          <Image style={styles.item_image(width,height,position)} source={item.image}/>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const {campaigns} = this.state;
    const {width,height} = Dimensions.get("window");
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <View style={styles.container}>
        <Text style={styles.campaign_text}> Kampanyalar </Text>
        <FlatList showsHorizontalScrollIndicator={false} style={styles.flatlist_area} horizontal data={campaigns} keyExtractor={(item,index)=>index} renderItem={({item,index})=>{
          return this.renderItem(item,width,height,position)
        }}/>
      </View>
    )
  }
}
