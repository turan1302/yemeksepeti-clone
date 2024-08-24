import React, { Component } from 'react'
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import CouponArea from "../../components/Coupons/CouponArea";
import CampaignContainer from "../../components/Home/CampaignContainer";

import styles from "./styles";
import InviteArea from "../../components/Coupons/InviteArea";

export default class Coupons extends Component {
  render() {
    return (
      <View style={{flex : 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar backgroundColor={"#ea004b"} />
          <CouponArea/>
          <View style={[styles.campaign_container_area,{paddingBottom : 20}]}>
            <CampaignContainer/>
          </View>
         <InviteArea/>
        </ScrollView>
      </View>
    )
  }
}
