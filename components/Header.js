import { View, Text, Image } from "react-native";
import React from "react";

export default function Header({ children }) {
  return (
    <>
      <Image
        className="h-[40px] w-[40px] rounded-full"
        source={require("../assets/images/theface.jpg")}
      />
      {/* <Text className="text-white">{children}</Text> */}
    </>
  );
}
