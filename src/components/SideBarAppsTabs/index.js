import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
	Animated,
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DummyUserAuth } from "../../DummyData/DummyUserAuth";

const { width } = Dimensions.get("window");

const SideBarAppsTabs = ({ isVisible, onClose, translateX }) => {
	const navigation = useNavigation();

	const user = DummyUserAuth[0];

	return (
		<TouchableOpacity
			style={styles.overlay}
			activeOpacity={1}
			onPress={onClose}
		>
			<Animated.View style={[styles.sidebar, { transform: [{ translateX }] }]}>
				<Image
					source={{ uri: user.imageOfUserProfileUri }}
					style={styles.userImage}
				/>
				<Text style={styles.nameUser}>{user.nameUser}</Text>
				<Text style={styles.idUserName}>@{user.idUserName}</Text>
				<View style={styles.followContainer}>
					<Text style={styles.followText}>{user.following} Seguindo</Text>
					<Text style={styles.followText}>{user.followers} Seguidores</Text>
				</View>
				<View style={styles.divider} />
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate("Profile");
						onClose();
					}}
				>
					<FontAwesome5 name="user" size={20} color="#FFFFFF" />
					<Text style={styles.buttonText}>Perfil</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, styles.configButton]}
					onPress={() => {
						navigation.navigate("Settings");
						onClose();
					}}
				>
					<FontAwesome5 name="cog" size={20} color="#FFFFFF" />
					<Text style={styles.buttonText}>Configurações</Text>
				</TouchableOpacity>
			</Animated.View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	sidebar: {
		width: width * 0.7,
		height: "100%",
		backgroundColor: "#101010",
		padding: 20,
		position: "absolute",
		left: 0,
		top: 0,
	},
	userImage: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginBottom: 10,
	},
	nameUser: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
	},
	idUserName: {
		color: "#6B6572",
		fontSize: 14,
		marginBottom: 10,
	},
	followContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	followText: {
		color: "#FFFFFF",
		fontSize: 14,
	},
	divider: {
		height: 1,
		backgroundColor: "#6B6572",
		marginVertical: 10,
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 10,
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: 16,
		marginLeft: 10,
	},
	configButton: {
		position: "absolute",
		bottom: 30,
		left: 20,
	},
});

export default SideBarAppsTabs;
