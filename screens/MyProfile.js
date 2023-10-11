import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { supabase } from "../supabase/supabase";

export default function MyProfile({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [user, setUser] = useState();
  const [userdata, setUserData] = useState();

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      // console.log(data.user);
      data.user && setUser(data.user);
      if (data.user) {
        const currentuser = await supabase
          .from("profile")
          .select("*")
          .eq("id", data.user.id);
        console.log(currentuser);
        setUserData(currentuser.data[0]);
      } else {
        console.log("No user");
      }
      console.log(error);
    };
    getUser();
  }, []);

  if (!user) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size={"large"} color={"black"} />
      </View>
    );
  }

  return (
    <ScrollView>
      <ImageBackground source={require("../assets/images/cover.png")}>
        <View className="h-[150px]"></View>
      </ImageBackground>
      <View className="flex flex-row justify-between items-center px-4 -mt-[50px]">
        <View>
          <View className="w-[110px] justify-center items-center rounded-full bg-main h-[110px]">
            <Image
              source={{}}
              height={100}
              width={100}
              className="rounded-full bg-white"
            />
          </View>
          <Text className="text-xl font-SFBlack mt-2">{userdata?.name}</Text>
          <Text className="text-md text-gray-500 font-SFMedium">
            @{userdata?.username}
          </Text>
        </View>
        <TouchableOpacity className="px-4 border-2 rounded-3xl border-main py-1">
          {/* <SimpleLineIcons
            name={"options-vertical"}
            size={20}
            color={"#124475"}
          /> */}
          <Text className="font-SFBlack text-lg text-main">Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View className="px-4">
        <Text className="font-SFMedium text-md">{userdata?.bio}</Text>
        <View className="py-2 mt-1 border-y-2 border-gray-300">
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-1">
              <Ionicons name={"call"} size={20} color={"#124475"} />
              <Text className="text-md font-SFMedium">{userdata?.phone}</Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <Ionicons name={"mail"} size={20} color={"#124475"} />
              <Text className="text-md font-SFMedium">{user.email}</Text>
            </View>
          </View>
          <View className="flex my-2 flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-1">
              <Ionicons name={"location"} size={20} color={"#124475"} />
              <Text className="text-md font-SFMedium">
                {userdata?.location}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <Ionicons name={"link"} size={20} color={"#124475"} />
              <Text className="text-md font-SFMedium">{userdata?.website}</Text>
            </View>
          </View>
          <View className="flex flex-row justify-between px-4 items-center">
            <View className="flex flex-row items-center gap-1">
              <Text className="text-md font-SFMedium">Age:</Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <Text className="text-md font-SFMedium">Gender:</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
