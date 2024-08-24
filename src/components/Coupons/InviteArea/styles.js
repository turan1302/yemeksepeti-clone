import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container_area: { marginTop: 10 },
  container: { backgroundColor: "white", paddingTop: 30, paddingHorizontal: 15 },
  invite_text: { fontSize: 17, color: "black", fontWeight: "bold" },
  items_location: {
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  item_image : { width: 80, height: 80 },
  right_items_location : { justifyContent: "space-around", flex: 1, marginLeft: 20 },
  right_items_text : { fontSize: 17, color: "black", fontWeight: "bold" },
  button_area : {
    backgroundColor: "#ea004b",
    alignSelf: "flex-start",
    padding: 8,
    marginTop: 10,
    borderRadius: 6,
  },
  button_text : { color: "white", fontWeight: "bold" }
});

export default styles;
