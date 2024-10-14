import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import styles from "./styles";

export default function NewPost() {
  const navigation = useNavigation();
  const [postMessage, setPostMessage] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handlePublish = async () => {
    try {
      const response = await api.post("/posts", {
        post: {
          message: postMessage,
        },
      });

      if (response.status === 201) {
        Alert.alert("Sucesso", "Postagem publicada com sucesso.");
        setPostMessage("");
        navigation.goBack();
      }
    } catch (error) {
      console.error("Erro ao publicar post:", error);
      Alert.alert(
        "Erro",
        "Não foi possível publicar a postagem. Tente novamente."
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nova Postagem</Text>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="x" size={24} color="#2F80ED" />
          <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.subHeader}>
        <Feather style={styles.icon} name="edit" size={24} color="#2F80ED" />
        <Text style={styles.description}>
          O que deseja compartilhar hoje? Faça sua postagem logo abaixo!
        </Text>
      </View>

      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholder="O que está acontecendo?"
        value={postMessage}
        onChangeText={setPostMessage}
      />
      <View style={styles.footer}>
        <Text style={styles.charCount}>{postMessage.length} caracteres</Text>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                postMessage.trim().length > 0 ? "#2F80ED" : "#9E9E9E",
            },
          ]}
          onPress={handlePublish}
          disabled={postMessage.trim().length === 0}
        >
          <Feather name="send" size={24} color="#fff" />
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
