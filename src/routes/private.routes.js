import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../services/api";
import { useAuth } from "../contexts/AuthContext";
import TabRoutes from "./tab.routes";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import NewPost from "../screens/NewPost";
import MyProfile from "../screens/MyProfile";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { user, signOut } = useAuth();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (user) {
      fetchUserDetails();
    }
  }, [user]);

  const fetchUserDetails = async () => {
    try {
      const response = await api.get(`/users/${user.login}`);
      setUserDetails(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleLogout = useCallback(() => {
    Alert.alert(
      "Sair",
      "Você realmente gostaria de fazer logout?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => signOut(),
        },
      ],
      { cancelable: false }
    );
  }, [signOut]);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfo}>
        {userDetails && (
          <>
            <Text style={styles.name}>{userDetails.name}</Text>
            <Text style={styles.login}>@{userDetails.login}</Text>
          </>
        )}
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        icon={({ color, size }) => (
          <Feather name="log-out" color={color} size={size} />
        )}
        onPress={handleLogout}
      />
    </DrawerContentScrollView>
  );
};

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Papacapim</Text>
      <View style={styles.placeholder} />
    </View>
  );
};

export default function PrivateRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        header: () => <CustomHeader />,
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          drawerLabel: "Início",
        }}
      />
      <Drawer.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          drawerLabel: "Meu Perfil",
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
          drawerLabel: "Configurações",
        }}
      />
      <Drawer.Screen
        name="NewPost"
        component={NewPost}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  login: {
    fontSize: 14,
    color: "#666",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "#262428",
  },
  placeholder: {
    width: 24,
  },
});
