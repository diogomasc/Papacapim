import React from "react";
import {
	Image,
	Linking,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DummyData, DummyUserAuth } from "../../DummyData/DummyData";
import styles from "./styles";

const Profile = ({ navigation }) => {
	const user = DummyUserAuth[0] || {};
	const isCurrentUser = true;
	const isFollowing = true;

	const handlePressLink = (url) => {
		if (url) {
			Linking.openURL(url).catch((err) =>
				console.error("Erro ao abrir URL:", err),
			);
		}
	};

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.content}>
				{/* Banner Image */}
				<View style={styles.bannerContainer}>
					<Image
						style={styles.bannerImage}
						source={{
							uri:
								user.bannerImageUri || "https://example.com/default-banner.jpg",
						}}
					/>
					<TouchableOpacity style={styles.profileImageContainer}>
						<Image
							style={styles.profileImage}
							source={{
								uri:
									user.imageOfUserProfileUri ||
									"https://example.com/default-profile.jpg",
							}}
						/>
					</TouchableOpacity>
				</View>

				{/* Back Button */}
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.goBack()}
				>
					<FontAwesome5 name="arrow-left" size={16} color="#FFFFFF" />
					<Text style={styles.backButtonText}>Voltar</Text>
				</TouchableOpacity>

				{/* Follow / Edit Button */}
				{isCurrentUser ? (
					<TouchableOpacity
						style={styles.editButton}
						onPress={() => navigation.navigate("Settings")}
					>
						<Text style={styles.editButtonText}>Editar</Text>
					</TouchableOpacity>
				) : isFollowing ? (
					<TouchableOpacity style={styles.followButton}>
						<Text style={styles.followButtonText}>Deixar de Seguir</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity style={styles.followButton}>
						<Text style={styles.followButtonText}>Seguir</Text>
					</TouchableOpacity>
				)}

				{/* User Info */}
				<View style={styles.infoContainer}>
					{user.nameUser && (
						<Text style={styles.nameUser}>
							{user.nameUser || "Nome do Usuário"}
						</Text>
					)}
					{user.idUserName && (
						<Text style={styles.idUserName}>
							@{user.idUserName || "idUserName"}
						</Text>
					)}
					{user.biography && (
						<Text style={styles.biographyText}>
							{user.biography || "Biografia"}
						</Text>
					)}
					{user.Address?.[0]?.country && (
						<Text style={styles.infoText}>
							<FontAwesome5
								style={styles.iconInfoContainer}
								name="map-marker-alt"
								size={16}
								color="#FFFFFF"
							/>
							{user.Address[0].country}
							{user.Address[0].city && `, ${user.Address[0].city}`}
							{user.Address[0].state && `, ${user.Address[0].state}`}
						</Text>
					)}
					{user.webSite && (
						<TouchableOpacity onPress={() => handlePressLink(user.webSite)}>
							<Text style={styles.infoText}>
								<FontAwesome5
									style={styles.iconInfoContainer}
									name="link"
									size={16}
									color="#FFFFFF"
								/>
								{user.webSite || "Web Site"}
							</Text>
						</TouchableOpacity>
					)}
					{user.dateOfBirth && (
						<Text style={styles.infoText}>
							<FontAwesome5
								style={styles.iconInfoContainer}
								name="birthday-cake"
								size={16}
								color="#FFFFFF"
							/>
							{user.dateOfBirth || "Data de Nascimento"}
						</Text>
					)}
					{(user.following || user.followers) && (
						<View style={styles.followContainer}>
							{user.following > 0 && (
								<Text style={styles.followText}>
									{user.following || 0} Seguindo
								</Text>
							)}
							{user.followers > 0 && (
								<Text style={styles.followText}>
									{user.followers || 0} Seguidores
								</Text>
							)}
						</View>
					)}
				</View>

				{/* Posts Section */}
				<View style={styles.divider} />
				<View style={styles.postsContainer}>
				<Text style={styles.postsTitle}>Posts</Text>
				{user.post && user.post.length > 0 ? (
					user.post.map((postId) => {
					const post = DummyData.find((p) => p.id === postId);
					return (
						<View key={post.id} style={styles.post}>
						<Text style={styles.postContent}>{post.contentPost}</Text>
						{post.imageOfPostUri && (
							<Image
							style={styles.postImage}
							source={{ uri: post.imageOfPostUri }}
							/>
						)}
						<Text style={styles.postStats}>
							{post.likesCount} Likes | {post.commentsCount} Comentários
						</Text>
						</View>
					);
					})
				) : (
					<Text style={styles.noPostsText}>Nenhum post disponível.</Text>
				)}
				</View>

			</ScrollView>
		</View>
	);
};

export default Profile;
