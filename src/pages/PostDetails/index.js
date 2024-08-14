import React, { useState, useEffect } from "react";
import {
	Image,
	Keyboard,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const PostDetails = ({ route, navigation }) => {
	const {
		idUserName,
		nameUser,
		contentPostPapacapim,
		imageOfPostUri,
		imageOfUserProfileUri,
		timestampText,
		likesCount: initialLikesCount,
		commentsCount,
		showCommentInput,
	} = route.params;

	const [isLiked, setIsLiked] = useState(false);
	const [likesCount, setLikesCount] = useState(initialLikesCount);
	const [showCommentField, setShowCommentField] = useState(showCommentInput);
	const [comment, setComment] = useState("");
	const [commentInputHeight, setCommentInputHeight] = useState(40);

	useEffect(() => {
		const hideKeyboard = Keyboard.addListener("keyboardDidHide", () => {
			setShowCommentField(false);
		});

		return () => {
			hideKeyboard.remove();
		};
	}, []);

	const handleBackPress = () => {
		navigation.goBack();
	};

	const handleLikePress = () => {
		setIsLiked(!isLiked);
		// setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
	};

	const handleCommentPress = () => {
		setShowCommentField(true);
	};

	const handleCommentChange = (text) => {
		setComment(text);
	};

	const handleContentSizeChange = (event) => {
		setCommentInputHeight(Math.max(40, event.nativeEvent.contentSize.height));
	};

	const handleCommentSubmit = () => {
		// Implementar lógica de envio do comentário
		console.log("Comentário enviado:", comment);
		setComment("");
		setShowCommentField(false);
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

			<View style={styles.actionsContainer}>
				<ActionIcon
					iconName="message-reply-outline"
					iconColor="gray"
					actionCount={commentsCount}
					onPress={handleCommentPress}
				/>
				<ActionIcon
					iconName="repeat"
					iconColor="gray"
					actionCount={commentsCount}
				/>
				<ActionIcon
					iconName={isLiked ? "heart" : "heart-outline"}
					iconColor={isLiked ? "red" : "gray"}
					actionCount={likesCount}
					onPress={handleLikePress}
				/>
				<MaterialCommunityIcons
					name="share-variant-outline"
					color="gray"
					size={20}
				/>
			</View>

			{showCommentField && (
				<View style={styles.commentInputContainer}>
					<TextInput
						style={[styles.commentInput, { height: commentInputHeight }]}
						placeholder="Escreva um comentário..."
						placeholderTextColor="gray"
						value={comment}
						onChangeText={handleCommentChange}
						multiline
						onContentSizeChange={handleContentSizeChange}
						autoFocus
					/>
					<TouchableOpacity
						onPress={handleCommentSubmit}
						style={styles.commentSubmitButton}
					>
						<Text style={styles.commentSubmitButtonText}>Enviar</Text>
					</TouchableOpacity>
				</View>
			)}

			<View style={styles.separator} />
		</ScrollView>
	);
};

const ActionIcon = ({ iconName, iconColor, actionCount, onPress }) => (
	<TouchableOpacity onPress={onPress} style={styles.iconWrapper}>
		<MaterialCommunityIcons name={iconName} color={iconColor} size={20} />
		<Text style={styles.countText}>{actionCount}</Text>
	</TouchableOpacity>
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
	commentInputContainer: {
		flexDirection: "row",
		alignItems: "flex-end", // Alterado para alinhar na parte inferior
		marginTop: 10,
		marginBottom: 15,
	},
	commentInput: {
		flex: 1,
		minHeight: 40,
		maxHeight: 120, // Define uma altura máxima
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 20,
		paddingHorizontal: 10,
		paddingTop: 10, // Adicionado para melhor alinhamento do texto
		paddingBottom: 10, // Adicionado para melhor alinhamento do texto
		color: "white",
		textAlignVertical: "top", // Garante que o texto comece do topo
	},
	commentSubmitButton: {
		marginLeft: 10,
		padding: 10,
		backgroundColor: "#2F80ED",
		borderRadius: 20,
		alignSelf: "flex-end", // Alinha o botão na parte inferior
	},
	commentSubmitButtonText: {
		color: "white",
		fontWeight: "bold",
	},
});
