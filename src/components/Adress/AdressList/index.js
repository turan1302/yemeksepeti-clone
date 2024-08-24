import React, { Component } from 'react'
import { FlatList, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import styles from "./styles";

export default class AdressList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adreslerim : [
        {id : 1,name : "Ev",desc : 'Ev Adresi',address : 'Kendi evine tıkılmış bir developer'},
        {id : 2,name : "Oda",desc : 'Oda Adresi',address : 'Kendi odasına tıkılmış bir developer'},
      ]
    }
  }

  render() {
    const {adreslerim} = this.state;

    return (
       <FlatList showsVerticalScrollIndicator={false} data={adreslerim} keyExtractor={(item,index)=>index} renderItem={({item,index})=>{
         return (
           <View style={styles.container}>
              <View style={styles.top_items_area}>
                <View style={styles.top_items_left_area}>
                  <Ionicons name={"home-outline"} size={20} color={"gray"}/>
                  <Text style={styles.address_title}>{item.name}</Text>
                </View>
                <View style={styles.top_items_right_area}>
                  <Octicons name={"pencil"} size={20} color={"gray"}/>
                  <Octicons style={{marginLeft : 15}} name={"trash"} size={20} color={"gray"}/>
                </View>
              </View>
             <View style={styles.bottom_items_area}>
               <Text style={styles.address_text}>{item.desc}</Text>
               <Text style={styles.address_text}>{item.address}</Text>
             </View>
           </View>
         )
       }}/>
    )
  }
}
