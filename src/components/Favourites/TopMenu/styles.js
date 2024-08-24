import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {backgroundColor : "white",flexDirection : "row",justifyContent : "space-around",paddingTop : 15,borderBottomWidth :1,borderBottomColor : "#e8e8e8"},
  button_area : {flex : 1,alignItems : "center",marginBottom : 3},
  button_text : {color : "black",fontWeight : "bold",paddingBottom : 15},
  active_button : {borderBottomWidth : 3,borderBottomColor : "black", width : "50%"},
});

export default styles;
