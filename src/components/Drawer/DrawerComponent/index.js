import React, { Component } from "react";
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

import styles from "./styles";

export default class DrawerComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} bounces>
          <View style={styles.profile_background}>
            <Text style={styles.profile_text}>Muhammed Fatih BAĞCIVAN</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.wallet_container}>
              <View style={styles.wallet_first_container}>
                <View>
                  <View style={styles.wallet_first_left_area}>
                    <Entypo name={"wallet"} size={20} color={"black"} />
                    <Text style={styles.wallet_text}>Cüzdan</Text>
                  </View>
                </View>
                <View style={styles.wallet_second_container}>
                  <Text style={styles.wallet_amount}>0,00 TL</Text>
                </View>
              </View>
              <Text style={styles.wallet_menu_text}>Cüzdan Bakiyesi ve Ödeme Yöntemleri</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.menu_area}>
              <MaterialIcons name={"bookmark-border"} size={20} color={"black"} />
              <Text style={styles.menu_text}>Fırsatlar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("CouponScreen")}>
            <View style={styles.menu_area}>
              <MaterialCommunityIcons name={"ticket-outline"} size={20} color={"black"} />
              <Text style={styles.menu_text}>Kuponlarım</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Favourite")}>
            <View style={styles.menu_area}>
              <Ionicons name={"heart-outline"} size={20} color={"black"} />
              <Text style={styles.menu_text}>Favoriler</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("OrderScreen")}>
            <View style={styles.menu_area}>
              <FontAwesome5 name={"file-invoice"} size={20} color={"black"} />
              <Text style={styles.menu_text}>Siparişlerim</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("ProfileScreen")}>
            <View style={styles.menu_area}>
              <AntDesign name={"user"} size={20} color={"black"} />
              <Text style={styles.menu_text}>Hesabım</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("AdressScreen")}>
            <View style={styles.menu_area}>
              <MaterialCommunityIcons name={"map-marker-radius-outline"} size={20} color={"black"} />
              <Text style={styles.menu_text}>Adreslerim</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.menu_area}>
              <Ionicons name={"trophy-outline"} size={20} color={"black"} />
              <Text style={styles.menu_text}>Y-Club</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.menu_area}>
              <AntDesign name={"questioncircleo"} size={20} color={"black"} />
              <Text style={styles.menu_text}>Yardım Merkezi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.menu_area,{borderBottomWidth: 1, borderBottomColor: "#eaeaea"}]}>
              <AntDesign name={"gift"} size={20} color={"black"} />
              <Text style={styles.menu_text}>Arkadaşını Davet Et</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.menu_area}>
              <Text style={styles.menu_text}>Ayarlar/Dil Tercihi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.menu_area}>
              <Text style={styles.menu_text}>Kullanım Koşulları / KVK</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.menu_area}>
              <Text style={styles.menu_text}>Çıkış Yap</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
