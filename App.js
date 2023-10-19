import "react-native-gesture-handler";
import "react-native-url-polyfill/auto";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Text, View } from "react-native";
// import * as Linking from "expo-linking";
// import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Loading from "./components/loading";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./components/ScreenNavigator";
import { useEffect, useState } from "react";
import TabNav from "./components/TabNav";
import MyDrawer from "./components/Drawer";
import AuthStack from "./components/AuthStack";
import { userAuth } from "./utils/AuthState";
import SignUpProfile from "./screens/SignUpProfile";

// const linking = {
//   prefixes: [Linking.createURL("/")],
//   config: {
//     screens: {
//       Home: "home",
//       SetUpProfile: "setup-profile",
//     },
//   },
// };

export default function App() {
  const [user, setUser] = useState();
  const authState = userAuth();
  const authUser = authState.user;

  useEffect(() => {
    setUser(authUser);
  }, [authState]);

  // useEffect(() => {
  //   // Add a listener for deep linking events
  //   const handleDeepLink = ({ url }) => {
  //     const { path, queryParams } = Linking.parse(url);

  //     // Check if the deep link corresponds to email confirmation
  //     if (path === "confirm-email") {
  //       // Extract any relevant data from queryParams
  //       // Perform email confirmation logic here if needed

  //       // After confirmation, navigate to the SetUpProfile screen
  //       navigation.navigate("SetUpProfile");
  //     }
  //   };

  //   Linking.addEventListener("url", handleDeepLink);

  //   // Cleanup the listener when the component unmounts
  //   return () => {
  //     Linking.removeEventListener("url", handleDeepLink);
  //   };
  // }, []);

  const [fontsLoaded] = useFonts({
    SFBlack: require("./assets/fonts/SF-Pro-Text-Black.otf"),
    SFMedium: require("./assets/fonts/SF-Pro-Text-Medium.otf"),
    SFLight: require("./assets/fonts/SF-Pro-Text-Light.otf"),
  });

  console.log("Auth User", user);

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
        {user === undefined ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size={"large"} color={"black"} />
          </View>
        ) : user === null ? (
          <AuthStack />
        ) : (
          <MyDrawer />
          // <SignUpProfile />
        )}

        <StatusBar style="light" />
      </View>
    </NavigationContainer>
  );
}
