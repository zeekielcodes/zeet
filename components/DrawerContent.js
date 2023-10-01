import {
  View,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function DrawerContent() {
  return (
    <SafeAreaView className="flex-1">
      <View className="justify-center items-center border-gray-50 p-8">
        <Image
          source={require("../assets/images/theface.jpg")}
          height={100}
          width={100}
          className="rounded-full h-[70px] w-[70px] bg-white"
        />
        <View className="items-center flex-row justify-center mt-2">
          <Text className="text-xl font-SFBlack text-white">Zeek</Text>
          <MaterialIcons name={"verified"} size={20} color={"#22c55e"} />
        </View>
        <Text className="text-gray-300 text-md font-SFMedium">@zeekcodes</Text>
      </View>
      <ScrollView className="flex-1 bg-white p-2">
        <View className="py-2 border-b-2 border-main">
          <TouchableHighlight>
            <View className="flex flex-row gap-2 items-center p-2 mb-2">
              <Ionicons name={"person"} size={25} color={"#124475"} />
              <Text className="text-lg font-SFMedium text-main">Profile</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View className="flex flex-row gap-2 items-center p-2 mb-2">
              <MaterialIcons
                name={"verified-user"}
                size={20}
                color={"#22c55e"}
              />
              <Text className="text-lg font-SFMedium text-main">
                Zeet Green
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View className="flex flex-row gap-2 items-center p-2 mb-2">
              <MaterialIcons name={"topic"} size={25} color={"#124475"} />
              <Text className="text-lg font-SFMedium text-main">Topics</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View className="flex flex-row gap-2 items-center p-2 mb-2">
              <Ionicons name={"list"} size={25} color={"#124475"} />
              <Text className="text-lg font-SFMedium text-main">Lists</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View className="flex flex-row gap-2 items-center p-2 mb-2">
              <Ionicons name={"bookmark"} size={25} color={"#124475"} />
              <Text className="text-lg font-SFMedium text-main">Bookmarks</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View className="flex flex-row gap-2 items-center p-2 mb-2">
              <Ionicons name={"square"} size={20} color={"#22c55e"} />
              <Text className="text-lg font-SFMedium text-main">
                Zeet Squares
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View className="flex flex-row gap-2 items-center p-2 mb-2">
              <Ionicons name={"people"} size={25} color={"#124475"} />
              <Text className="text-lg font-SFMedium text-main">
                Communities
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View className="py-2">
          <TouchableHighlight>
            <View className="flex flex-row gap-2 items-center p-2 mb-2">
              <Ionicons name={"settings"} size={25} color={"#124475"} />
              <Text className="text-lg font-SFMedium text-main">Settings</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View className="flex flex-row gap-2 items-center p-2 mb-2">
              <MaterialIcons name={"support"} size={25} color={"#124475"} />
              <Text className="text-lg font-SFMedium text-main">Support</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
      <View className="p-4">
        <MaterialIcons name={"wb-sunny"} size={25} color={"white"} />
      </View>
    </SafeAreaView>
  );
}
