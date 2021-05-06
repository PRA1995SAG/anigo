import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    fontWeight: "800",
    fontSize: 40,
    color: Colors.white,
    borderColor: Colors.white,
    borderWidth: 2,
    alignSelf: "flex-end",
    padding: 10,
    marginBottom: 60,
    marginLeft: 20,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
