import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const TextInputFieldSettings = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  editable = true,
  multiline = false,
  numberOfLines,
  containerStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, multiline && styles.textArea]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        editable={editable}
        multiline={multiline}
        numberOfLines={numberOfLines}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#2C2C2C",
    color: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  textArea: {
    color: "#FFFFFF",
    minHeight: 100,
    maxHeight: 200,
    textAlignVertical: "top",
  },
});

export default TextInputFieldSettings;
