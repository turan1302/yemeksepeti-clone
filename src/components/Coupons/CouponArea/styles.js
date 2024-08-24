import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : { backgroundColor: "white", padding: 30 },
  coupon_container_top : { padding: 20, borderWidth: 1, borderColor: "#dddddd",flexDirection  :"row",justifyContent : "space-around"},
  coupon_container_left_area : {alignItems : "center",alignSelf : "flex-start"},
  winner_price : {color : "gray",fontSize  :22,fontWeight : "bold"},
  winner_price_text : {color : "gray",fontSize  :13},

  coupon_container_right_area : {borderLeftWidth : 1,borderColor : "gray"},
  coupon_container_right_location : {alignItems : "center",flexDirection : "row"},
  add_coupon_text : {color : "black",marginLeft : 10,fontWeight : "bold",fontSize : 15}
});

export default styles;
