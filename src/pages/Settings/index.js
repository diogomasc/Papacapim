import { useNavigation } from "@react-navigation/native"; // Importação da navegação
import React, { useState } from "react";
import {
	Image, // Importar Image
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DummyUserAuth } from "../../DummyData/DummyUserAuth";

const Settings = () => {
	const navigation = useNavigation(); // Inicialização da navegação
	const [userData, setUserData] = useState(DummyUserAuth[0]);
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleUpdate = () => {
		// Implementar lógica para atualizar dados
		console.log("Dados atualizados:", userData);
	};

	const handleChangePassword = () => {
		// Implementar lógica para mudar senha
		console.log("Senha alterada");
	};

	const handleDeleteAccount = () => {
		// Implementar lógica para excluir conta
		console.log("Conta excluída");
	};

	return (
		<ScrollView style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.goBack()}
				style={styles.backButton}
			>
				<FontAwesome5 name="arrow-left" size={20} color="#2F80ED" />
				<Text style={styles.backButtonText}>Voltar</Text>
			</TouchableOpacity>

			{/* Exibindo imagem do perfil no topo */}
			<View style={styles.profileContainer}>
				<Image
					source={{ uri: userData.imageOfUserProfileUri }}
					style={styles.profileImage}
				/>
				<Text style={styles.userName}>{userData.nameUser}</Text>
			</View>

			{/* Dados do usuário */}
			<View style={styles.containerForm}>
				<Text style={styles.message}>Dados do Usuário</Text>

				{/* Nome de Usuário */}
				<Text style={styles.title}>Nome de Usuário:</Text>
				<TextInput
					style={[styles.input, styles.disabledInput]}
					placeholder="Nome de Usuário"
					value={userData.idUserName}
					editable={false}
				/>

				{/* Email */}
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={[styles.input, styles.disabledInput]}
					placeholder="Email"
					value={userData.email}
					editable={false}
				/>

				{/* Nome */}
				<Text style={styles.title}>Nome:</Text>
				<TextInput
					style={styles.input}
					placeholder="Nome"
					placeholderTextColor="#6B6572"
					value={userData.nameUser}
					onChangeText={(text) => setUserData({ ...userData, nameUser: text })}
				/>

				{/* Data de Nascimento */}
				<Text style={styles.title}>Data de Nascimento:</Text>
				<TextInput
					style={styles.input}
					placeholder="Data de Nascimento"
					placeholderTextColor="#6B6572"
					value={userData.dateOfBirth}
					onChangeText={(text) =>
						setUserData({ ...userData, dateOfBirth: text })
					}
				/>

				{/* Biografia */}
				<Text style={styles.title}>Biografia:</Text>
				<TextInput
					style={[styles.input, styles.textArea]}
					placeholder="Biografia"
					placeholderTextColor="#6B6572"
					value={userData.biography}
					onChangeText={(text) => setUserData({ ...userData, biography: text })}
					multiline
					numberOfLines={4}
				/>

				{/* Imagem do Perfil */}
				<Text style={styles.title}>Imagem do Perfil:</Text>
				<TextInput
					style={styles.input}
					placeholder="URL da Imagem do Perfil"
					placeholderTextColor="#6B6572"
					value={userData.imageOfUserProfileUri}
					onChangeText={(text) =>
						setUserData({ ...userData, imageOfUserProfileUri: text })
					}
				/>

				{/* País */}
				<Text style={styles.title}>País:</Text>
				<TextInput
					style={styles.input}
					placeholder="País"
					placeholderTextColor="#6B6572"
					value={userData.Address[0]?.country || ""}
					onChangeText={(text) =>
						setUserData({
							...userData,
							Address: [{ ...userData.Address[0], country: text }],
						})
					}
				/>

				{/* Cidade */}
				<Text style={styles.title}>Cidade:</Text>
				<TextInput
					style={styles.input}
					placeholder="Cidade"
					placeholderTextColor="#6B6572"
					value={userData.Address[0]?.city || ""}
					onChangeText={(text) =>
						setUserData({
							...userData,
							Address: [{ ...userData.Address[0], city: text }],
						})
					}
				/>

				{/* Estado */}
				<Text style={styles.title}>Estado:</Text>
				<TextInput
					style={styles.input}
					placeholder="Estado"
					placeholderTextColor="#6B6572"
					value={userData.Address[0]?.state || ""}
					onChangeText={(text) =>
						setUserData({
							...userData,
							Address: [{ ...userData.Address[0], state: text }],
						})
					}
				/>

				{/* Website */}
				<Text style={styles.title}>Website:</Text>
				<TextInput
					style={styles.input}
					placeholder="Website"
					placeholderTextColor="#6B6572"
					value={userData.externalLink}
					onChangeText={(text) =>
						setUserData({ ...userData, externalLink: text })
					}
				/>

				{/* Botão Atualizar Dados */}
				<TouchableOpacity
					style={[styles.button, { backgroundColor: "#2F80ED" }]}
					onPress={handleUpdate}
				>
					<Text style={styles.buttonText}>Atualizar Dados</Text>
				</TouchableOpacity>

				{/* Divider */}
				<View style={styles.divider} />

				{/* Editar Senha */}
				<Text style={styles.message}>Editar Senha</Text>
				<Text style={styles.title}>Senha Atual:</Text>
				<TextInput
					style={styles.input}
					placeholder="Senha Atual"
					placeholderTextColor="#6B6572"
					secureTextEntry
					value={currentPassword}
					onChangeText={setCurrentPassword}
				/>
				<Text style={styles.title}>Nova Senha:</Text>
				<TextInput
					style={styles.input}
					placeholder="Nova Senha"
					placeholderTextColor="#6B6572"
					secureTextEntry
					value={newPassword}
					onChangeText={setNewPassword}
				/>
				<Text style={styles.title}>Confirmação da Nova Senha:</Text>
				<TextInput
					style={styles.input}
					placeholder="Confirme Nova Senha"
					placeholderTextColor="#6B6572"
					secureTextEntry
					value={confirmPassword}
					onChangeText={setConfirmPassword}
				/>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: "#E2B93B" }]}
					onPress={handleChangePassword}
				>
					<Text style={styles.buttonText}>Alterar Senha</Text>
				</TouchableOpacity>

				{/* Divider */}
				<View style={styles.divider} />

				{/* Excluir Conta */}
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
	message: {
		fontSize: 22,
		fontWeight: "bold",
		color: "#FFFFFF",
		marginTop: 20,
	},
	title: {
		fontSize: 16,
		marginTop: 28,
		marginBottom: 12,
		color: "#FFFFFF",
	},
	input: {
		borderBottomWidth: 1,
		height: 40,
		marginBottom: 12,
		fontSize: 14,
		color: "#FFFFFF",
	},
	disabledInput: {
		backgroundColor: "#2F2F2F",
	},
	textArea: {
		textAlignVertical: "top",
		height: 80,
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
	divider: {
		height: 1,
		backgroundColor: "#6B6572",
		marginVertical: 20,
	},
});

export default Settings;
