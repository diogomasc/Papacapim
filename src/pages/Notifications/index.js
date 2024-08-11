import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Notifications = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Notifications</Text>
		</View>
	);
};

export default Notifications;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#101010",
		alignItems: "center",
		justifyContent: "center",
	},

	text: {
		color: "#FFFFFF",
		fontSize: 20,
	},
});
