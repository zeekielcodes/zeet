import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SingleJot({ navigation }) {
  const {
    params: { postNprofile },
  } = useRoute();
  return (
    <ScrollView>
      <View className="flex flex-row gap-3 items-center">
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile", { postNprofile })}
        >
          <Image
            source={{ uri: postNprofile.image }}
            alt=""
            height={60}
            width={60}
            className="rounded-full"
          />
        </TouchableOpacity>
        <View className="gap-0">
          <Text className="font-SFBlack text-lg">
            {postNprofile.firstName} {postNprofile.lastName}
          </Text>
          <Text className="text-gray-500 text-md font-SFMedium">
            @{postNprofile.username}
          </Text>
        </View>
      </View>
      <Text className="font-SFLight text-black text-md my-2 px-2">
        {postNprofile.body}
      </Text>
      <View className="flex flex-row justify-around items-center py-2 border-y-2 border-gray-300">
        <View className="flex flex-row gap-1">
          <Ionicons name={"chatbox-outline"} size={20} color={"black"} />
          <Text className="text-gray-400 font-SFMedium">0</Text>
        </View>
        <View className="flex flex-row gap-1">
          <Ionicons name={"repeat"} size={20} color={"black"} />
          <Text className="text-gray-400 font-SFMedium">0</Text>
        </View>
        <View className="flex flex-row gap-1">
          <Ionicons name={"heart"} size={20} color={"#124475"} />
          <Text className="text-gray-400 font-SFMedium">
            {postNprofile.reactions}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
