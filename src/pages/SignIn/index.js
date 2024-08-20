import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import TextInputField from "../../components/TextInputField";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View
        animatable="fadeInLeft"
        delay={1200}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View
        animatable="fadeInLeft"
        delay={1200}
        style={styles.containerForm}
      >
        <TextInputField label="E-mail:" placeholder="Digite seu e-mail" />
        <TextInputField
          label="Senha:"
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert("Sucesso", "Login efetuado com sucesso!");
            setTimeout(() => {
              navigation.navigate("AppTabs");
            }, 1000);
          }}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.textNewAccunt}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  containerForm: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  button: {
    backgroundColor: "#101010",
    width: "100%",
    borderRadius: 16,
    paddingVertical: 14,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  textNewAccunt: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 14,
  },
});

export default SignIn;
