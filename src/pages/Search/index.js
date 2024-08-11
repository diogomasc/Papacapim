import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Search = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Search</Text>
		</View>
	);
};

export default Search;

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
