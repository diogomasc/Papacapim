import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextInputFieldSettings = ({
	label,
	value,
	onChangeText,
	placeholder,
	secureTextEntry = false,
	editable = true,
	multiline = false,
	numberOfLines = 1,
	placeholderTextColor = "#6B6572",
	containerStyle,
	inputStyle,
	labelStyle,
}) => {
	return (
		<View style={[styles.container, containerStyle]}>
			{label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
			<TextInput
				style={[styles.input, inputStyle]}
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				editable={editable}
				multiline={multiline}
				numberOfLines={numberOfLines}
				placeholderTextColor={placeholderTextColor}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 12,
	},
	label: {
		fontSize: 16,
		marginBottom: 8,
		color: "#FFFFFF",
	},
	input: {
		borderBottomWidth: 1,
		height: 40,
		fontSize: 14,
		color: "#FFFFFF",
	},
});

export default TextInputFieldSettings;
