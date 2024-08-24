import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : { flex: 1 },
  profile_background : {backgroundColor : "#eaeaea",height : 200,flex : 1,justifyContent : "flex-end"},
  profile_text : {padding : 10,fontSize : 15,fontWeight : "700",color : "black"},
  wallet_container : { paddingHorizontal: 10, paddingTop: 10, borderBottomWidth: 1, borderBottomColor: "#eaeaea" },
  wallet_first_container :{ flexDirection: "row", justifyContent: "space-between" },
  wallet_first_left_area : { flexDirection: "row" },
  wallet_text : { marginLeft: 8, fontSize: 15, color: "black", fontWeight: "bold" },
  wallet_second_container : { backgroundColor: "#ade6ff", paddingVertical: 3, paddingHorizontal: 9, borderRadius: 15 },
  wallet_amount : { color: "#005073" },
  wallet_menu_text : { paddingVertical: 10, color: "black" },

  menu_area : { paddingHorizontal: 10, paddingVertical: 15, flexDirection: "row" },
  menu_text : { marginLeft: 8, fontSize: 15, color: "black" }
});

export default styles;
