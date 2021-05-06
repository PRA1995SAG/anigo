import React, { useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image,
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
        <View style={styles.imageContainer}>
          <Image source={{ uri: props.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text adjustsFontSizeToFit minimumFontScale={0.9} style={styles.text}>
            {props.title}
          </Text>
        </View>
      </View>
    </TouchComponent>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 12,
    overflow: "hidden",
  },
  imageContainer: {
    height: "80%",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    height: "20%",
    width: "100%",
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "700",
    fontSize: 16,
    paddingVertical: 20,
    paddingHorizontal: 8,
    color: Colors.darkBrown,
  },
});
export default Card;
