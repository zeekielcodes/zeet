import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";

export default function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      className="flex-1 justify-between pb-8 items-center"
      source={require("../assets/images/background.jpg")}
    >
      <SafeAreaView className="w-full flex-row justify-around">
        <Image
          source={require("../assets/images/light.png")}
          className="h-[220px] w-auto aspect-auto"
        />
        <Image
          source={require("../assets/images/light.png")}
          className="h-[300px] w-auto"
        />
      </SafeAreaView>
      <View className="gap-3 w-full p-4">
        <Text className="text-3xl font-SFBlack text-main mb-2">Login</Text>
        <TextInput
          className="bg-gray-300 p-2 text-base rounded-md font-SFLight"
          placeholder="Email"
        />
        <TextInput
          className="bg-gray-300 p-2 text-base rounded-md font-SFLight"
          placeholder="Password"
          secureTextEntry={true}
        />
        {/* <Button title="Log in" color={"#124475"} className="p-2" /> */}
        <TouchableOpacity className="rounded-md bg-main p-2">
          <Text className="text-white font-SFMedium text-base text-center">
            Log in
          </Text>
        </TouchableOpacity>
        <View className="flex-row gap-0 items-center justify-center">
          <Text className="text-md text-black font-SFLight text-center">
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity
            className=""
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text className="font-SFBlack text-main">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
