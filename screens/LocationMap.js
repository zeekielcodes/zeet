import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";

export default function LocationMap({ navigation }) {
  const {
    params: { location, data },
  } = useRoute();
  console.log("Location", location);
  console.log("Data", data);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: `${data.first} ${data.last}'s location`,
    });
  }, []);

  return (
    <View className="flex-1">
      <MapView
        region={{
          latitude: location.coordinates.lat,
          longitude: location.coordinates.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        loadingEnabled={true}
        loadingIndicatorColor="#124475"
        showsBuildings={true}
        className="w-full h-full"
      >
        <Marker
          coordinate={{
            latitude: location.coordinates.lat,
            longitude: location.coordinates.lng,
          }}
          title={`${data.first} is here`}
          description={`${location.city}, ${location.state}`}
          pinColor="#124475"
        />
      </MapView>
      <View className="absolute bottom-12 mx-4 w-[95%] justify-center items-center">
        <View className="bg-white flex-row items-center w-full pt-0 pb-4 gap-4 rounded-md">
          <Image
            className="h-[50px] w-[50px] rounded-full bg-main"
            source={{ uri: data.image }}
          />
          <View className="">
            <Text
              className="font-SFBlack text-lg mb-2"
              style={{ includeFontPadding: false, textAlignVertical: "center" }}
            >
              {data.first} {data.last}
            </Text>
            <Text
              className="font-SFMedium uppercase text-main text-md"
              style={{ includeFontPadding: false, textAlignVertical: "center" }}
            >
              {location.city}, {location.state}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
