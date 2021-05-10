import React from "react";
import { View, ActivityIndicator } from "react-native";
import Colors from "../constants/Colors";

function Footer(props) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        backgroundColor: "transparent",
      }}
    >
      <ActivityIndicator size="large" color={Colors.white} />
    </View>
  );
}

export default Footer;
