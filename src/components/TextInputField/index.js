import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextInputField = ({ label, placeholder, secureTextEntry, ...props }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{label}</Text>
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				{...props}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 12,
	},
	title: {
		fontSize: 16,
		marginTop: 28,
		marginBottom: 12,
	},
	input: {
		borderBottomWidth: 1,
		height: 40,
		fontSize: 14,
	},
});

export default TextInputField;
