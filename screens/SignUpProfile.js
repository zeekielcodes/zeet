import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { userAuth } from "../utils/AuthState";
import { decode } from "base64-arraybuffer";
import { supabase } from "../supabase/supabase";

export default function SignUpProfile({ navigation }) {
  const [avi, setAVI] = useState();
  const authState = userAuth();
  const authUser = authState.user;

  const updateProfile = async () => {
    console.log("Waiting..");
    // console.log(authUser);
    // if (avi) {
    const decoded = decode();
    console.log("Decoded image", decoded);
    const { data, error } = await supabase.storage
      .from("images")
      .upload(authUser.id + "/" + "avatar.png", decoded, {
        contentType: "image/png",
        upsert: true,
      });
    console.log("response", data ? data : error);
    if (error) {
      console.log("failed");
      console.log(error);
    } else {
      console.log("Upload successful");
      console.log(data);
    }
    // } else {
    //   console.log("No avi selected");
    // }
  };

  const pickImageAsync = async () => {
    // const hasPermission = await verifyPermissions();
    // if (!hasPermission) {
    //   return;
    // }
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      // allowsMultipleSelection: true,
      quality: 1,
      aspect: [1, 1],
      // selectionLimit: 4,
    });

    if (!result.canceled) {
      console.log(result);
      setAVI(result.assets);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <ImageBackground
      className="flex-1 justify-center bg-white w-full items-center"
      source={require("../assets/images/doubled.png")}
    >
      <View className="gap-3 w-full p-4">
        <Text className="text-3xl font-SFBlack text-center text-main mb-2">
          Set Up Profile
        </Text>
        <View className="justify-center items-center my-2">
          <Pressable onPress={pickImageAsync}>
            <Image
              source={
                avi
                  ? { uri: avi[0].uri }
                  : require("../assets/images/avatar.png")
              }
              height={100}
              width={100}
              className="rounded-full h-[70px] w-[70px] bg-white"
            />
          </Pressable>
        </View>

        <TextInput
          className="bg-gray-300 p-2 text-base rounded-md font-SFLight"
          placeholder="Name"
        />
        <TextInput
          className="bg-gray-300 p-2 text-base rounded-md font-SFLight"
          placeholder="Username"
          secureTextEntry={true}
        />
        <TextInput
          className="bg-gray-300 p-2 text-base rounded-md font-SFLight"
          placeholder="Phone Number"
          inputMode="tel"
        />
        <TouchableOpacity
          className="rounded-md bg-main p-2"
          onPress={updateProfile}
        >
          {/* <DateTimePicker
            value={new Date()}
            dateFormat="day month year"
            display="inline"
            mode="date"
          /> */}
          <Text className="text-white font-SFMedium text-base text-center">
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
