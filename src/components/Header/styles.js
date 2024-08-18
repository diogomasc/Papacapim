import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		position: "relative",
	},
	profileImage: {
		height: 35,
		width: 35,
		borderRadius: 15,
		marginLeft: 15,
		resizeMode: "cover",
	},
	twitterIcon: {
		position: "absolute",
		left: "50%",
		transform: [{ translateX: 95 }],
	},
});
