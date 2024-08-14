import React from "react";
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DummyUserAuth } from "../../DummyData/DummyUserAuth";

const Profile = ({ navigation }) => {
	const user = DummyUserAuth[0] || {};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.backButton}
				onPress={() => navigation.goBack()}
			>
				<FontAwesome5 name="arrow-left" size={16} color="#2F80ED" />
				<Text style={styles.backButtonText}>Voltar</Text>
			</TouchableOpacity>
			<ScrollView contentContainerStyle={styles.content}>
				<View style={styles.profileHeader}>
					{user.imageOfUserProfileUri ? (
						<Image
							style={styles.profileImage}
							source={{ uri: user.imageOfUserProfileUri }}
						/>
					) : (
						<View style={styles.profileImageFallback} />
					)}
					<Text style={styles.nameUser}>
						{user.nameUser || "Nome do Usuário"}
					</Text>
					<Text style={styles.idUserName}>
						@{user.idUserName || "idUserName"}
					</Text>

					<View style={styles.infoItem}>
						<Text style={styles.biographyText}>
							{user.biography || "Biografia"}
						</Text>
					</View>
				</View>
				<View style={styles.infoContainer}>
					<View style={styles.infoItem}>
						<FontAwesome5 name="birthday-cake" size={16} color="#FFFFFF" />
						<Text style={styles.infoText}>
							{user.dateOfBirth || "Data de Nascimento"}
						</Text>
					</View>
					<View style={styles.infoItem}>
						<FontAwesome5 name="map-marker-alt" size={16} color="#FFFFFF" />
						<Text style={styles.infoText}>
							{user.Address?.[0]?.country
								? `${user.Address[0].country}, ${user.Address[0].city || ""}, ${user.Address[0].state || ""}`
								: "Endereço"}
						</Text>
					</View>
					<View style={styles.infoItem}>
						<FontAwesome5 name="link" size={16} color="#FFFFFF" />
						<Text style={styles.infoText}>
							{user.externalLink || "Link Externo"}
						</Text>
					</View>
					<View style={styles.followContainer}>
						<Text style={styles.followText}>
							{user.following || 0} Seguindo
						</Text>
						<Text style={styles.followText}>
							{user.followers || 0} Seguidores
						</Text>
					</View>
				</View>
				<View style={styles.divider} />
				<View style={styles.postsContainer}>
					<Text style={styles.postsTitle}>Posts</Text>
					{/* Adicione aqui a lógica para listar os posts do usuário */}
					<Text style={styles.noPostsText}>Nenhum post disponível.</Text>
				</View>
			</ScrollView>
		</View>
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
		padding: 15,
		backgroundColor: "#101010",
		borderBottomWidth: 1,
		borderBottomColor: "#6B6572",
	},
	backButtonText: {
		color: "#2F80ED",
		fontSize: 16,
		marginLeft: 10,
	},
	content: {
		flexGrow: 1,
		paddingHorizontal: 16,
		paddingVertical: 10,
	},
	profileHeader: {
		alignItems: "center",
	},
	profileImage: {
		width: 80,
		height: 80,
		borderRadius: 50,
		marginTop: 10,
	},
	profileImageFallback: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: "#6B6572",
		marginBottom: 10,
	},
	nameUser: {
		color: "#FFFFFF",
		fontSize: 24,
		fontWeight: "bold",
	},
	idUserName: {
		color: "#6B6572",
		fontSize: 16,
		marginBottom: 10,
	},
	followContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "60%",
		// marginVertical: 10,
		alignSelf: "center",
	},
	followText: {
		color: "#6B6572",
		fontSize: 14,
	},
	infoContainer: {
		// paddingTop: 10,
	},
	infoItem: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	biographyText: {
		color: "#FFFFFF",
		fontSize: 16,
		marginLeft: 10,
		textAlign: "center",
	},
	infoText: {
		color: "#FFFFFF",
		fontSize: 14,
		marginLeft: 10,
	},
	divider: {
		height: 1,
		backgroundColor: "#6B6572",
		marginVertical: 16,
	},
	postsContainer: {
		padding: 16,
	},
	postsTitle: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	noPostsText: {
		color: "#6B6572",
		fontSize: 16,
		textAlign: "center",
	},
});

export default Profile;
