import React, { useRef, useCallback } from "react";
import { View, Image, Animated, Dimensions, StatusBar } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux";
import styles from "./style";
const { width } = Dimensions.get("screen");

const Indicator = ({ scrollX, carousels }) => {
  return (
    <View style={styles.indicatorContainer}>
      {carousels.imageUrls.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${index}`}
            style={{
              transform: [{ scale }],
              opacity,
              ...styles.animatedView,
            }}
          />
        );
      })}
    </View>
  );
};

const CarouselScreen = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const carousels = useSelector((state) => state.carousels);

  return (
    <View style={styles.screen}>
      <Animated.FlatList
        data={carousels.imageUrls}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={{ paddingBottom: 100 }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
          </View>
        )}
      />
      <Indicator scrollX={scrollX} carousels={carousels} />
    </View>
  );
};

export default CarouselScreen;
