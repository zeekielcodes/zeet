import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { supabase } from "../supabase/supabase";
import { userAuth } from "../utils/AuthState";

export default function LoginScreen({ navigation }) {
  const [loadState, setLoadState] = useState(false);
  const [passwordToggle, setVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addAuthUser = userAuth((state) => state.addUser);

  const signIn = async () => {
    setLoadState(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    data.user && addAuthUser(data.user);
    // data.user && navigation.navigate("TabNav");
    setLoadState(false);
    // console.log("Data", data);
    // console.log("Error", error);
    error && Alert.alert("Error:", error.message);
  };
  return (
    <ImageBackground
      resizeMethod="auto"
      resizeMode="cover"
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
          className="h-[150px] w-auto aspect-auto"
        />
      </SafeAreaView>
      <View className="gap-3 w-full p-4">
        {/* <View className="rounded bg-red-500 shadow p-4">
          <Text className="text-black font-SFMedium text-lg">
            Couldn't log you in
          </Text>
        </View> */}
        <Text className="text-3xl font-SFBlack text-main mb-2">Login</Text>
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
            textContentType="password"
            placeholder="Password"
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
          onPress={signIn}
        >
          <Text className="text-white font-SFMedium text-base text-center">
            {!loadState ? (
              "Log in"
            ) : (
              <ActivityIndicator color={"white"} size={"small"} />
            )}
          </Text>
        </TouchableOpacity>
        <View className="flex-row gap-0 items-center justify-center">
          <Text className="text-md text-black font-SFLight text-center">
            Don't have an account?{" "}
          </Text>
          <Pressable className="" onPress={() => navigation.navigate("SignUp")}>
            <Text className="font-SFBlack text-main">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}
