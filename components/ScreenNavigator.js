import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SingleJot from "../screens/SingleJot";
import Profilescreen from "../screens/Profilescreen";
import NewZeet from "../screens/NewZeet";
import TabNav from "./TabNav";

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={TabNav}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#124475",
          },
          headerTintColor: "#fff",
          headerShown: false,
          headerTitleStyle: {
            fontWeight: "bold",
            className: "font-Fig",
          },
        }}
      />
      <Stack.Screen
        name="SinglePost"
        component={SingleJot}
        options={{
          title: "Zeet",
          headerStyle: {
            backgroundColor: "#124475",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            className: "font-SFMedium",
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profilescreen}
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "#124475",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            className: "font-SFMedium",
          },
        }}
      />
      <Stack.Screen
        name="NewZeet"
        component={NewZeet}
        options={{
          title: "Add New Zeet",
          headerStyle: {
            backgroundColor: "#124475",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            className: "font-SFMedium",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
