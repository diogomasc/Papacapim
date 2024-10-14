import React, { useState, useEffect } from "react";
import { ScrollView, Alert, ActivityIndicator, Modal } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import api from "../../services/api";
import {
  Container,
  FormContainer,
  Header,
  InputContainer,
  InputLabel,
  Button,
  ButtonText,
  Divider,
  TextInputStyled,
  ModalContainer,
  ModalContent,
  ModalText,
  ModalTextInput,
  ModalButton,
  ModalButtonText,
  HeaderForm,
} from "./styles";

const Settings = () => {
  const { user, updateUser, signOut } = useAuth();
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [deletePassword, setDeletePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await api.get(`/users/${user.login}`);
        const userData = response.data;
        setName(userData.name || "");
        setLogin(userData.login || "");
      } catch (error) {
        console.error("Erro ao buscar detalhes do usuário:", error);
        Alert.alert("Erro", "Não foi possível carregar os dados do usuário.");
      }
    };

    if (user) {
      fetchUserDetails();
    }
  }, [user]);

  const handleUpdateName = async () => {
    if (!name.trim()) {
      Alert.alert("Erro", "Antes de atualizar o nome de exibição, informe-o.");
      return;
    }
    setIsLoading(true);
    try {
      await updateUser({ name });
      Alert.alert("Sucesso", "Nome atualizado com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar o nome.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateLogin = async () => {
    if (!login.trim()) {
      Alert.alert("Erro", "Antes de atualizar o nome de usuário, informe-o.");
      return;
    }
    setIsLoading(true);
    try {
      await updateUser({ login });
      Alert.alert("Sucesso", "Nome de usuário atualizado com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar o nome de usuário.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdatePassword = async () => {
    if (!currentPassword) {
      Alert.alert("Erro", "Por favor, informe sua senha atual.");
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }
    setIsLoading(true);
    try {
      await updateUser({
        current_password: currentPassword,
        password: newPassword,
        password_confirmation: confirmPassword,
      });
      Alert.alert("Sucesso", "Senha atualizada com sucesso!");
      setNewPassword("");
      setConfirmPassword("");
      setCurrentPassword("");
      setIsPasswordModalVisible(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar a senha.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!deletePassword) {
      Alert.alert("Erro", "Por favor, informe sua senha para confirmar.");
      return;
    }
    setIsLoading(true);
    try {
      await api.delete(`/users/${user.login}`, {
        data: { password: deletePassword },
      });
      signOut();
      Alert.alert("Sucesso", "Sua conta foi excluída com sucesso.");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível excluir a conta.");
    } finally {
      setIsLoading(false);
      setIsDeleteModalVisible(false);
    }
  };

  const openPasswordModal = () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert(
        "Erro",
        "Antes de atualizar a senha, informe a nova senha e a confirmação."
      );
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }
    setIsPasswordModalVisible(true);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <Header>Configurações</Header>

        <FormContainer>
          <InputContainer>
            <HeaderForm>Atualizar Nome</HeaderForm>
            <InputLabel>Nome:</InputLabel>
            <TextInputStyled
              value={name}
              onChangeText={setName}
              placeholder="Digite o novo nome..."
            />
            <Button onPress={handleUpdateName} disabled={isLoading}>
              {isLoading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <ButtonText>Atualizar Nome</ButtonText>
              )}
            </Button>
          </InputContainer>

          <Divider />

          <InputContainer>
            <HeaderForm>Atualizar Login/Apelido</HeaderForm>
            <InputLabel>Login/Apelido:</InputLabel>
            <TextInputStyled
              value={login}
              onChangeText={setLogin}
              placeholder="Digite o novo nome apelido..."
            />
            <Button onPress={handleUpdateLogin} disabled={isLoading}>
              {isLoading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <ButtonText>Atualizar Nome de Usuário</ButtonText>
              )}
            </Button>
          </InputContainer>

          <Divider />

          <InputContainer>
            <HeaderForm>Atualizar Senha</HeaderForm>
            <InputLabel>Nova senha:</InputLabel>
            <TextInputStyled
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              placeholder="Digite a nova senha"
            />
            <InputLabel>Confirmar nova senha:</InputLabel>
            <TextInputStyled
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              placeholder="Confirme a nova senha"
            />
            <Button
              bgColor="#E67E22"
              onPress={openPasswordModal}
              disabled={isLoading}
            >
              <ButtonText>Atualizar Senha</ButtonText>
            </Button>
          </InputContainer>

          <Divider />

          <HeaderForm>Outras Ações</HeaderForm>

          <Button
            bgColor="#E74C3C"
            onPress={() => setIsDeleteModalVisible(true)}
          >
            <ButtonText>Excluir Conta</ButtonText>
          </Button>
        </FormContainer>
      </Container>

      {/* Modal para confirmação de exclusão */}
      <Modal visible={isDeleteModalVisible} transparent>
        <ModalContainer>
          <ModalContent>
            <ModalText>
              Digite sua senha para confirmar a exclusão da conta:
            </ModalText>
            <ModalTextInput
              secureTextEntry
              value={deletePassword}
              onChangeText={setDeletePassword}
              placeholder="Digite sua senha"
            />
            <ModalButton
              bgColor="#E74C3C"
              onPress={handleDeleteAccount}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <ModalButtonText>Excluir conta</ModalButtonText>
              )}
            </ModalButton>
            <ModalButton onPress={() => setIsDeleteModalVisible(false)}>
              <ModalButtonText>Cancelar</ModalButtonText>
            </ModalButton>
          </ModalContent>
        </ModalContainer>
      </Modal>

      {/* Modal para atualização de senha */}
      <Modal visible={isPasswordModalVisible} transparent>
        <ModalContainer>
          <ModalContent>
            <ModalText>
              Digite sua senha atual para confirmar a atualização:
            </ModalText>
            <ModalTextInput
              secureTextEntry
              value={currentPassword}
              onChangeText={setCurrentPassword}
              placeholder="Digite sua senha atual"
            />
            <ModalButton
              bgColor="#E67E22"
              onPress={handleUpdatePassword}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <ModalButtonText>Atualizar Senha</ModalButtonText>
              )}
            </ModalButton>
            <ModalButton onPress={() => setIsPasswordModalVisible(false)}>
              <ModalButtonText>Cancelar</ModalButtonText>
            </ModalButton>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </ScrollView>
  );
};

export default Settings;
