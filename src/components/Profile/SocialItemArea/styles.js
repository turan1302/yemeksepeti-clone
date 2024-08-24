import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button_area : {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  view_area : { flexDirection: "row", justifyContent: "space-between" },
  view_left_area : {flexDirection : "row",alignItems : "center"},
  title_text : { color: "black",marginLeft : 10 },
  connect_text : { color: "black" }
});

export default styles;
