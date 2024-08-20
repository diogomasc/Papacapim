import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DummyUserAuthSession } from "../../DummyData/DummyData";
import TextInputFieldSettings from "../../components/TextInputFieldSettings";
import styles from "./styles";

const Settings = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = DummyUserAuthSession[0];
        if (user) {
          setUserData(user);
        } else {
          throw new Error("Usuário não encontrado");
        }
      } catch (error) {
        Alert.alert("Erro", "Não foi possível carregar os dados do usuário");
        navigation.goBack();
      }
    };

    fetchUserData();
  }, []);

  const handleUpdate = () => {
    console.log("Dados atualizados:", userData);
    Alert.alert("Sucesso", "Dados atualizados com sucesso!");
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    console.log("Senha alterada");
    Alert.alert("Sucesso", "Senha alterada com sucesso!");
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Confirmar exclusão",
      "Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          onPress: () => {
            console.log("Conta excluída");
            Alert.alert(
              "Conta excluída",
              "Sua conta foi excluída com sucesso."
            );
            setTimeout(() => {
              navigation.navigate("Welcome");
            }, 300);
          },
          style: "destructive",
        },
      ]
    );
  };

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <FontAwesome5 name="arrow-left" size={20} color="#2F80ED" />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.profileContainer}>
        <Image
          source={{ uri: userData.imageOfUserProfileUri }}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{userData.nameUser}</Text>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.message}>Dados do Usuário</Text>

        <TextInputFieldSettings
          label="Nome de Usuário:"
          value={userData.idUserName}
          placeholder="Nome de Usuário"
          editable={false}
          containerStyle={styles.disabledInput}
        />

        <TextInputFieldSettings
          label="Email:"
          value={userData.email}
          placeholder="Email"
          editable={false}
          containerStyle={styles.disabledInput}
        />

        <TextInputFieldSettings
          label="Nome:"
          value={userData.nameUser}
          placeholder="Nome"
          onChangeText={(text) => setUserData({ ...userData, nameUser: text })}
        />

        <TextInputFieldSettings
          label="Data de Nascimento:"
          value={userData.dateOfBirth}
          placeholder="Data de Nascimento"
          onChangeText={(text) =>
            setUserData({ ...userData, dateOfBirth: text })
          }
        />

        <TextInputFieldSettings
          label="Biografia:"
          value={userData.biography}
          placeholder="Biografia"
          onChangeText={(text) => setUserData({ ...userData, biography: text })}
          multiline
          numberOfLines={4}
        />

        <TextInputFieldSettings
          label="Imagem do Perfil:"
          value={userData.imageOfUserProfileUri}
          placeholder="URL da Imagem do Perfil"
          onChangeText={(text) =>
            setUserData({ ...userData, imageOfUserProfileUri: text })
          }
        />

        <TextInputFieldSettings
          label="País:"
          value={userData.Address[0]?.country || ""}
          placeholder="País"
          onChangeText={(text) =>
            setUserData({
              ...userData,
              Address: [{ ...userData.Address[0], country: text }],
            })
          }
        />

        <TextInputFieldSettings
          label="Cidade:"
          value={userData.Address[0]?.city || ""}
          placeholder="Cidade"
          onChangeText={(text) =>
            setUserData({
              ...userData,
              Address: [{ ...userData.Address[0], city: text }],
            })
          }
        />

        <TextInputFieldSettings
          label="Estado:"
          value={userData.Address[0]?.state || ""}
          placeholder="Estado"
          onChangeText={(text) =>
            setUserData({
              ...userData,
              Address: [{ ...userData.Address[0], state: text }],
            })
          }
        />

        <TextInputFieldSettings
          label="Website:"
          value={userData.webSite}
          placeholder="Website"
          onChangeText={(text) => setUserData({ ...userData, webSite: text })}
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#2F80ED" }]}
          onPress={handleUpdate}
        >
          <Text style={styles.buttonText}>Atualizar Dados</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <Text style={styles.message}>Editar Senha</Text>
        <TextInputFieldSettings
          label="Senha Atual:"
          value={currentPassword}
          placeholder="Senha Atual"
          secureTextEntry
          onChangeText={setCurrentPassword}
        />
        <TextInputFieldSettings
          label="Nova Senha:"
          value={newPassword}
          placeholder="Nova Senha"
          secureTextEntry
          onChangeText={setNewPassword}
        />
        <TextInputFieldSettings
          label="Confirmar Nova Senha:"
          value={confirmPassword}
          placeholder="Confirmar Nova Senha"
          secureTextEntry
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#2F80ED" }]}
          onPress={handleChangePassword}
        >
          <Text style={styles.buttonText}>Alterar Senha</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#E74C3C" }]}
          onPress={handleDeleteAccount}
        >
          <Text style={styles.buttonText}>Excluir Conta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Settings;
