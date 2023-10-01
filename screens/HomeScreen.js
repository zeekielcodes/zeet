import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Loading from "../components/loading";
import Jot from "../components/Jot";
import AddZeet from "../components/AddZeet";

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState(null);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Home",
    });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch((err) => console.log(err));
  }, []);
  return (
    <View className="flex-1 p-2">
      {posts ? (
        <>
          <FlatList
            data={posts}
            renderItem={({ item }) => <Jot key={item.id} post={item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={
              <View className="border-t-2 my-2 border-gray-300"></View>
            }
            ListEmptyComponent={<Loading />}
          />
          <AddZeet />
        </>
      ) : (
        <Loading />
      )}
    </View>
  );
}
