import React from "react";
import {
	Text,
	TextInput,
	View,
	Alert,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Animatable.View
				animatable="fadeInLeft"
				delay={1200}
				style={styles.containerHeader}
			>
				<Text style={styles.message}>Cadastre-se</Text>
			</Animatable.View>

			<Animatable.View
				animatable="fadeInUp"
				delay={2200}
				style={styles.containerForm}
			>
				<ScrollView>
					<Text style={styles.title}>Nome:</Text>
					<TextInput style={styles.input} placeholder="Digite seu nome real:" />
					<Text style={styles.title}>Apelido para seu Papacapim:</Text>
					<TextInput style={styles.input} placeholder="Defina apelido:" />
					<Text style={styles.info}>
						Esse será apelido, o @, de com outras pessoas veem seu Papacapim,
						então use algo legal e único!
					</Text>
					<Text style={styles.title}>E-mail:</Text>
					<TextInput style={styles.input} placeholder="Digite seu e-mail:" />
					<Text style={styles.info}>
						Digite um e-mail válido. Formato: papacapim@papacapim.com
					</Text>
					<Text style={styles.title}>Data de Nascimento:</Text>
					<TextInput
						style={styles.input}
						placeholder="Digite sua data de nascimento:"
					/>
					<Text style={styles.info}>
						Digite uma data válida. Formato: dd/mm/aaaa
					</Text>
					<Text style={styles.title}>Senha:</Text>
					<TextInput
						style={styles.input}
						placeholder="Defina sua senha"
						secureTextEntry={true}
					/>
					<Text style={styles.info}>
						Sua senha precisa ter no mínimo 6 caracteres. Recomendamos usar uma
						senha com letras maiúsculas, minúsculas, números e caracteres
						especiais.
					</Text>
					<Text style={styles.title}>Confirme sua senha:</Text>
					<TextInput
						style={styles.input}
						placeholder="Confirme sua senha"
						secureTextEntry={true}
					/>

					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
							setTimeout(() => {
								navigation.navigate("AppTabs");
							}, 1000);
						}}
					>
						<Text style={styles.buttonText}>Cadastrar</Text>
					</TouchableOpacity>
				</ScrollView>
			</Animatable.View>
		</View>
	);
};

export default Register;

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
		height: 40,
		marginBottom: 12,
		fontSize: 14,
	},

	info: {
		fontSize: 12,
		color: "#EB5757",
	},

	button: {
		backgroundColor: "#101010",
		width: "100%",
		borderRadius: 16,
		paddingVertical: 14,
		marginTop: 14,
		marginBottom: 14,
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
