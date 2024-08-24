import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: (width, height, position) => ({
    backgroundColor: "#ea004b",
    height: (position === "PORTRAIT") ? height * 0.10 : width * 0.10,
    width: "100%",
    justifyContent: "center",
  }),
  search_area: (width,height,position) => ({
    flexDirection: "row",
    height: (position === "PORTRAIT") ? height * 0.055 : width * 0.055,
    backgroundColor: "white",
    alignItems: "center",
    marginHorizontal: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
  }),
});

export default styles;
