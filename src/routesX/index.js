import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigator from "./HomeNavigator";


const Stack = createNativeStackNavigator();

import { navigationRef } from "../../src/NavigationService";
import Favourite from "../pages/Favourite";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Cart from "../pages/Cart";

export default class Routes extends Component {
  render() {
    return (
     <NavigationContainer ref={navigationRef}>
       <Stack.Navigator screenOptions={{
         headerShown : false,

       }} initialRouteName={"Home"}>
         <Stack.Screen name="Home" component={HomeNavigator} />
         <Stack.Screen name="Favourite" component={Favourite} options={({navigation})=>({
           headerShadowVisible : false,
           headerShown : true,
           headerLeft : ()=>(
             <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginRight : 15}}>
               <AntDesign name={"arrowleft"} color={"black"} size={20}/>
             </TouchableOpacity>
           ),
           headerRight : ()=>(
             <TouchableOpacity onPress={()=>navigation.navigate("Cart")} style={{marginLeft : 18}}>
               <Ionicons name={"bag-outline"} size={23} color={"black"}/>
             </TouchableOpacity>
           ),
           headerLeftContainerStyle : {
             paddingLeft : 15
           },
           headerRightContainerStyle : {
             paddingRight : 15
           },
           title : "Favoriler",
         })} />
         <Stack.Screen name="Cart" component={Cart} options={({navigation})=>({
           headerShadowVisible : false,
           headerShown : true,
           headerLeft : ()=>(
             <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginRight : 15}}>
               <AntDesign name={"close"} color={"black"} size={20}/>
             </TouchableOpacity>
           ),
           headerLeftContainerStyle : {
             paddingLeft : 15
           },
           headerRightContainerStyle : {
             paddingRight : 15
           },
           title : "Sepetim",
         })} />
       </Stack.Navigator>
     </NavigationContainer>
    )
  }
}
