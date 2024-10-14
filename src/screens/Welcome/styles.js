import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ContainerLogo = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: #2f80ed;
`;

export const TitleLogo = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
`;

export const ContainerForm = styled.View`
  flex: 0.8;
  background-color: #ffffff;
  padding: 20px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-top: -20px;
`;

export const TitleForm = styled.Text`
  font-size: 22px;
  color: #101010;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const TextForm = styled.Text`
  font-size: 16px;
  color: #4f4f4f;
  margin-bottom: 24px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #2f80ed;
  border-radius: 50px;
  padding-vertical: 14px;
  width: 60%;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
`;
