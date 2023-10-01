import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";

const SearchStacks = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: "Search",
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

export default SearchStacks;
