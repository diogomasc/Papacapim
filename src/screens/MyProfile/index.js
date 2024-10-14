import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  RefreshControl,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/AuthContext";
import api from "../../services/api";
import FollowersModal from "../../modals/FollowersModal";
import Post from "../../components/Post";
import PostDetails from "../../modals/PostDetails";
import styles from "./styles";

const MyProfile = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [userDetails, setUserDetails] = useState(null);
  const [posts, setPosts] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isFollowersModalVisible, setFollowersModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPostDetailsModalVisible, setPostDetailsModalVisible] =
    useState(false);
  const [likedPosts, setLikedPosts] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setRefreshing(true);
    try {
      await Promise.all([
        fetchUserDetails(),
        fetchUserPosts(),
        fetchFollowers(),
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setRefreshing(false);
    }
  };

  const fetchUserDetails = async () => {
    const response = await api.get(`/users/${user.login}`);
    setUserDetails(response.data);
  };

  const fetchUserPosts = async () => {
    const response = await api.get(`/users/${user.login}/posts`);
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
        (like) => like.user_login === user.login
      );
    });

    setLikedPosts(newLikedPosts);
    setPosts(fetchedPosts);
  };

  const fetchFollowers = async () => {
    const response = await api.get(`/users/${user.login}/followers`);
    setFollowers(response.data);
  };

  const handleDeletePost = (postId) => {
    Alert.alert(
      "Excluir Post",
      "Tem certeza que deseja excluir esta postagem?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          onPress: async () => {
            try {
              await api.delete(`/posts/${postId}`);
              setPosts(posts.filter((post) => post.id !== postId));
              Alert.alert("Sucesso", "Postagem/Resposta apagado.");
            } catch (error) {
              console.error("Error deleting post:", error);
              Alert.alert("Erro", "Não foi possível excluir a postagem.");
            }
          },
        },
      ]
    );
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
      console.error("Error liking/unliking post:", error);
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
        showDeleteButton={true}
        onDelete={() => handleDeletePost(item.id)}
      />
    </View>
  );

  if (!userDetails) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Text style={styles.name}>{userDetails.name}</Text>
        <Text style={styles.login}>@{userDetails.login}</Text>
        <Text style={styles.createdAt}>
          Usuário desde:{" "}
          {new Date(userDetails.created_at).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </Text>

        <View style={styles.followersContainer}>
          <View style={styles.followersInfo}>
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
        </View>
      </View>

      <Text style={styles.postsHeader}>Minhas Postagens e Respostas</Text>
      <FlatList
        data={posts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
        }
        ListEmptyComponent={
          <Text style={styles.emptyList}>
            Você ainda não fez nenhuma postagem.
          </Text>
        }
      />

      <FollowersModal
        visible={isFollowersModalVisible}
        onClose={() => setFollowersModalVisible(false)}
        followers={followers}
        userLogin={user.login}
      />

      <PostDetails
        post={selectedPost}
        visible={isPostDetailsModalVisible}
        onClose={() => setPostDetailsModalVisible(false)}
        onLike={handleLike}
        isLiked={selectedPost ? likedPosts[selectedPost.id] : false}
        onCommentAdded={handleCommentAdded}
      />
    </View>
  );
};

export default MyProfile;
