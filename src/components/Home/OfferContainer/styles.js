import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: (width,height,position) => ({
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#eeeef1",
    height: (position === "PORTRAIT") ? height * 0.38 : width * 0.70,
  }),
  left_container : (width,height,position)=>({height : (position==="PORTRAIT") ? height * 0.35 : width * 0.38}),
  left_first_image : (width,height,position)=>({width : width*0.5,height : (position==="PORTRAIT") ? height * 0.10 : width * 0.20,borderRadius : 8,resizeMode : "cover"}),
  left_second_image : (width,height,position)=>({width : width*0.5,height : (position==="PORTRAIT") ? height * 0.23 : width * 0.45,borderRadius : 8,marginTop : 10,resizeMode : "cover"}),
  right_container : {paddingLeft : 10},
  right_first_image : (width,height,position)=>({width : (position==="PORTRAIT") ? width * 0.42 : width * 0.46,height : (position==="PORTRAIT") ? height * 0.345 : width * 0.66,borderRadius : 8})
});

export default styles;
