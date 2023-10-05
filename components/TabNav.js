import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import SearchStacks from "./SearchStacks";
import StackNav from "./ScreenNavigator";
import Notifications from "../screens/Notifications";
import MessagesStack from "./MessagesStack";
import HomeScreen from "../screens/HomeScreen";
import Header from "./Header";
// import { AppState } from "./AppContext";

const TabNav = () => {
  const Tab = createBottomTabNavigator();
  // const { state } = useContext(AppState);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "ios-search" : "ios-search-outline";
          } else if (route.name === "Messages") {
            iconName = focused ? "mail" : "mail-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "notifications" : "notifications-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#124475",
          height: 60,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#124475",
          },
          tabBarShowLabel: false,
          headerTintColor: "#fff",
          headerShown: true,
          title: "Home",
          headerTitle: (props) => <Header {...props} />,
          // headerRight: () => (
          //   <Button
          //     onPress={() => alert("This is a test button!")}
          //     title="Info"
          //     color="red"
          //   />
          // ),
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStacks}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{
          tabBarBadge: 5,
          tabBarShowLabel: false,
          tabBarBadgeStyle: { backgroundColor: "white" },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesStack}
        options={{
          tabBarShowLabel: false,
          tabBarBadge: 2,
          headerShown: false,
          tabBarBadgeStyle: { backgroundColor: "white" },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
