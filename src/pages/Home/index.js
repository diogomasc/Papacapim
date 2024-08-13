import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  Modal,
  TextInput,
  Dimensions,
  Animated,
  Easing,
  BackHandler,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import PapacapimCard from "../../components/PapacapimCard";
import { DummyData } from "../../DummyData/DummyData";
import DiogoImage from "../../assets/Foto_Perfil_Diogo_Mascarenhas.jpg";

const { width } = Dimensions.get("window");

const Home = ({ navigation }) => {
  const [isNewPostVisible, setIsNewPostVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [sidebarTranslateX] = useState(new Animated.Value(-width * 0.7));

  const handleCloseSidebar = useCallback(() => {
    Animated.timing(sidebarTranslateX, {
      toValue: -width * 0.7,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start(() => {
      setIsSidebarVisible(false);
    });
  }, [sidebarTranslateX]);

  const handleOpenSidebar = useCallback(() => {
    setIsSidebarVisible(true);
  }, []);

  const handleCloseNewPost = useCallback(() => {
    setIsNewPostVisible(false);
  }, []);

  const handleBackPress = useCallback(() => {
    if (isNewPostVisible) {
      handleCloseNewPost();
      return true;
    }
    if (isSidebarVisible) {
      handleCloseSidebar();
      return true;
    }
    return false;
  }, [isNewPostVisible, isSidebarVisible, handleCloseNewPost, handleCloseSidebar]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress
    );

    return () => backHandler.remove();
  }, [handleBackPress]);

  useEffect(() => {
    if (isSidebarVisible) {
      Animated.timing(sidebarTranslateX, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
    } else {
      handleCloseSidebar();
    }
  }, [isSidebarVisible, handleCloseSidebar, sidebarTranslateX]);

  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerLeft: () => (
        <TouchableOpacity onPress={handleOpenSidebar}>
          <Image
            style={{
              height: 35,
              width: 35,
              borderRadius: 15,
              marginLeft: 15,
              resizeMode: "cover",
            }}
            source={DiogoImage}
          />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <FontAwesome5 name="twitter" size={25} color={"#6B6572"} />
      ),
    });
  }, [navigation, handleOpenSidebar]);

  const handleNewPost = useCallback(() => {
    setIsNewPostVisible(true);
  }, []);

  const handlePublish = useCallback(() => {
    // Implementar lógica de publicação aqui
    setIsNewPostVisible(false);
  }, []);

  const handleAttachImage = useCallback(() => {
    // Implementar lógica para anexar imagem aqui
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={DummyData}
        keyExtractor={(item) => item.idUserName.toString()}
        renderItem={({ item }) => (
          <PapacapimCard
            idUserName={item.idUserName}
            nameUser={item.nameUser}
            contentPostPapacapim={item.contentPostPapacapim}
            imageOfPostUri={item.imageOfPostUri}
            imageOfUserProfileUri={item.imageOfUserProfileUri}
            timestampText={item.timestampText}
            likesCount={item.likesCount}
            commentsCount={item.commentsCount}
          />
        )}
      />
      <TouchableOpacity style={styles.floatingButton} onPress={handleNewPost}>
        <FontAwesome5 name="plus" size={20} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Modal for New Post */}
      <Modal
        visible={isNewPostVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseNewPost}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={handleCloseNewPost}
                style={styles.backButton}
              >
                <FontAwesome5 name="arrow-left" size={20} color="#2F80ED" />
                <Text style={styles.backButtonText}>Voltar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePublish}>
                <FontAwesome5 name="paper-plane" size={20} color="#2F80ED" />
              </TouchableOpacity>
            </View>
            <View style={styles.postContent}>
              <Image source={DiogoImage} style={styles.userImage} />
              <TextInput
                style={styles.inputPostMessage}
                multiline
                placeholder="O que está acontecendo?"
                placeholderTextColor="#6B6572"
              />
            </View>
            <TouchableOpacity
              style={styles.attachButton}
              onPress={handleAttachImage}
            >
              <FontAwesome5 name="image" size={20} color="#2F80ED" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Sidebar */}
      <Modal
        visible={isSidebarVisible}
        transparent={true}
        animationType="none"
        onRequestClose={handleCloseSidebar}
      >
        <TouchableOpacity
          style={styles.sidebarOverlay}
          activeOpacity={1}
          onPress={handleCloseSidebar}
        >
          <Animated.View
            style={[
              styles.sidebar,
              { transform: [{ translateX: sidebarTranslateX }] },
            ]}
          >
            <Image source={DiogoImage} style={styles.sidebarUserImage} />
            <Text style={styles.sidebarNameUser}>Diogo Mascarenhas</Text>
            <Text style={styles.sidebarIdUserName}>@diogomascarenhas</Text>
            <View style={styles.followContainer}>
              <Text style={styles.followText}>100 seguidores</Text>
              <Text style={styles.followText}>200 seguindo</Text>
            </View>
            <View style={styles.sidebarDivider} />
            <TouchableOpacity style={styles.sidebarButton}>
              <Text style={styles.sidebarButtonText}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.sidebarButton, styles.configButton]}
            >
              <Text style={styles.sidebarButtonText}>Configurações</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#101010",
	},
	floatingButton: {
		position: "absolute",
		width: 60,
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		right: 30,
		bottom: 30,
		backgroundColor: "#2F80ED",
		borderRadius: 30,
		elevation: 8,
	},
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
	sidebarOverlay: {
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
	sidebarUserImage: {
		width: 60,
		height: 60,
		borderRadius: 40,
		marginBottom: 10,
	},
	sidebarNameUser: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
	},
	sidebarIdUserName: {
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
	sidebarDivider: {
		height: 1,
		backgroundColor: "#6B6572",
		marginVertical: 10,
	},
	sidebarButton: {
		paddingVertical: 10,
	},
	sidebarButtonText: {
		color: "#FFFFFF",
		fontSize: 16,
	},
	configButton: {
		position: "absolute",
		bottom: 30,
		left: 20,
	},
});
