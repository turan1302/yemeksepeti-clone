import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {paddingTop : 25,paddingLeft : 10},
  campaign_text : {fontSize : 17,color : "black",fontWeight : "bold"},
  flatlist_area : {marginTop : 20},
  item_area : {marginEnd : 15},
  item_image : (width,height,position)=>({width : width*0.38,height : (position==="PORTRAIT") ? height*0.23 : width*0.35,resizeMode : "stretch",borderRadius : 7,borderWidth : 1,borderColor : "#f7f7f7"})
});

export default styles;
