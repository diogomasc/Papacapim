import React from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; // Importando os ícones

const PostDetails = ({ route, navigation }) => {
	const {
		idUserName,
		nameUser,
		contentPostPapacapim,
		imageOfPostUri,
		imageOfUserProfileUri,
		timestampText,
		likesCount,
		commentsCount,
	} = route.params;

	const handleBackPress = () => {
		navigation.goBack();
	};

	return (
		<ScrollView style={styles.container}>
			<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
				<MaterialCommunityIcons name="arrow-left" size={20} color="#2F80ED" />
				<Text style={styles.backButtonText}>Voltar</Text>
			</TouchableOpacity>

			<View style={styles.header}>
				<Image
					style={styles.profilePicture}
					source={{ uri: imageOfUserProfileUri }}
				/>
				<View style={styles.userInfo}>
					<Text style={styles.userName}>{nameUser}</Text>
					<Text style={styles.userHandle}>@{idUserName}</Text>
					<Text style={styles.timestampText}>{timestampText}</Text>
				</View>
			</View>

			<Text style={styles.content}>{contentPostPapacapim}</Text>

			{imageOfPostUri && (
				<Image style={styles.postImage} source={{ uri: imageOfPostUri }} />
			)}

			{/* Botões de Ações */}
			<View style={styles.actionsContainer}>
				<ActionIcon
					iconName="message-reply-outline"
					iconColor="gray"
					actionCount={commentsCount}
				/>
				<ActionIcon
					iconName="repeat"
					iconColor="gray"
					actionCount={commentsCount}
				/>
				<ActionIcon
					iconName="heart-outline"
					iconColor="gray"
					actionCount={likesCount}
				/>
				<MaterialCommunityIcons
					name="share-variant-outline"
					color="gray"
					size={20}
				/>
			</View>

			{/* Linha Separadora */}
			<View style={styles.separator} />

			{/* Renderizar os comentários aqui ou outras informações adicionais */}
		</ScrollView>
	);
};

const ActionIcon = ({ iconName, iconColor, actionCount }) => (
	<View style={styles.iconWrapper}>
		<MaterialCommunityIcons name={iconName} color={iconColor} size={20} />
		<Text style={styles.countText}>{actionCount}</Text>
	</View>
);

export default PostDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: "#1E1E1E",
	},
	backButton: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	backButtonText: {
		color: "#2F80ED",
		fontSize: 16,
		marginLeft: 5,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	profilePicture: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 10,
	},
	userInfo: {
		flex: 1,
		flexDirection: "row",
	},
	userName: {
		fontWeight: "bold",
		color: "white",
		marginHorizontal: 5,
	},
	userHandle: {
		color: "gray",
		marginLeft: 5,
	},
	timestampText: {
		color: "gray",
		marginLeft: 5,
	},
	content: {
		color: "white",
		marginBottom: 15,
	},
	postImage: {
		width: "100%",
		height: 200,
		borderRadius: 10,
		marginBottom: 20,
	},
	actionsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginVertical: 15,
	},
	iconWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
	countText: {
		color: "gray",
		fontSize: 16,
		marginLeft: 5,
	},
	separator: {
		height: 1,
		backgroundColor: "#2F80ED",
		marginVertical: 10,
	},
});
