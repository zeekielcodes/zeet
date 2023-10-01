import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function AddZeet() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("NewZeet")}
      className="bg-main h-[50px] w-[50px] absolute bottom-6 right-6 overflow-hidden rounded-full"
    >
      <Image
        height={40}
        width={40}
        source={require("../assets/images/create.png")}
        className="w-full h-full aspect-auto bg-white"
      />
    </TouchableOpacity>
  );
}
