import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DummyUserAuth } from "../../DummyData/DummyUserAuth";

const HeaderAppsTabs = ({ onOpenSidebar }) => {
	const user = DummyUserAuth[0];

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onOpenSidebar}>
				<Image
					style={styles.profileImage}
					source={{ uri: user.imageOfUserProfileUri }}
				/>
			</TouchableOpacity>
			<FontAwesome5
				style={styles.twitterIcon}
				name="twitter"
				size={25}
				color={"#6B6572"}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
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

export default HeaderAppsTabs;
