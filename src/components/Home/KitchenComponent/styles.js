import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {paddingTop : 25,paddingLeft : 10},
  kitchen_text : {fontSize : 17,color : "black",fontWeight : "bold"},
  flatlist_container : {flex : 1,marginTop : 20,alignItems : "center"},
  item_area : {marginEnd : 20,marginBottom : 30,alignItems : "center"},
  item_image : (width,height,position)=>({width : width*0.20,height  : (position==="PORTRAIT") ? height*0.10 : width *0.20,borderRadius : 5}),
  item_text : {marginTop : 10,color : "#494949",fontWeight  :"bold"}
});

export default styles;
