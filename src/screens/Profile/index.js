import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  FlatList,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";
import FollowersModal from "../../modals/FollowersModal";
import Post from "../../components/Post";
import PostDetails from "../../modals/PostDetails";
import styles from "./styles";

const Profile = ({ route }) => {
  const { userLogin } = route.params;
  const navigation = useNavigation();
  const { user: currentUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [followersModalVisible, setFollowersModalVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPostDetailsModalVisible, setPostDetailsModalVisible] =
    useState(false);
  const [likedPosts, setLikedPosts] = useState({});

  const fetchUserData = useCallback(async () => {
    if (!userLogin) {
      console.error("Login de usuário indefinido");
      Alert.alert("Erro", "Falha ao carregar perfil do usuário");
      return;
    }

    try {
      const response = await api.get(`/users/${userLogin}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
      Alert.alert("Erro", "Falha ao carregar dados do usuário");
    }
  }, [userLogin]);

  const fetchFollowers = useCallback(async () => {
    if (!userLogin) return;

    try {
      const response = await api.get(`/users/${userLogin}/followers`);
      setFollowers(response.data);
      setIsFollowing(
        response.data.some(
          (follower) => follower.follower_login === currentUser.login
        )
      );
    } catch (error) {
      console.error("Erro ao buscar seguidores:", error);
      Alert.alert("Erro", "Falha ao carregar seguidores");
    }
  }, [userLogin, currentUser]);

  const fetchUserPosts = useCallback(async () => {
    if (!userLogin) return;

    try {
      const response = await api.get(`/users/${userLogin}/posts`);
      const fetchedPosts = response.data;

      const likePromises = fetchedPosts.map((post) =>
        api
          .get(`/posts/${post.id}/likes`)
          .then((res) => ({ postId: post.id, likes: res.data }))
          .catch(() => ({ postId: post.id, likes: [] }))
      );
      const likesData = await Promise.all(likePromises);

      const newLikedPosts = {};
      likesData.forEach(({ postId, likes }) => {
        newLikedPosts[postId] = likes.some(
          (like) => like.user_login === currentUser.login
        );
      });

      setLikedPosts(newLikedPosts);
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Erro ao buscar postagens do usuário:", error);
      Alert.alert("Erro", "Falha ao carregar postagens do usuário");
    }
  }, [userLogin, currentUser]);

  const loadProfileData = useCallback(async () => {
    setLoading(true);
    await Promise.all([fetchUserData(), fetchFollowers(), fetchUserPosts()]);
    setLoading(false);
  }, [fetchUserData, fetchFollowers, fetchUserPosts]);

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        drawerLockMode: "locked-closed",
        headerShown: false,
      });
      loadProfileData();
    }, [loadProfileData])
  );

  const handleFollowToggle = async () => {
    if (!userLogin) return;

    try {
      if (isFollowing) {
        await api.delete(`/users/${userLogin}/followers/${currentUser.id}`);
        Alert.alert("Sucesso", `Você deixou de seguir o usuário ${userLogin}`);
      } else {
        await api.post(`/users/${userLogin}/followers`);
        Alert.alert("Sucesso", `Você seguiu o usuário ${userLogin}`);
      }
      setIsFollowing(!isFollowing);
      await fetchFollowers();
    } catch (error) {
      console.error("Erro ao alternar seguir:", error);
      Alert.alert("Erro", "Falha ao atualizar status de seguir");
    }
  };

  const handlePostPress = (post) => {
    setSelectedPost(post);
    setPostDetailsModalVisible(true);
  };

  const handleLike = async (post) => {
    try {
      if (likedPosts[post.id]) {
        await api.delete(`/posts/${post.id}/likes/1`);
      } else {
        await api.post(`/posts/${post.id}/likes`);
      }
      setLikedPosts((prevLikedPosts) => ({
        ...prevLikedPosts,
        [post.id]: !prevLikedPosts[post.id],
      }));
    } catch (error) {
      console.error("Erro ao curtir/descurtir postagem:", error);
      Alert.alert(
        "Erro",
        "Não foi possível curtir/descurtir o post. Tente novamente."
      );
    }
  };

  const handleCommentAdded = () => {
    fetchUserPosts();
  };

  const renderPostItem = ({ item }) => (
    <View style={styles.postWrapper}>
      <Post
        post={item}
        onPress={handlePostPress}
        onLike={handleLike}
        isLiked={likedPosts[item.id]}
      />
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Detalhes do Perfil</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.closeButton}
        >
          <Feather name="x" size={24} color="#2F80ED" />
          <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        userData && (
          <>
            <View style={styles.profileInfo}>
              <Text style={styles.name}>{userData.name}</Text>
              <Text style={styles.login}>@{userData.login}</Text>
              <Text style={styles.joinDate}>
                Usuário desde{" "}
                {new Date(userData.created_at).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </Text>

              {currentUser.login !== userData.login && (
                <TouchableOpacity
                  style={[
                    styles.followButton,
                    isFollowing ? styles.followingButton : styles.defaultButton,
                  ]}
                  onPress={handleFollowToggle}
                >
                  <Text style={styles.followButtonText}>
                    {isFollowing ? "Deixar de Seguir" : "Seguir"}
                  </Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={styles.followersButton}
                onPress={() => setFollowersModalVisible(true)}
              >
                <Text style={styles.followersText}>
                  {followers.length}{" "}
                  {followers.length === 1 ? "Seguidor" : "Seguidores"}
                  {"\n"}
                  Ver todos os seguidores
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.postsHeader}>Postagens e Respostas</Text>
            <FlatList
              data={posts}
              renderItem={renderPostItem}
              keyExtractor={(item) => item.id.toString()}
              ListEmptyComponent={
                <Text style={styles.emptyList}>
                  Este usuário ainda não fez nenhuma postagem.
                </Text>
              }
            />

            <FollowersModal
              visible={followersModalVisible}
              onClose={() => setFollowersModalVisible(false)}
              followers={followers}
              userLogin={userData.login}
            />

            <PostDetails
              post={selectedPost}
              visible={isPostDetailsModalVisible}
              onClose={() => setPostDetailsModalVisible(false)}
              onLike={handleLike}
              isLiked={selectedPost ? likedPosts[selectedPost.id] : false}
              onCommentAdded={handleCommentAdded}
            />
          </>
        )
      )}
    </View>
  );
};

export default Profile;
