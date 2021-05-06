import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style";

const HeroScreen = () => {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={{ uri: "https://picsum.photos/id/17/1440/2560" }}
        style={styles.image}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>Lorem ipsum</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HeroScreen;
