import { useNavigation } from "@react-navigation/native";
import React, { useMemo, useCallback } from "react";
import {
  Animated,
  Image,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DummyUserAuthSession } from "../../DummyData/DummyData";
import styles from "./styles";

const SideBarModal = ({ isVisible, onClose, translateX }) => {
  const navigation = useNavigation();
  const user = useMemo(() => DummyUserAuthSession[0], []);

  {/**
  const handleProfilePress = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onClose?.();
    console.log('user.idUserName:', user.idUserName);
    setTimeout(() => {
      if (user.idUserName) {
        navigation.navigate("Profile", { idUserName: user.idUserName });
      } else {
        console.error("user.idUserName is undefined");
      }
    }, 300);
  }, [navigation, onClose, user.idUserName]);
  */}

  {/**
  const handleProfilePress = useCallback(() => {
    navigation.navigate("Profile", { idUserName: user.idUserName });
  }, [navigation, user.idUserName]);
  */}

  const handleProfilePress = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onClose?.();
    setTimeout(() => {
      navigation.navigate("Profile", { idUserName: user.idUserName });
    }, 300);
  }, [navigation, onClose, user.idUserName]);

  const handleSettingsPress = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onClose?.();
    setTimeout(() => {
      navigation.navigate("Settings");
    }, 300);
  }, [navigation, onClose]);



  return (
    <TouchableOpacity
      style={styles.overlay}
      activeOpacity={1}
      onPress={onClose}
      accessibilityRole="button"
    >
      <Animated.View style={[styles.sidebar, { transform: [{ translateX }] }]}>
        <Image
          source={{ uri: user.imageOfUserProfileUri }}
          style={styles.userImage}
          accessibilityRole="image"
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
          onPress={handleProfilePress}
          accessibilityRole="button"
        >
          <FontAwesome5 name="user" size={20} color="#6B6572" />
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>

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