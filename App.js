import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootTabNavigator from "./app/navigation/RootTabNavigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import carouselsReducer from "./app/store/reducers/carousels";
import listingsReducer from "./app/store/reducers/listings";
import Colors from "./app/constants/Colors";

const rootReducers = combineReducers({
  carousels: carouselsReducer,
  listings: listingsReducer,
});

const store = createStore(rootReducers, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootTabNavigator />
      </Provider>
      <StatusBar backgroundColor={Colors.blue900} barStyle="light-content" />
    </NavigationContainer>
  );
}
