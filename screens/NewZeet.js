import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

export default function NewZeet() {
  const [newZeet, setNewZeet] = useState("");
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerTitle: (props) => <Header {...props} />,
      headerRight: () => (
        <TouchableOpacity
          disabled={newZeet.length < 1}
          className={`px-4 py-1 ${
            newZeet.length < 1 ? "bg-white/80" : "bg-white"
          } rounded-3xl`}
        >
          <Text className="text-main font-SFMedium">Xeet</Text>
        </TouchableOpacity>
      ),
    });
  }, [newZeet]);
  return (
    <View className="flex-row gap-2 p-2">
      <Image
        source={require("../assets/images/theface.jpg")}
        className="h-[40px] w-[40px] rounded-full"
      />
      <TextInput
        multiline={true}
        placeholder="What's happening?"
        className="p-2 font-SFMedium text-lg text-black flex-1 flex-wrap"
        onChangeText={(text) => setNewZeet(text)}
      />
    </View>
  );
}
