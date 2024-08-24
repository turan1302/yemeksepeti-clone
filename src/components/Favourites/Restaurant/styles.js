import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {flex : 1,justifyContent : "center",alignItems : "center",paddingVertical : 20,backgroundColor : "white"},
  image : (width,height,position)=>({height :  (position==="LANDSCAPE") ? width * 0.30 : height * 0.30,marginVertical  :30}),
  title : {fontSize : 20,fontWeight : "bold",color : "black"},
  subtitle : {marginTop : 10,color : "black",fontWeight : "normal"},
  button_area : {backgroundColor : "#ea004b",marginTop  :20,paddingVertical : 5,paddingHorizontal : 15,borderRadius : 8},
  button_text : {color : "white",fontWeight : "bold",fontSize : 14}
});

export default styles;
