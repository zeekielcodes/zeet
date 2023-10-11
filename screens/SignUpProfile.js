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
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function SignUpProfile({ navigation }) {
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
          <Pressable onPress={() => alert("Pressed")}>
            <Image
              source={require("../assets/images//avatar.png")}
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
          onPress={() => navigation.navigate("SetUpProfile")}
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
