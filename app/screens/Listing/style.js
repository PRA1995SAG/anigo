import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.blue800,
  },
  centeredView: { flex: 1, alignItems: "center", justifyContent: "center" },
});
