import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const NewPostAppsTabs = ({ onPress }) => {
	return (
		<TouchableOpacity style={styles.floatingButton} onPress={onPress}>
			<FontAwesome5 name="plus" size={20} color="#FFFFFF" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	floatingButton: {
		position: "absolute",
		width: 60,
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		right: 30,
		bottom: 30,
		backgroundColor: "#2F80ED",
		borderRadius: 30,
		elevation: 8,
	},
});

export default NewPostAppsTabs;
