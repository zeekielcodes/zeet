import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Loading from "./components/loading";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./components/ScreenNavigator";
import { useState } from "react";
import TabNav from "./components/TabNav";
import MyDrawer from "./components/Drawer";
import AuthStack from "./components/AuthStack";

export default function App() {
  const [fontsLoaded] = useFonts({
    SFBlack: require("./assets/fonts/SF-Pro-Text-Black.otf"),
    SFMedium: require("./assets/fonts/SF-Pro-Text-Medium.otf"),
    SFLight: require("./assets/fonts/SF-Pro-Text-Light.otf"),
  });

  if (!fontsLoaded) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator size={"large"} color={"#124475"} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <View className="flex-1">
        {/* <TabNav /> */}
        {/* <MyDrawer /> */}
        <AuthStack />
        <StatusBar style="light" />
      </View>
    </NavigationContainer>
  );
}
