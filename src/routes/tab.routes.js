import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Feed from "../screens/Feed";
import SearchUser from "../screens/SearchUser";
import MyProfile from "../screens/MyProfile";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
          tabBarLabel: "Início",
        }}
      />
      <Tab.Screen
        name="SearchUser"
        component={SearchUser}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" size={size} color={color} />
          ),
          tabBarLabel: "Pesquisar Usuário",
        }}
      />
    </Tab.Navigator>
  );
}
