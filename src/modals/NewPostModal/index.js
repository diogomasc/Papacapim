import React, { useState } from "react";
import {
	Image,
	Modal,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DummyData, DummyUserAuth } from "../../DummyData/DummyData";
import styles from "./styles";

const NewPostModal = ({ isVisible, onClose, onPublish, onAttachImage }) => {
	const [postMessage, setPostMessage] = useState("");
	const userProfileImageUri =
		DummyUserAuth[0]?.imageOfUserProfileUri ||
		"../../assets/DefaultUserIcon.png";

	const handlePublish = () => {
		if (postMessage.trim().length > 0) {
			onPublish(postMessage);
			setPostMessage("");
		}
	};

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
						<TouchableOpacity
							onPress={handlePublish}
							disabled={postMessage.trim().length === 0}
						>
							<FontAwesome5
								name="paper-plane"
								size={20}
								color={postMessage.trim().length > 0 ? "#2F80ED" : "#9E9E9E"}
							/>
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
							value={postMessage}
							onChangeText={setPostMessage}
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

export default NewPostModal;
