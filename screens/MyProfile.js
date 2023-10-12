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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { supabase } from "../supabase/supabase";
import { A } from "@expo/html-elements";

export default function MyProfile({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [user, setUser] = useState();
  const [userdata, setUserData] = useState();

  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    const getUser = async () => {
      console.log("Running");
      const { data, error } = await supabase.auth.getUser();
      console.log("User", data.user);
      console.log(error);
      // if (data.user) {
      setUser(data.user);
      const currentuser = await supabase
        .from("profile")
        .select("*")
        .eq("id", data.user.id);
      console.log(currentuser);
      console.log(error);
      setUserData(currentuser.data[0]);
      // } else {
      //   console.log("No user");
      // }
      console.log(error);
    };
    getUser();
  }, []);

  if (!user || !userdata) {
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
              source={require("../assets/images/theface.jpg")}
              height={100}
              width={100}
              className="rounded-full h-[100px] aspect-square bg-white"
            />
          </View>
          <View className="items-center flex-row mt-2">
            <Text
              style={{ includeFontPadding: false, textAlignVertical: "center" }}
              className="text-xl font-SFBlack"
            >
              {userdata?.name}
            </Text>
            <MaterialIcons name={"verified"} size={18} color={"#22c55e"} />
          </View>
          {/* <Text className="text-xl font-SFBlack mt-2">{userdata?.name}</Text> */}
          <Text className="text-md text-gray-500 font-SFMedium">
            @{userdata?.username}
          </Text>
        </View>
        <TouchableOpacity className="px-4 border-2 justify-center items-center rounded-3xl border-main py-1">
          {/* <SimpleLineIcons
            name={"options-vertical"}
            size={15}
            color={"#124475"}
          /> */}
          <Text
            className="font-SFBlack text-lg text-main"
            style={{ includeFontPadding: false, textAlignVertical: "center" }}
          >
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View className="px-4">
        <Text className="font-SFMedium text-md">{userdata?.bio}</Text>
        <View className="py-2 mt-1 border-y-2 border-gray-300">
          <View className="flex flex-row flex-wrap gap-1 items-center">
            <View className="flex flex-row items-center gap-1">
              <Ionicons name={"location"} size={15} color={"#124475"} />
              <Text className="text-md font-SFMedium">
                {userdata?.location}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <Ionicons name={"link"} size={15} color={"#124475"} />
              <A href={`https://${userdata.website}`}>
                <Text className="text-md text-[#0000EE] font-SFMedium">
                  {userdata?.website}
                </Text>
              </A>
            </View>
            <View className="flex flex-row items-center gap-1">
              <MaterialIcons name={"celebration"} size={15} color={"#124475"} />
              <Text className="text-md font-SFMedium">
                {months[new Date(userdata.dob).getMonth()]}{" "}
                {new Date(userdata.dob).getDate()}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <Ionicons name={"calendar"} size={15} color={"#124475"} />
              <Text className="text-md font-SFMedium">
                Joined {months[new Date(userdata.created_at).getMonth()]}{" "}
                {new Date(userdata.created_at).getFullYear()}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <Ionicons name={"call"} size={15} color={"#124475"} />
              <Text className="text-md font-SFMedium">+{userdata?.phone}</Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <Ionicons name={"mail"} size={15} color={"#124475"} />
              <Text className="text-md font-SFMedium">{user.email}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
