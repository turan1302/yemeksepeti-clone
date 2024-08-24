import React, { Component } from "react";
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import SearchContainer from "../../components/Home/SearchContainer";
import OfferContainer from "../../components/Home/OfferContainer";
import CampaignContainer from "../../components/Home/CampaignContainer";
import KitchenComponent from "../../components/Home/KitchenComponent";
import ClubContainer from "../../components/Home/ClubContainer";

export default class Home extends Component {
  render() {
    return (
      <View style={{flex : 1,backgroundColor : "white"}}>
        <ScrollView showsVerticalScrollIndicator={false} bounces>
          <StatusBar backgroundColor={"#ea004b"} />
          <SearchContainer />
          <OfferContainer/>
          <CampaignContainer/>
          <KitchenComponent/>
          <ClubContainer/>
        </ScrollView>
      </View>
    );
  }
}
