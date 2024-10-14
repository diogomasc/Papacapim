import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, ScrollView, TouchableOpacity } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import TextInputField from "../../components/TextInputField";
import {
  Button,
  ButtonText,
  Container,
  ContainerForm,
  ContainerHeader,
  Message,
  Info,
} from "./styles";

const Register = () => {
  const navigation = useNavigation();
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !login || !password || !confirmPassword) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    try {
      await register({
        name,
        login,
        password,
        password_confirmation: confirmPassword,
      });
      Alert.alert(
        "Registro concluído",
        "Cadastro foi concluído com sucesso. Faça login para continuar."
      );
      navigation.navigate("SignIn");
    } catch (error) {
      console.error("Erro no registro:", error);
      Alert.alert("Erro", "Falha no registro. Por favor, tente novamente.");
    }
  };

  return (
    <Container>
      <ContainerHeader>
        <Message>Cadastre-se</Message>
      </ContainerHeader>

      <ContainerForm>
        <ScrollView>
          <TextInputField
            label="Nome:"
            placeholder="Digite seu nome real (nome social)"
            value={name}
            onChangeText={setName}
          />
          <Info>Esse será seu nome social escolha algo legal!</Info>
          <TextInputField
            label="Apelido para seu Papacapim:"
            placeholder="Defina apelido"
            value={login}
            onChangeText={setLogin}
          />
          <Info>Esse será seu login!</Info>
          <TextInputField
            label="Senha:"
            placeholder="Defina sua senha"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TextInputField
            label="Confirme sua senha:"
            placeholder="Confirme sua senha"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={handleRegister}>
            <Button>
              <ButtonText>Cadastrar</ButtonText>
            </Button>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Info>Ja possui uma conta? Faça o login</Info>
          </TouchableOpacity>
        </ScrollView>
      </ContainerForm>
    </Container>
  );
};

export default Register;
