import React, { Component } from 'react'
import { ScrollView, StatusBar, Text, View } from "react-native";
import ItemArea from "../../components/Profile/ItemArea";
import SocialItemArea from "../../components/Profile/SocialItemArea";

import styles from "./styles";

export default class Profile extends Component {
  render() {
    return (
     <ScrollView style={styles.scroll_area} showsVerticalScrollIndicator={false}>
       <StatusBar backgroundColor={"#ea004b"}/>
       <View style={styles.view_area}>
         <ItemArea title={"Ad Soyad"} item={"Muhammed Fatih BAĞCIVAN"} iconActive={true}/>
         <ItemArea title={"E-posta"} item={"m.fatihbagcivan@hotmail.com"} iconActive={true} active={true}/>
         <ItemArea title={"Şifre"} item={"************"} iconActive={true}/>
         <ItemArea title={"Doğum Tarihi"} item={"1999-06-06"} iconActive={true}/>
         <ItemArea title={"Cep Telefonu"} item={"+905555555555"} iconActive={true} active={true}/>
         <Text style={styles.connect_account_text}>
          Bağlı hesaplar
         </Text>
         <SocialItemArea title={"Facebook"} icon={"logo-facebook"} color={"#1877F2"}/>
         <SocialItemArea title={"Google"} icon={"logo-google"} color={"#DB4437"}/>
         <Text style={styles.delete_account_text}>
           Hesabımı Sil
         </Text>
       </View>
     </ScrollView>
    )
  }
}
