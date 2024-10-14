import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";
import styles from "./styles";
import { useAuth } from "../../contexts/AuthContext";
import debounce from "lodash.debounce";
import Post from "../../components/Post";
import PostDetails from "../../modals/PostDetails";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});
  const navigation = useNavigation();
  const { user } = useAuth();

  const fetchPosts = useCallback(
    async (pageToFetch, query = "") => {
      setLoading(true);
      try {
        const storageToken = await AsyncStorage.getItem("token");

        if (storageToken) {
          api.defaults.headers["x-session-token"] = storageToken;
        }

        let endpoint = query
          ? `/posts?search=${encodeURIComponent(query.trim())}`
          : `/posts?page=${pageToFetch}`;

        endpoint += "&exclude_replies=1";

        const response = await api.get(endpoint);
        const data = response.data;

        const likePromises = data.map((post) =>
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

        setLikedPosts((prevLikedPosts) => ({
          ...prevLikedPosts,
          ...newLikedPosts,
        }));

        if (query) {
          setPosts(data);
        } else {
          setPosts((prevPosts) =>
            pageToFetch === 0 ? data : [...prevPosts, ...data]
          );
        }
      } catch (error) {
        console.error(error);
        if (error.response?.status === 500) {
          Alert.alert(
            "Erro",
            "Não foi possível carregar mais posts. Tente novamente mais tarde."
          );
          setHasError(true);
        }
      } finally {
        setLoading(false);
        setIsFetching(false);
      }
    },
    [user]
  );

  const debouncedSearch = useCallback(
    debounce((query) => {
      if (query.trim()) {
        setPage(0);
        setPosts([]);
        fetchPosts(0, query);
      } else {
        handleRefresh();
      }
    }, 500),
    [fetchPosts]
  );

  const handleRefresh = useCallback(() => {
    setPage(0);
    setPosts([]);
    setHasError(false);
    fetchPosts(0);
  }, [fetchPosts]);

  useFocusEffect(
    useCallback(() => {
      handleRefresh();
    }, [handleRefresh])
  );

  useEffect(() => {
    if (page > 0) {
      fetchPosts(page);
    }
  }, [page, fetchPosts]);

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery, debouncedSearch]);

  const loadMorePosts = () => {
    if (!isFetching && !searchQuery && !hasError) {
      setIsFetching(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePostPress = (post) => {
    setSelectedPost(post);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedPost(null);
  };

  const handleComment = async (comment) => {
    try {
      await api.post(`/posts/${selectedPost.id}/replies`, {
        reply: { message: comment },
      });

      const updatedPost = await api.get(`/posts/${selectedPost.id}`);
      setSelectedPost(updatedPost.data);

      handleRefresh();
    } catch (error) {
      console.error("Error posting comment:", error);
      Alert.alert(
        "Erro",
        "Não foi possível postar o comentário. Tente novamente."
      );
    }
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
      console.error("Error toggling like:", error);
      Alert.alert(
        "Erro",
        "Não foi possível curtir/descurtir o post. Tente novamente."
      );
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.loadingFooter}>
        <ActivityIndicator size="small" color="#2F80ED" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar posts..."
          value={searchQuery}
          onChangeText={handleSearch}
          placeholderTextColor="#666"
        />
        <Feather
          name="search"
          size={24}
          color="#2F80ED"
          style={styles.searchIcon}
        />
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Post
            post={item}
            onPress={handlePostPress}
            onComment={handlePostPress}
            onLike={handleLike}
            isLiked={likedPosts[item.id]}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMorePosts}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
      <PostDetails
        post={selectedPost}
        visible={modalVisible}
        onClose={handleCloseModal}
        onComment={handleComment}
        onLike={handleLike}
        isLiked={selectedPost ? likedPosts[selectedPost.id] : false}
      />
      <TouchableOpacity
        style={styles.newPostButton}
        onPress={() => navigation.navigate("NewPost")}
      >
        <Feather name="plus" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
        <Feather name="refresh-cw" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
