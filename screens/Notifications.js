import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";

export default function Notifications({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Notification",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#124475",
      },
    });
  }, []);
  return (
    <View>
      <Text>Notifications</Text>
    </View>
  );
}
