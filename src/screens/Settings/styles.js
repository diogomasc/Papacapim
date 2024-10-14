import styled from "styled-components/native";

// Container principal
export const Container = styled.View`
  flex-grow: 1;
  background-color: #fff;
`;

// Contêiner do formulário
export const FormContainer = styled.View`
  padding: 16px;
`;

// Cabeçalho
export const Header = styled.Text`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  margin-left: 12px;
  color: #333333;
`;

export const HeaderForm = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #333333;
`;

// Contêiner de entrada
export const InputContainer = styled.View`
  margin-bottom: 12px;
`;

// Rótulo de entrada
export const InputLabel = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #555555;
  margin-top: 4px;
`;

// Botão
export const Button = styled.TouchableOpacity`
  height: 45px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  background-color: ${(props) => props.bgColor || "#2F80ED"};
  margin-top: 12px;
`;

// Texto do botão
export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
`;

// Divisor
export const Divider = styled.View`
  height: 1px;
  background-color: #dddddd;
  margin-bottom: 12px;
`;

// Entrada de texto estilizada
export const TextInputStyled = styled.TextInput`
  height: 40px;
  border-color: #dddddd;
  border-width: 1px;
  border-radius: 8px;
  padding-horizontal: 8px;
  background-color: #ffffff;
  font-size: 14px;
  color: #333333;
  margin-top: 8px;
`;

// Modal de confirmação
export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

// Conteúdo do modal
export const ModalContent = styled.View`
  width: 300px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
`;

// Estilo para o texto do modal
export const ModalText = styled.Text`
  font-size: 16px;
  color: #333333;
  margin-bottom: 10px;
`;

// Estilo para o campo de entrada no modal
export const ModalTextInput = styled.TextInput`
  height: 40px;
  border-color: #dddddd;
  border-width: 1px;
  border-radius: 8px;
  padding-horizontal: 8px;
  background-color: #ffffff;
  font-size: 14px;
  color: #333333;
  margin-bottom: 10px;
`;

// Botão do modal
export const ModalButton = styled.TouchableOpacity`
  height: 45px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor || "#2F80ED"};
  padding: 10px;
  margin-top: 10px;
`;

// Texto do botão do modal
export const ModalButtonText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
`;
