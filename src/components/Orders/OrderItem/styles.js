import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
    marginTop: 17,
    backgroundColor: "white",
    padding: 15,
    borderWidth: 1,
    borderColor: "#cdcdcd",
    borderRadius: 8,
  },
  container_top_area: { flexDirection: "row" },
  container_top_left_image: (position, width, height) => ({
    width: (position === "LANDSCAPE") ? height * 0.23 : width * 0.23,
    height: (position === "LANDSCAPE") ? height * 0.23 : width * 0.23,
    resizeMode: "cover",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#cdcdcd",
  }),
  container_top_right_area: { flex: 1, alignItems: "flex-start", marginLeft: 15, flexWrap: "wrap" },
  container_top_right_first_area : { flexDirection: "row", justifyContent: "space-between" },
  product_name : { flex: 1, color: "black", fontWeight: "bold", fontSize: 14 },
  product_price : { color: "black", fontWeight: "bold", fontSize: 14 },
  container_right_bottom_area : { marginTop: 8 },
  order_date: {color : "gray"},
  product_desc : {marginTop : 10,color : "gray"},
  button_area : {marginTop : 15},
  button : { backgroundColor: "#ea004b", paddingVertical: 8, alignItems: "center", borderRadius: 8 },
  button_text : { color: "white", fontWeight: "bold", fontSize: 14 }
});

export default styles;
