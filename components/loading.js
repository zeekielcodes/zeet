import { View, Text, Image } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

export default function Loading() {
  return (
    <View className="flex-1 justify-center items-center">
      <Progress.Bar
        className=""
        indeterminate={true}
        size={60}
        color={"#124475"}
      />
    </View>
  );
}
