import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
	Alert,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import TextInputField from "../../components/TextInputField";

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
					<TextInputField label="Nome:" placeholder="Digite seu nome real:" />
					<TextInputField
						label="Apelido para seu Papacapim:"
						placeholder="Defina apelido:"
					/>
					<Text style={styles.info}>
						Esse será apelido, o @, de com outras pessoas veem seu Papacapim,
						então use algo legal e único!
					</Text>
					<TextInputField label="E-mail:" placeholder="Digite seu e-mail:" />
					<Text style={styles.info}>
						Digite um e-mail válido. Formato: papacapim@papacapim.com
					</Text>
					<TextInputField
						label="Data de Nascimento:"
						placeholder="Digite sua data de nascimento:"
					/>
					<Text style={styles.info}>
						Digite uma data válida. Formato: dd/mm/aaaa
					</Text>
					<TextInputField
						label="Senha:"
						placeholder="Defina sua senha"
						secureTextEntry={true}
					/>
					<Text style={styles.info}>
						Sua senha precisa ter no mínimo 6 caracteres. Recomendamos usar uma
						senha com letras maiúsculas, minúsculas, números e caracteres
						especiais.
					</Text>
					<TextInputField
						label="Confirme sua senha:"
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
});

export default Register;
