import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FonteAwsome from "react-native-vector-icons/FontAwesome";
import FonteAwsome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Home from "../../pages/Home";
import Search from "../../pages/Search";
import Inbox from "../../pages/Inbox";
import Notifications from "../../pages/Notifications";

const Tab = createBottomTabNavigator();

const AppTabs = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarStyle: {
					height: 65,
					backgroundColor: "#101010",
					borderTopWidth: 1,
					borderTopColor: "#6B6572",
					paddingBottom: 5,
				},
				// tabBarShowLabel: false, // Ocultar o nome da aba
				tabBarActiveTintColor: "#FCFCFC",
				headerStyle: {
					backgroundColor: "#101010",
					borderBottomWidth: 1,
					borderBottomColor: "#6B6572",
				},
				headerTintColor: "#FCFCFC",
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FonteAwsome name="home" color={color} size={25} />
					),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={Search}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FonteAwsome name="search" color={color} size={25} />
					),
				}}
			/>
			<Tab.Screen
				name="Notifications"
				component={Notifications}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FonteAwsome5 name="bell" color={color} size={25} />
					),
				}}
			/>
			<Tab.Screen
				name="Inbox"
				component={Inbox}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="mail-outline" color={color} size={25} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppTabs;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#262428",
		alignItems: "center",
		justifyContent: "center",
	},
});
