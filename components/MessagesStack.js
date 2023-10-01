import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import Messages from "../screens/Messages";

const MessagesStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Message"
        component={Messages}
        options={{
          title: "Messages",
          headerStyle: {
            backgroundColor: "#124475",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            className: "font-Fig",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MessagesStack;
