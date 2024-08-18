import React from "react";
import { TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";

const IconNewPost = ({ onPress }) => {
	return (
		<TouchableOpacity style={styles.floatingButton} onPress={onPress}>
			<FontAwesome5 name="plus" size={20} color="#FFFFFF" />
		</TouchableOpacity>
	);
};

export default IconNewPost;
