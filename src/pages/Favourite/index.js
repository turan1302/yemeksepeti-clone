import React, { Component } from 'react'
import { ScrollView, StatusBar, Text, View } from "react-native";
import TopMenu from "../../components/Favourites/TopMenu";
import { inject, observer } from "mobx-react";
import Restaurant from "../../components/Favourites/Restaurant";
import Market from "../../components/Favourites/Market";

@inject("FavouriteStore")
@observer

export default class Favourite extends Component {

  render() {
    const {activeMenu} = this.props.FavouriteStore;

    return (
      <View style={{flex : 1}}>
        <StatusBar backgroundColor={"#ea004b"}/>
         <TopMenu/>
         {(activeMenu==="restoran") ? <Restaurant/> : <Market/>}
      </View>
    )
  }
}
