import React, { Component } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Favourite from "../pages/Favourite";
import DrawerComponent from "../components/Drawer/DrawerComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import Cart from "../pages/Cart";

const Drawer = createDrawerNavigator();
import * as NavigationService from "../NavigationService";


export default class HomeNavigator extends Component {

  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    const {width,height} = Dimensions.get("window");
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <Drawer.Navigator screenOptions={{
        headerShadowVisible: false,
      }} drawerContent={({navigation}) => <DrawerComponent navigation={navigation}/>}>
        <Drawer.Screen name="HomeScreen" component={Home} options={({navigation})=>({
          drawerStyle : {
            width : (position==="PORTRAIT") ? width * 0.75 : width *0.40
          },
          headerLeft: () => (
            <View style={{flexDirection  : "row",alignItems : "center"}}>
              <TouchableOpacity onPress={()=>{
                navigation.openDrawer();
              }}>
                <MaterialIcons name={"menu"} size={23} color={"white"}/>
              </TouchableOpacity>
              <View style={{marginLeft : 20}}>
                <Text style={{color : "white",fontWeight : "500",fontSize : 15}}>Ev Adresi</Text>
                <Text style={{color : "white",fontSize : 13}}>Kendi odasına tıkılmış bir developer</Text>
              </View>
            </View>
          ),
          headerRight : ()=>(
            <View style={{flexDirection : "row"}}>
              <TouchableOpacity onPress={()=>navigation.navigate("Favourite")}>
                <Ionicons name={"heart-outline"} size={23} color={"white"}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate("Cart")} style={{marginLeft : 18}}>
                <Ionicons name={"bag-outline"} size={23} color={"white"}/>
              </TouchableOpacity>
            </View>
          ),
          headerLeftContainerStyle : {
            paddingHorizontal : 15
          },
          headerRightContainerStyle : {
            paddingRight : 15
          },
          title : "",
          headerStyle : {
            shadowColor : "transparent",
            backgroundColor  :"#ea004b"
          }
        })} />
      </Drawer.Navigator>
    );
  }
}
