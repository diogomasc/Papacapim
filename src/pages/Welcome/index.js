import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<View style={styles.containerLogo}>
				<Animatable.Image
					animation="flipInY"
					source={require("../../assets/twitter-100.png")}
					style={{ width: 100 }}
					resizeMode="contain"
				/>
				<Text style={styles.titleLogo}>Papacapim</Text>
			</View>
			<Animatable.View
				animation="fadeInUp"
				delay={1000}
				style={styles.containerForm}
			>
				<Text style={styles.titleForm}>
					Explore, poste, curta e faça conexões! Descubra novas possibilidades
					com nosso app.
				</Text>
				<Text style={styles.textForm}>Faça o login para começar!</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("SignIn")}
				>
					<Text style={styles.buttonText}>Acessar</Text>
				</TouchableOpacity>
			</Animatable.View>
		</View>
	);
};

export default Welcome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#101010",
	},

	containerLogo: {
		flex: 3,
		justifyContent: "center",
		alignItems: "center",
	},

	titleLogo: {
		fontSize: 32,
		fontWeight: "bold",
		color: "#FFFFFF",
	},

	containerForm: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingStart: "5%",
		paddingEnd: "5%",
		paddingTop: "5%",
		paddingBottom: "5%",
	},

	titleForm: {
		fontSize: 16,
		color: "#1D1D1D",
		marginTops: 28,
		marginBottom: 12,
		fontWeight: "bold",
	},

	textForm: {
		fontSize: 14,
		color: "#4F4F4F",
	},

	button: {
		position: "absolute",
		backgroundColor: "#101010",
		borderRadius: 50,
		paddingVertical: 14,
		width: "60%",
		alignSelf: "center",
		bottom: "13%",
		alignItems: "center",
		justifyContent: "center",
	},

	buttonText: {
		fontSize: 14,
		color: "#FFFFFF",
		fontWeight: "bold",
	},
});
