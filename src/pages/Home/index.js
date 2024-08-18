import React, { useEffect, useState, useCallback } from "react";
import {
	Alert,
	Animated,
	BackHandler,
	Dimensions,
	FlatList,
	Image,
	Modal,
	StyleSheet,
	Text,
	TextInput,
	Easing,
	TouchableOpacity,
	View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DummyData, DummyUserAuth } from "../../DummyData/DummyData";
import Header from "../../components/Header";
import IconNewPost from "../../components/IconNewPost";
import PostItem from "../../components/PostItem";
import NewPostModal from "../../modals/NewPostModal";
import SideBarModal from "../../modals/SideBarModal";

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
	}, [
		isNewPostVisible,
		isSidebarVisible,
		handleCloseNewPost,
		handleCloseSidebar,
	]);

	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			handleBackPress,
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
			headerLeft: () => <Header onOpenSidebar={handleOpenSidebar} />,
			headerTitle: () => null,
		});
	}, [navigation, handleOpenSidebar]);

	const handleNewPost = useCallback(() => {
		setIsNewPostVisible(true);
	}, []);

	const handlePublish = useCallback((postMessage) => {
		Alert.alert("Post publicado", postMessage);
		setIsNewPostVisible(false);
	}, []);

	const handleAttachImage = useCallback(() => {}, []);

	return (
		<View style={styles.container}>
			<FlatList
			data={DummyData}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item }) => (
				<PostItem
				id={item.id}
				idUserName={item.idUserName}
				nameUser={item.nameUser}
				contentPostItem={item.contentPost}
				imageOfUserProfileUri={item.imageOfUserProfileUri}
				timestampText={item.timestampText}
				likesCount={item.likesCount}
				commentsCount={item.commentsCount}
				onPress={(postId, showCommentInput) => 
					navigation.navigate('PostDetails', { 
					postId, 
					showCommentInput 
					})
				}
				/>
			)}
			/>
			<IconNewPost onPress={handleNewPost} />

			{/* Modal for New Post */}
			<NewPostModal
				isVisible={isNewPostVisible}
				onClose={handleCloseNewPost}
				onPublish={handlePublish}
				onAttachImage={handleAttachImage}
			/>

			{/* Sidebar */}
			<Modal
				visible={isSidebarVisible}
				transparent={true}
				animationType="none"
				onRequestClose={handleCloseSidebar}
			>
				<SideBarModal
					isVisible={isSidebarVisible}
					onClose={handleCloseSidebar}
					translateX={sidebarTranslateX}
				/>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#101010",
	},
});

export default Home;
