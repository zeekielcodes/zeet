import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Jot({ post }) {
  const navigation = useNavigation();
  const [postNprofile, setPostNprofile] = useState(null);
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${post.userId}`)
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
        setPostNprofile({ ...post, ...data });
      })
      .catch((err) => console.log(err));
  }, []);

  if (!postData) return;
  return (
    <TouchableOpacity
      className="shadow"
      onPress={() => navigation.navigate("SinglePost", { postNprofile })}
    >
      <View className="flex flex-row gap-2 w-full">
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile", { postNprofile })}
        >
          <View className="h-[60px] w-[60px] bg-main rounded-full justify-center items-center">
            <Image
              source={{ uri: postData.image }}
              height={50}
              width={50}
              alt=""
              className="rounded-full bg-white"
            />
          </View>
        </TouchableOpacity>
        <View className="flex-1 flex-shrink">
          <View className="w-full flex flex-row items-center gap-1">
            <Text
              className="font-SFBlack leading-none text-md"
              style={{ includeFontPadding: false, textAlignVertical: "center" }}
            >
              {postData.firstName} {postData.lastName}
            </Text>
            <Text
              className="font-SFLight text-sm text-gray-500"
              style={{ includeFontPadding: false, textAlignVertical: "center" }}
            >
              @{postData.username}
            </Text>
          </View>
          <View className="">
            <Text
              className="text-md font-SFLight"
              style={{ includeFontPadding: false, textAlignVertical: "center" }}
            >
              {post.body}
            </Text>
          </View>
          <View className="flex flex-row justify-between items-center">
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
                {post.reactions}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
