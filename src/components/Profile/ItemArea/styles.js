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
    shadowOffset: { width: 1,height : 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  button_top_items_area : { flexDirection: "row", justifyContent: "space-between" },
  item_area : { marginTop: 10 },
  item_text : { fontSize: 15, color: "black", fontWeight: "bold" },
  active_area : {
    marginTop: 10,
    backgroundColor: "#cee8ff",
    alignSelf: "flex-start",
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 15,
  },
  active_text : {
    color: "#003777",
    fontWeight: "bold",
    fontSize: 13,
  }
});

export default styles;
