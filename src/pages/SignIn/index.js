import React from "react";
import {
	Text,
	TextInput,
	View,
	Alert,
	StyleSheet,
	Image,
	TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

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
				<Text style={styles.title}>E-mail:</Text>
				<TextInput style={styles.input} placeholder="Digite seu e-mail" />

				<Text style={styles.title}>Senha:</Text>
				<TextInput style={styles.input} placeholder="Digite sua senha" />

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

export default SignIn;

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

	title: {
		fontSize: 16,
		marginTop: 28,
		marginBottom: 12,
	},

	input: {
		borderBottomWidth: 1,
		heigth: 40,
		marginBottom: 12,
		fontSize: 14,
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
