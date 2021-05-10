import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

function FAB(props) {
  let TouchComponent = TouchableOpacity;
  if (Platform.Version >= 21 && Platform.OS === "android") {
    TouchComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.fabContainer}>
      <TouchComponent onPress={props.loadMoreHandler}>
        <View style={styles.fab}>
          <Ionicons
            name={
              Platform.OS === "android" ? "md-chevron-down" : "ios-chevron-down"
            }
            size={24}
            color="#1B7AC2"
          />
        </View>
      </TouchComponent>
    </View>
  );
}
const styles = StyleSheet.create({
  fabContainer: {
    right: 20,
    bottom: 20,
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    zIndex: 1000,
    elevation: 5,
  },
  fab: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: Colors.white200,
  },
});
export default FAB;
