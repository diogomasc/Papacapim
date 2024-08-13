import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const PapacapimCard = ({
	idUserName,
	nameUser,
	contentPostPapacapim,
	imageOfPostUri,
	imageOfUserProfileUri,
	timestampText,
	likesCount,
	commentsCount,
}) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styles.card}
			onPress={() =>
				navigation.navigate("PostDetails", {
					idUserName,
					nameUser,
					contentPostPapacapim,
					imageOfPostUri,
					imageOfUserProfileUri,
					timestampText,
					likesCount,
					commentsCount,
				})
			}
		>
			<View style={styles.profileWrapper}>
				<Image
					style={styles.profilePicture}
					source={{ uri: imageOfUserProfileUri ?? DefaultUserIcon }}
				/>
			</View>
			<View style={styles.contentWrapper}>
				<View style={styles.header}>
					<View style={styles.userInfo}>
						<Text style={styles.userName}>{nameUser}</Text>
						<Text style={styles.userHandle}>@{idUserName}</Text>
						<Text style={styles.timestampText}>· {timestampText}</Text>
					</View>
					<MaterialCommunityIcons name="dots-vertical" color="gray" size={20} />
				</View>
				<View style={styles.papacapimContent}>
					<Text style={styles.papacapimBody}>{contentPostPapacapim}</Text>
					{imageOfPostUri && (
						<Image
							style={styles.papacapimImage}
							source={{ uri: imageOfPostUri }}
						/>
					)}
				</View>
				<View style={styles.actionButtons}>
					<ActionIcon
						iconName="message-reply-outline"
						iconColor="gray"
						actionCount={commentsCount}
					/>
					<ActionIcon
						iconName="repeat"
						iconColor="gray"
						size={20}
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
			</View>
		</TouchableOpacity>
	);
};

const ActionIcon = ({ iconName, iconColor, actionCount }) => (
	<View style={styles.iconWrapper}>
		<MaterialCommunityIcons name={iconName} color={iconColor} size={20} />
		<Text style={styles.countText}>{actionCount}</Text>
	</View>
);

export default PapacapimCard;

const styles = StyleSheet.create({
	card: {
		flexDirection: "row",
		paddingBottom: 5,
		borderBottomColor: "#2A2E30",
		borderBottomWidth: 1,
		backgroundColor: "#1E1E1E",
		margin: 10,
		borderRadius: 10,
		padding: 10,
	},
	profileWrapper: {
		margin: 8,
	},
	profilePicture: {
		height: 35,
		width: 35,
		borderRadius: 15,
	},
	contentWrapper: {
		flex: 1,
		paddingVertical: 6,
		marginLeft: 5,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	userInfo: {
		flexDirection: "row",
		alignItems: "center",
	},
	userName: {
		fontWeight: "bold",
		color: "white",
		marginRight: 5,
	},
	userHandle: {
		color: "gray",
	},
	timestampText: {
		color: "gray",
	},
	papacapimContent: {
		marginTop: 5,
		marginBottom: 8,
	},
	papacapimBody: {
		color: "white",
	},
	papacapimImage: {
		width: "100%",
		height: 200,
		marginTop: 5,
		borderRadius: 10,
	},
	actionButtons: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	iconWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
	countText: {
		color: "gray",
		marginLeft: 5,
	},
});
