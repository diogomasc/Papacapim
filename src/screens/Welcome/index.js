import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
	Container,
	ContainerLogo,
	TitleLogo,
	ContainerForm,
	TitleForm,
	TextForm,
	Button,
	ButtonText,
} from "./styles";
import { Feather } from "@expo/vector-icons";

const WelcomeScreen = () => {
	const navigation = useNavigation();

	return (
		<Container>
			<ContainerLogo>
				<Feather name="twitter" size={70} color="#fff" />
				<TitleLogo>Papacapim</TitleLogo>
			</ContainerLogo>
			<ContainerForm>
				<TitleForm>
					Explore, poste, curta e faça conexões! Descubra novas possibilidades
					com nosso app.
				</TitleForm>
				<TextForm>Faça o login para começar!</TextForm>
				<Button onPress={() => navigation.navigate("SignIn")}>
					<ButtonText>Acessar</ButtonText>
				</Button>
			</ContainerForm>
		</Container>
	);
};

export default WelcomeScreen;
