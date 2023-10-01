import { View, Text, TextInput } from "react-native";
import React from "react";

export default function NewZeet() {
  return (
    <View>
      <TextInput
        placeholder="Make new zeet"
        className="p-2 font-SFMedium text-md text-black "
      />
    </View>
  );
}
