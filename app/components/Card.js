import React, { useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image,
  ImageBackground,
  Text,
  View,
  Dimensions,
} from "react-native";
import Colors from "../constants/Colors";

const window = Dimensions.get("window");

function Card(props) {
  const [dimensions, setDimensions] = useState({ window });
  let TouchComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchComponent = TouchableNativeFeedback;
  }

  const onChange = ({ window }) => {
    setDimensions({ window });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });
  return (
    <TouchComponent useForeground>
      <View
        style={{
          height: dimensions.window.height / 3,
          ...styles.cardContainer,
        }}
      >
        <ImageBackground source={{ uri: props.imageUrl }} style={styles.image}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{props.title}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchComponent>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 8,
    zIndex: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    fontFamily: "mukta-bold",
    fontSize: 24,
    paddingVertical: 10,
    paddingHorizontal: 8,
    color: Colors.white,
    backgroundColor: "#00000070",
    lineHeight: 28,
  },
});
export default Card;
