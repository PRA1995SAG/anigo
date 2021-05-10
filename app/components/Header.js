import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const Header = (props) => {
  let TouchComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.headerContainer}>
      <View style={styles.itemContainer}>
        <View style={styles.headerInputContainer}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={50}
            returnKeyType="search"
            style={styles.headerInput}
            placeholder="search for an anime, e.g Naruto"
            placeholderTextColor={Colors.white200}
            selectionColor={Colors.white200}
            value={props.query}
            onChangeText={props.queryHandler}
            onSubmitEditing={props.submitHandler}
          />
          <TouchComponent useForeground onPress={props.submitHandler}>
            <View style={styles.headerTouchable}>
              <Ionicons
                name={Platform.OS === "android" ? "md-search" : "ios-search"}
                size={24}
                color={Colors.white}
              />
            </View>
          </TouchComponent>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 8,
    justifyContent: "center",
  },
  itemContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    backgroundColor: Colors.white,
    borderRadius: 4,
  },
  headerInputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: Colors.blue900,
  },
  headerInput: {
    padding: 8,
    width: "85%",
    fontSize: 16,
    color: Colors.white,
    fontFamily: "mukta-regular",
  },
  headerTouchable: {
    overflow: "hidden",
    borderRadius: 30,
    padding: 6,
  },
});
export default Header;
