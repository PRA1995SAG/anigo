import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootTabNavigator from "./app/navigation/RootTabNavigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import carouselsReducer from "./app/store/reducers/carousels";
import listingsReducer from "./app/store/reducers/listings";

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
      <StatusBar style="light" backgroundColor="#2E51A2" />
    </NavigationContainer>
  );
}
