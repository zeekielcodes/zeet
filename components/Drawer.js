import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import Profilescreen from "../screens/Profilescreen";
import MyProfile from "../screens/MyProfile";
import TabNav from "./TabNav";
import Ionicons from "react-native-vector-icons/Ionicons";
import StackNav from "./ScreenNavigator";
import DrawerContent from "./DrawerContent";
import ZeetGreen from "../screens/ZeetGreen";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={DrawerContent}
      screenOptions={{
        drawerActiveBackgroundColor: "white",
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#124475",
        },
        drawerInactiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={StackNav}
        // options={{
        //   drawerIcon: ({ focused, color, size }) => (
        //     <Ionicons name={"home"} size={size} color={color} />
        //   ),
        //   title: "My Profile",
        // }}
      />
      <Drawer.Screen
        name="Profile"
        component={MyProfile}
        // options={{
        //   drawerIcon: ({ focused, color, size }) => (
        //     <Ionicons name={"person"} size={size} color={color} />
        //   ),
        //   title: "My Profile",
        // }}
      />
      {/* <Drawer.Screen name="ZeetGreen" component={ZeetGreen} /> */}
    </Drawer.Navigator>
  );
}
