import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { supabase } from "../supabase/supabase";

export default function SignUpScreen({ navigation }) {
  const [loadState, setLoadState] = useState(false);
  const [passwordToggle, setVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    setLoadState(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    setLoadState(false);
    console.log("Data", data);
    data.user &&
      Alert.alert(
        "Account created:",
        "Check your email to confirm your registration."
      );
    console.log("Error", error);
    error && Alert.alert("Error:", error.message);
  };

  return (
    <ImageBackground
      resizeMethod="auto"
      //   resizeMode="stretch"
      className="flex-1 justify-between pb-8 bg-white w-full items-center"
      source={require("../assets/images/back-ground.png")}
    >
      <SafeAreaView className="w-full flex-row justify-around">
        <Image
          source={require("../assets/images/light.png")}
          resizeMethod="auto"
          resizeMode="cover"
          className="h-[280px] w-auto"
        />
        <Image
          source={require("../assets/images/light.png")}
          resizeMode="contain"
          className="h-[180px] w-auto aspect-auto"
        />
      </SafeAreaView>
      <View className="gap-3 w-full p-4">
        <Text className="text-3xl font-SFBlack text-main mb-2">Sign Up</Text>
        <TextInput
          className="bg-gray-300 p-2 text-base rounded-md font-SFLight"
          placeholder="Email"
          inputMode="email"
          textContentType="emailAddress"
          onChangeText={(input) => setEmail(input)}
        />
        <View className="flex rounded-md  bg-gray-300 overflow-hidden flex-row">
          <TextInput
            className="p-2 flex-1 text-base font-SFLight"
            placeholder="Password"
            textContentType="password"
            secureTextEntry={passwordToggle}
            onChangeText={(input) => setPassword(input)}
          />
          <TouchableOpacity
            className="aspect-square justify-center items-center bg-main"
            onPress={() => setVisible((passwordToggle) => !passwordToggle)}
          >
            <Ionicons
              name={passwordToggle ? "eye" : "eye-off"}
              size={25}
              color={"white"}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="rounded-md flex-row justify-center items-center bg-main p-2"
          onPress={signUp}
        >
          <Text className="text-white font-SFMedium text-base text-center">
            {!loadState ? (
              "Sign Up"
            ) : (
              <ActivityIndicator color={"white"} size={"small"} />
            )}
          </Text>
        </TouchableOpacity>
        <View className="flex-row gap-0 items-center justify-center">
          <Text className="text-md text-black font-SFLight text-center">
            Already have an account?{" "}
          </Text>
          <TouchableOpacity
            className=""
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="font-SFBlack text-main">Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
