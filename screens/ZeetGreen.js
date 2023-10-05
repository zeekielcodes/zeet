import { SafeAreaView, View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ZeetGreen() {
  // const navigation = useNavigation();
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //     headerTitle: "Zeet Green",
  //   });
  // }, []);
  return (
    <SafeAreaView className="flex-1 flex justify-center items-center gap-4">
      <MaterialIcons name={"verified-user"} size={200} color={"#22c55e"} />
      <Text className="font-SFBlack text-3xl text-main">Zeet Green</Text>
      <Text className="text-md font-SFMedium">
        Easy peasy. Get verified in minutes.
      </Text>
      <TouchableOpacity className="px-6 py-3 bg-[#22c55e] rounded-3xl">
        <Text className="text-lg font-SFLight text-main">Get Green</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
