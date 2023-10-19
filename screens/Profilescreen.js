import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Jot from "../components/Jot";
import Loading from "../components/loading";

export default function Profilescreen({ navigation }) {
  const [posts, setPosts] = useState(null);
  const {
    params: { postNprofile },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${postNprofile.userId}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView>
      <ImageBackground source={require("../assets/images/cover.png")}>
        <View className="h-[150px]"></View>
      </ImageBackground>
      <View className="flex flex-row justify-between items-center px-4 -mt-[50px]">
        <View>
          <View className="w-[110px] justify-center items-center rounded-full bg-main h-[110px]">
            <Image
              source={{ uri: postNprofile.image }}
              height={100}
              width={100}
              className="rounded-full bg-white"
            />
          </View>
          <Text className="text-xl font-SFBlack mt-2">
            {postNprofile.firstName} {postNprofile.lastName}
          </Text>
          <Text className="text-md text-gray-500 font-SFMedium">
            @{postNprofile.username}
          </Text>
        </View>
        <TouchableOpacity>
          <SimpleLineIcons
            name={"options-vertical"}
            size={20}
            color={"#124475"}
          />
        </TouchableOpacity>
      </View>
      <View className="px-4">
        <Text className="font-SFMedium text-md">
          {postNprofile.company.title}, {postNprofile.company.name}
        </Text>
        <View className="py-2 mt-1 border-y-2 border-gray-300">
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-1">
              <Ionicons name={"call"} size={20} color={"#124475"} />
              <Text className="text-md font-SFMedium">
                {postNprofile.phone}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <Ionicons name={"mail"} size={20} color={"#124475"} />
              <Text className="text-md font-SFMedium">
                {postNprofile.email}
              </Text>
            </View>
          </View>
          <View className="flex my-2 flex-row justify-between items-center">
            <Pressable
              onPress={() =>
                navigation.navigate("Location", {
                  location: postNprofile.address,
                  data: {
                    first: postNprofile.firstName,
                    last: postNprofile.lastName,
                    image: postNprofile.image,
                  },
                })
              }
              className="flex flex-row items-center gap-1"
            >
              <Ionicons name={"location"} size={20} color={"#124475"} />
              <Text className="text-md font-SFMedium">
                {postNprofile.address.city}, {postNprofile.address.state}
              </Text>
            </Pressable>
            <View className="flex flex-row items-center gap-1">
              <Ionicons name={"link"} size={20} color={"#124475"} />
              <Text className="text-md font-SFMedium">
                {postNprofile.domain}
              </Text>
            </View>
          </View>
          <View className="flex flex-row justify-between px-4 items-center">
            <View className="flex flex-row items-center gap-1">
              <Text className="text-md font-SFMedium">
                Age: {postNprofile.age}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <Text className="text-md font-SFMedium">
                Gender: {postNprofile.gender}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* <View className="flex flex-row justify-around items-center px-2 my-4 border-b-2 border-gray-300 ">
        <TouchableOpacity>
          <Text className="text-md font-SFBlack text-main">Zeets</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-md font-SFMedium">Zeets & Replies</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-md font-SFMedium">Media</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-md font-SFMedium">Likes</Text>
        </TouchableOpacity>
      </View> */}
      <FlatList
        data={posts}
        renderItem={({ item }) => <Jot key={item.id} post={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View className="flex flex-row justify-around items-center px-2 my-4 border-b-2 border-gray-300 ">
            <TouchableOpacity>
              <Text className="text-md font-SFBlack text-main">Zeets</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-md font-SFMedium">Zeets & Replies</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-md font-SFMedium">Media</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-md font-SFMedium">Likes</Text>
            </TouchableOpacity>
          </View>
        }
        ItemSeparatorComponent={
          <View className="w-full h-1 my-2 bg-gray-300"></View>
        }
        ListEmptyComponent={<Loading />}
        className="p-2"
      />
    </ScrollView>
  );
}
