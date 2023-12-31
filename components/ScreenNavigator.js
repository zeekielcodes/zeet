import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import HomeScreen from "../screens/HomeScreen";
import SingleJot from "../screens/SingleJot";
import Profilescreen from "../screens/Profilescreen";
import NewZeet from "../screens/NewZeet";
import TabNav from "./TabNav";
import ZeetGreen from "../screens/ZeetGreen";
import Header from "./Header";
import MyProfile from "../screens/MyProfile";
import LocationMap from "../screens/LocationMap";

const StackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{
          title: "Home",
          headerTitle: (props) => <Header {...props} />,
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
        name="Location"
        component={LocationMap}
        options={{
          title: "Location",
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
        name="MyProfile"
        component={MyProfile}
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
      <Stack.Screen
        name="ZeetGreen"
        component={ZeetGreen}
        options={{
          title: "Zeet Green",
          // headerTitle: (props) => <Header {...props} />,
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
