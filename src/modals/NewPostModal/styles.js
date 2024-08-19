import { StyleSheet } from "react-native";

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
	submitButton: {
		flexDirection: "row",
		alignItems: "center",
	  },
	  
	  submitButtonText: {
		marginRight: 10, // Espaço entre o texto e o ícone
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

export default styles;
