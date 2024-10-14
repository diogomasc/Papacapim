import React from "react";
import { TextInput, View } from "react-native";
import { Container, Title, Input } from "./styles";

const TextInputFieldSignInRegister = ({
  label,
  placeholder,
  secureTextEntry,
  ...props
}) => {
  return (
    <Container>
      <Title>{label}</Title>
      <Input
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </Container>
  );
};

export default TextInputFieldSignInRegister;
