// NewPostModal.js
import React from "react";
import {
	Image,
	Modal,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DummyData } from "../../DummyData/DummyData";

const NewPostModal = ({ isVisible, onClose, onPublish, onAttachImage }) => {
	const userProfileImageUri = DummyData[0]?.imageOfUserProfileUri;

	return (
		<Modal
			visible={isVisible}
			transparent={true}
			animationType="slide"
			onRequestClose={onClose}
		>
			<View style={styles.modalContainer}>
				<View style={styles.modalContent}>
					<View style={styles.modalHeader}>
						<TouchableOpacity onPress={onClose} style={styles.backButton}>
							<FontAwesome5 name="arrow-left" size={20} color="#2F80ED" />
							<Text style={styles.backButtonText}>Voltar</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={onPublish}>
							<FontAwesome5 name="paper-plane" size={20} color="#2F80ED" />
						</TouchableOpacity>
					</View>
					<View style={styles.postContent}>
						<Image
							source={{ uri: userProfileImageUri }}
							style={styles.userImage}
						/>
						<TextInput
							style={styles.inputPostMessage}
							multiline
							placeholder="O que está acontecendo?"
							placeholderTextColor="#6B6572"
						/>
					</View>
					<TouchableOpacity style={styles.attachButton} onPress={onAttachImage}>
						<FontAwesome5 name="image" size={20} color="#2F80ED" />
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		justifyContent: "flex-start",
	},
	modalContent: {
		backgroundColor: "#101010",
		width: "100%",
		height: "100%",
		padding: 20,
	},
	modalHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
	},
	backButton: {
		flexDirection: "row",
		alignItems: "center",
	},
	backButtonText: {
		color: "#2F80ED",
		marginLeft: 10,
		fontSize: 16,
	},
	postContent: {
		flexDirection: "row",
		alignItems: "flex-start",
	},
	userImage: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginRight: 10,
	},
	inputPostMessage: {
		flex: 1,
		color: "#FFFFFF",
		fontSize: 16,
		textAlignVertical: "top",
	},
	attachButton: {
		position: "absolute",
		right: 20,
		bottom: 20,
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: "#1E1E1E",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default NewPostModal;
