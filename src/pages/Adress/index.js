import React, { Component } from "react";
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import AdressList from "../../components/Adress/AdressList";

export default class Adress extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f5f5f5", justifyContent: "space-between" }}>
        <StatusBar backgroundColor={"#ea004b"}/>
        <AdressList/>
        <View style={{padding  :15,backgroundColor : "white",borderRadius  :15}}>
          <TouchableOpacity style={{backgroundColor : "#ea004b",alignItems : "center",padding : 10,borderRadius : 7}}>
            <Text style={{color : "white"}}>Yeni Adres Ekle</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
