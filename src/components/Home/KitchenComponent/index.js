import React, { Component } from 'react'
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default class KitchenComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      kitchens : [
        {id : 1,image : require("../../../assets/mutfak/balık.png"),name : "Balık"},
        {id : 2,image : require("../../../assets/mutfak/borek.png"),name : "Börek"},
        {id : 3,image : require("../../../assets/mutfak/cigkofte.png"),name : "Çiğ Köfte"},
        {id : 4,image : require("../../../assets/mutfak/dondurma.png"),name : "Dondurma"},
        {id : 5,image : require("../../../assets/mutfak/dunyamutfagi.png"),name : "Dünya Mutfağı"},
        {id : 6,image : require("../../../assets/mutfak/hamburger.png"),name : "Hamburger"},
        {id : 7,image : require("../../../assets/mutfak/kahve.png"),name : "Kahve"},
        {id : 8,image : require("../../../assets/mutfak/kebap.png"),name : "Kebap"},
        {id : 9,image : require("../../../assets/mutfak/kofte.png"),name : "Köfte"},
        {id : 10,image : require("../../../assets/mutfak/pastane.png"),name : "Pastane"},
        {id : 11,image : require("../../../assets/mutfak/pizza.png"),name : "Pizza"},
        {id : 12,image : require("../../../assets/mutfak/su.png"),name : "Su"},
        {id : 13,image : require("../../../assets/mutfak/tatli.png"),name : "Tatlı"},
        {id : 14,image : require("../../../assets/mutfak/tavuk.png"),name : "Tavuk"},
        {id : 15,image : require("../../../assets/mutfak/tost.png"),name : "Tost"},
        {id : 16,image : require("../../../assets/mutfak/uzakdogu.png"),name : "Uzakdoğu"},
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

   formatData = (data, numColumns) => {
    const numRows = Math.ceil(data.length / numColumns);
    let newData = [];
    for (let i = 0; i < numRows; i++) {
      newData = [...newData, data.slice(i * numColumns, (i + 1) * numColumns)];
    }
    return newData;
  };

  render() {
    const {kitchens} = this.state;
    const kitchenData = this.formatData(kitchens, 2);
    const {width,height} = Dimensions.get("window");
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';


    return (
      <View style={styles.container}>
        <Text style={styles.kitchen_text}> Mutfak </Text>
        <FlatList horizontal showsHorizontalScrollIndicator={false} data={kitchenData} keyExtractor={(item,index)=>index} renderItem={({item,index})=>{
          return (
            <View style={styles.flatlist_container}>
              {item.map((subItem,index) => (
               <TouchableOpacity key={index}>
                 <View style={styles.item_area}>
                   <Image style={styles.item_image(width,height,position)} source={subItem.image}/>
                   <Text style={styles.item_text}>{subItem.name}</Text>
                 </View>
               </TouchableOpacity>
              ))}
            </View>
          )
        }}/>
      </View>
    )
  }
}
