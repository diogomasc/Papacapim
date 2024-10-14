import React, { useState } from "react";
import { View, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/AuthContext";
import TextInputField from "../../components/TextInputField";
import {
  Button,
  ButtonText,
  Container,
  ContainerForm,
  ContainerHeader,
  Info,
  Message,
} from "./styles";

const SignIn = () => {
  const navigation = useNavigation();
  const { signIn } = useAuth();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    if (!login || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    setIsLoading(true);
    try {
      await signIn(login, password);
      Alert.alert("Sucesso", "Login efetuado com sucesso");
    } catch (error) {
      // console.error("Erro no login:", error);
      Alert.alert(
        "Erro",
        "Falha no login. Por favor, verifique suas credenciais e tente novamente."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <ContainerHeader>
        <Message>Bem-vindo(a)</Message>
      </ContainerHeader>

      <ContainerForm>
        <TextInputField
          label="Apelido do seu Papacapim:"
          placeholder="Entre com o seu apelido (login)"
          value={login}
          onChangeText={setLogin}
          autoCapitalize="none"
        />
        <TextInputField
          label="Senha:"
          placeholder="Entre com a sua senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={handleSignIn} disabled={isLoading}>
          <Button>
            {isLoading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <ButtonText>Acessar</ButtonText>
            )}
          </Button>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Info>Não possui uma conta? Cadastre-se</Info>
        </TouchableOpacity>
      </ContainerForm>
    </Container>
  );
};

export default SignIn;
