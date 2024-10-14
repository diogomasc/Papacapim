import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	background-color: #2f80ed;
`;

export const ContainerHeader = styled.View`
	margin-top: 14%;
	margin-bottom: 8%;
	padding-left: 5%;
`;

export const Message = styled.Text`
	font-size: 26px;
	font-weight: bold;
	color: #ffffff;
`;

export const ContainerForm = styled.View`
	flex: 1;
	background-color: #ffffff;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	padding-left: 5%;
	padding-right: 5%;
`;

export const Info = styled.Text`
	font-size: 12px;
	color: #eb5757;
`;

export const Button = styled.View`
	background-color: #2f80ed;
	width: 100%;
	border-radius: 16px;
	padding-vertical: 14px;
	margin-top: 14px;
	margin-bottom: 14px;
	justify-content: center;
	align-items: center;
`;

export const ButtonText = styled.Text`
	color: #ffffff;
	font-size: 14px;
	font-weight: bold;
`;
