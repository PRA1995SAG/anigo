import { StyleSheet, StatusBar, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  itemContainer: { width, alignItems: "center", padding: 20 },
  indicatorContainer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
  },
  animatedView: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.white800,
    margin: 10,
  },
  image: { width: "100%", height: "100%", borderRadius: 12 },
});
