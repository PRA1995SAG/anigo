import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import CarouselScreen from "../screens/Carousel";
import ListingScreen from "../screens/Listing";
import HeroScreen from "../screens/Hero";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";

const Tab = createMaterialBottomTabNavigator();

const ListStack = createStackNavigator();

function ListingStackScreen() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="ListItem"
        component={ListingScreen}
        options={{ headerStyle: { backgroundColor: "#2E51A2" } }}
      />
    </ListStack.Navigator>
  );
}

function RootTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Carousel">
      <Tab.Screen
        name="Carousel"
        component={CarouselScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="view-carousel" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Listing"
        component={ListingStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hero"
        component={HeroScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="image" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootTabNavigator;
