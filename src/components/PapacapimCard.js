import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DefaultUserIcon from "../assets/DefaultUserIcon.png";

const PapacapimCard = ({
	id,
	name,
	verified,
	papacapimContent,
	imageUri,
	profileUri,
	timestamp,
	likesCount,
	republicationsCount,
	repliesCount,
}) => {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.profileContainer}>
				<Image
					style={styles.profileImage}
					source={{ uri: profileUri ?? DefaultUserIcon }}
				/>
			</View>
			<View style={styles.contentContainer}>
				<View style={styles.headerContainer}>
					<View style={styles.userInfoContainer}>
						<Text style={styles.userName}>{name}</Text>
						{verified && (
							<MaterialIcons name="verified" color="white" size={20} />
						)}
						<Text style={styles.userId}>@{id}</Text>
						<Text style={styles.timestamp}>· {timestamp}</Text>
					</View>
					<MaterialCommunityIcons name="dots-vertical" color="gray" size={20} />
				</View>
				<View style={styles.papacapimContainer}>
					<Text style={styles.papacapimText}>{papacapimContent}</Text>
					{imageUri && (
						<Image style={styles.papacapimImage} source={{ uri: imageUri }} />
					)}
				</View>
				<View style={styles.actionContainer}>
					<ActionIcon
						iconName="message-reply-outline"
						iconColor="gray"
						actionCount={repliesCount}
					/>
					<ActionIcon
						iconName="repeat"
						iconColor="gray"
						actionCount={republicationsCount}
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
		</View>
	);
};

const ActionIcon = ({ iconName, iconColor, actionCount }) => (
	<View style={styles.iconContainer}>
		<MaterialCommunityIcons name={iconName} color={iconColor} size={20} />
		<Text style={styles.actionCountText}>{actionCount}</Text>
	</View>
);

export default PapacapimCard;

const styles = StyleSheet.create({
	cardContainer: {
		flexDirection: "row",
		paddingBottom: 5,
		borderBottomColor: "#2A2E30",
		borderBottomWidth: 1,
	},
	profileContainer: {
		margin: 8,
	},
	profileImage: {
		height: 35,
		width: 35,
		borderRadius: 15,
	},
	contentContainer: {
		flex: 1,
		paddingVertical: 6,
		marginLeft: 5,
	},
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	userInfoContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	userName: {
		color: "#E7E9EA",
		fontWeight: "bold",
		marginRight: 5,
	},
	userId: {
		marginLeft: 5,
		color: "gray",
	},
	timestamp: {
		marginLeft: 5,
		color: "gray",
	},
	papacapimContainer: {
		paddingRight: 15,
		marginTop: 10,
	},
	papacapimText: {
		color: "#DDDFDF",
	},
	papacapimImage: {
		height: 180,
		width: "100%",
		borderRadius: 10,
		marginTop: 10,
	},
	actionContainer: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		marginRight: 15,
	},
	iconContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	actionCountText: {
		marginLeft: 5,
		color: "gray",
	},
});
