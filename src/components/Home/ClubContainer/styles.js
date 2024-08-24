import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : (width,height,position)=>({marginVertical : 10,marginHorizontal : 10,paddingLeft : 10,height : (position==="PORTRAIT") ? height * 0.09 : width * 0.12,alignItems : "center",justifyContent : "space-between",flexDirection : "row",backgroundColor : "white",borderWidth : 1,borderColor : "#cdcdcd",borderRadius : 8}),
  title : {color : "black",fontSize : 18,fontWeight : "bold"},
  subtitle : {color : "black",fontSize : 13,marginTop : 6},
  image : (width,height,position)=>({width : (position==="PORTRAIT") ? width * 0.20 : width*0.14,height : (position==="PORTRAIT") ? height * 0.10 : width*0.113,objectFit : "cover"})
});

export default styles;
