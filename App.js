import "react-native-gesture-handler";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootTabNavigator from "./app/navigation/RootTabNavigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import carouselsReducer from "./app/store/reducers/carousels";
import listingsReducer from "./app/store/reducers/listings";
import Colors from "./app/constants/Colors";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const rootReducers = combineReducers({
  carousels: carouselsReducer,
  listings: listingsReducer,
});

const store = createStore(rootReducers, applyMiddleware(ReduxThunk));

const fetchFonts = async () =>
  await Font.loadAsync({
    "mukta-bold": require("./app/assets/Mukta-Bold.ttf"),
    "mukta-extrabold": require("./app/assets/Mukta-ExtraBold.ttf"),
    "mukta-extralight": require("./app/assets/Mukta-ExtraLight.ttf"),
    "mukta-light": require("./app/assets/Mukta-Light.ttf"),
    "mukta-medium": require("./app/assets/Mukta-Medium.ttf"),
    "mukta-regular": require("./app/assets/Mukta-Regular.ttf"),
    "mukta-semibold": require("./app/assets/Mukta-SemiBold.ttf"),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootTabNavigator />
      </Provider>
      <StatusBar backgroundColor={Colors.blue900} barStyle="light-content" />
    </NavigationContainer>
  );
}
