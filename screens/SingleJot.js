import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function SingleJot({ navigation }) {
  const [commentFocus, setCommentFocus] = useState(false);
  const [comment, setComment] = useState("");
  const {
    params: { postNprofile },
  } = useRoute();
  return (
    <View className="flex-1">
      <ScrollView className="bg-white flex-1">
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
        <View className="flex flex-row items-center p-2 border-y-2 border-gray-300">
          {/* <View className="flex flex-row gap-1">
            <Ionicons name={"chatbox-outline"} size={20} color={"black"} />
            <Text className="text-gray-400 font-SFMedium">0</Text>
          </View>
          <View className="flex flex-row gap-1">
            <Ionicons name={"repeat"} size={20} color={"black"} />
            <Text className="text-gray-400 font-SFMedium">0</Text>
          </View> */}

          <Text className="text-main font-SFMedium">
            {postNprofile.reactions} Likes
          </Text>
        </View>
        <View className="flex flex-row justify-around items-center py-2 border-b-2 border-gray-300">
          <Ionicons name={"chatbox-outline"} size={20} color={"black"} />
          <MaterialIcons name={"repeat"} size={20} color={"black"} />
          <Ionicons name={"heart-outline"} size={20} color={"#124475"} />
          <Ionicons name={"bookmark-outline"} size={20} color={"#124475"} />
          <Ionicons name={"share-social"} size={20} color={"#124475"} />
        </View>
      </ScrollView>
      <View className="px-4 py-4 bg-white">
        {commentFocus && (
          <View className="flex-row gap-1 items-center">
            <Text className="font-SFMedium text-gray-500 text-sm">
              Replying
            </Text>
            <TouchableOpacity>
              <Text className="text-main text-sm font-SFMedium">
                @{postNprofile.username}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View className="border-b-2 border-gray-400 flex-row gap-2 items-center">
          <TextInput
            className="bg-none font-SFLight bg-transparent flex-1 text-base h-[30px]"
            placeholder="Zeet a response..."
            onFocus={() => setCommentFocus(true)}
            onChangeText={(text) => setComment(text)}
            maxLength={140}
          />
          <TouchableOpacity>
            <Ionicons name={"camera"} size={20} color={"#124475"} />
          </TouchableOpacity>
        </View>
        {commentFocus && (
          <View className="flex-row items-center gap-6 pt-2">
            <TouchableOpacity>
              <Ionicons name={"images"} size={20} color={"#124475"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name={"gif"} size={20} color={"#124475"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name={"list"} size={20} color={"#124475"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name={"location"} size={20} color={"#124475"} />
            </TouchableOpacity>
            <View className="flex-1 justify-end items-end">
              <TouchableOpacity
                disabled={comment.length < 1}
                className={`px-4 py-1 ${
                  comment.length < 1 ? "bg-main/75" : "bg-main"
                } rounded-3xl`}
              >
                <Text className="text-white font-SFMedium">Respond</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
