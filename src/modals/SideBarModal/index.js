import { useNavigation } from "@react-navigation/native";
import React, { useMemo, useCallback } from "react";
import {
	Animated,
	Image,
	LayoutAnimation,
	Platform,
	Text,
	TouchableOpacity,
	UIManager,
	View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DummyData, DummyUserAuth } from "../../DummyData/DummyData";
import styles from "./styles";

const SideBarModal = ({ isVisible, onClose, translateX }) => {
	const navigation = useNavigation();

	// Carrega os dados do usuário
	const user = useMemo(() => DummyUserAuth[0], []);

	// Função para animar o fechamento do modal e navegação para o perfil
	const handleProfilePress = useCallback(() => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // Animação suave
		onClose?.(); // Fecha o modal após a navegação
		setTimeout(() => {
			navigation.navigate("Profile"); // Navega após a animação
		}, 300); // Ajuste o tempo para a duração da animação
	}, [navigation, onClose]);

	// Função para animar o fechamento do modal e navegação para configurações
	const handleSettingsPress = useCallback(() => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // Animação suave
		onClose?.(); // Fecha o modal após a navegação
		setTimeout(() => {
			navigation.navigate("Settings"); // Navega após a animação
		}, 300); // Ajuste o tempo para a duração da animação
	}, [navigation, onClose]);

	return (
		// Área clicável para fechar o modal
		<TouchableOpacity
			style={styles.overlay}
			activeOpacity={1}
			onPress={onClose}
			accessibilityRole="button"
		>
			{/* Animação de deslizar da barra lateral */}
			<Animated.View style={[styles.sidebar, { transform: [{ translateX }] }]}>
				{/* Imagem de perfil do usuário */}
				<Image
					source={{ uri: user.imageOfUserProfileUri }}
					style={styles.userImage}
					accessibilityRole="image"
				/>
				{/* Nome e ID do usuário */}
				<Text style={styles.nameUser}>{user.nameUser}</Text>
				<Text style={styles.idUserName}>@{user.idUserName}</Text>

				{/* Informações de seguidores */}
				<View style={styles.followContainer}>
					<Text style={styles.followText}>{user.following} Seguindo</Text>
					<Text style={styles.followText}>{user.followers} Seguidores</Text>
				</View>

				{/* Divisor */}
				<View style={styles.divider} />

				{/* Botão para perfil */}
				<TouchableOpacity
					style={styles.button}
					onPress={handleProfilePress}
					accessibilityRole="button"
				>
					<FontAwesome5 name="user" size={20} color="#6B6572" />
					<Text style={styles.buttonText}>Perfil</Text>
				</TouchableOpacity>

				{/* Botão para configurações */}
				<TouchableOpacity
					style={[styles.button, styles.configButton]}
					onPress={handleSettingsPress}
					accessibilityRole="button"
				>
					<FontAwesome5 name="cog" size={20} color="#6B6572" />
					<Text style={styles.buttonText}>Configurações</Text>
				</TouchableOpacity>
			</Animated.View>
		</TouchableOpacity>
	);
};

export default SideBarModal;
