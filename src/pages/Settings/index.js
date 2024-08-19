import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DummyUserAuthSession } from "../../DummyData/DummyData";
import TextInputFieldSettings from "../../components/TextInputFieldSettings";

const Settings = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    // Simula a busca dos dados do usuário autenticado
    const fetchUserData = async () => {
      try {
        // Aqui você normalmente faria uma chamada API
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
    // Aqui você normalmente enviaria os dados atualizados para o backend
    console.log("Dados atualizados:", userData);
    Alert.alert("Sucesso", "Dados atualizados com sucesso!");
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }
    // Aqui você normalmente enviaria a nova senha para o backend
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
            // Aqui você normalmente enviaria uma requisição para excluir a conta no backend
            console.log("Conta excluída");
            Alert.alert("Conta excluída", "Sua conta foi excluída com sucesso.");
            navigation.navigate("Login"); // Supondo que você tenha uma tela de login
          },
          style: "destructive"
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
          containerStyle={styles.textArea}
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
          onChangeText={(text) =>
            setUserData({ ...userData, webSite: text })
          }
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
          label="Confirmação da Nova Senha:"
          value={confirmPassword}
          placeholder="Confirme Nova Senha"
          secureTextEntry
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#E2B93B" }]}
          onPress={handleChangePassword}
        >
          <Text style={styles.buttonText}>Alterar Senha</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#EB5757" }]}
          onPress={handleDeleteAccount}
        >
          <Text style={styles.buttonText}>Excluir Conta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#101010",
	},
	backButton: {
		flexDirection: "row",
		alignItems: "center",
		padding: 16,
	},
	backButtonText: {
		color: "#2F80ED",
		fontSize: 16,
		marginLeft: 8,
	},
	profileContainer: {
		flexDirection: "row",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#101010",
	},
	profileImage: {
		height: 35,
		width: 35,
		borderRadius: 15,
		marginLeft: 15,
		resizeMode: "cover",
	},
	userName: {
		color: "#FFFFFF",
		fontSize: 18,
		marginLeft: 10,
	},
	containerForm: {
		backgroundColor: "#101010",
		flex: 1,
		paddingStart: "5%",
		paddingEnd: "5%",
		paddingBottom: 20,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	disabledInput: {
		opacity: 0.5,
	},
	textArea: {
		maxHeight: 120,
	},
	message: {
		color: "#FFFFFF",
		fontSize: 18,
		marginBottom: 8,
	},
	button: {
		backgroundColor: "#2F80ED",
		borderRadius: 10,
		paddingVertical: 12,
		alignItems: "center",
		marginBottom: 12,
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: 16,
	},
	divider: {
		height: 1,
		backgroundColor: "#444444",
		marginVertical: 16,
	},
});

export default Settings;
