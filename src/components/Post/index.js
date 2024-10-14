import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import styles from "./styles";

const Post = ({
  post,
  onPress,
  onLike,
  isLiked,
  showDeleteButton,
  onDelete,
}) => {
  const [authorDetails, setAuthorDetails] = useState(null);
  const [likesCount, setLikesCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);

  useEffect(() => {
    fetchAuthorDetails();
    fetchLikesCount();
    fetchCommentsCount();
  }, []);

  const fetchAuthorDetails = async () => {
    try {
      const response = await api.get(`/users/${post.user_login}`);
      setAuthorDetails(response.data);
    } catch (error) {
      console.error("Erro ao buscar detalhes do autor:", error);
    }
  };

  const fetchLikesCount = async () => {
    try {
      const response = await api.get(`/posts/${post.id}/likes`);
      setLikesCount(response.data.length);
    } catch (error) {
      console.error("Erro ao buscar a contagem de curtidas:", error);
    }
  };

  const fetchCommentsCount = async () => {
    try {
      const response = await api.get(`/posts/${post.id}/replies`);
      setCommentsCount(response.data.length);
    } catch (error) {
      console.error("Erro ao buscar a contagem de comentários:", error);
    }
  };

  const handleLike = async () => {
    try {
      await onLike(post);
      setLikesCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
    } catch (error) {
      console.error("Erro ao atualizar a curtida:", error);
    }
  };

  return (
    <TouchableOpacity
      style={styles.postContainer}
      onPress={() => onPress(post)}
    >
      <View style={styles.postContent}>
        <View style={styles.headerPost}>
          {authorDetails && (
            <View style={styles.authorInfo}>
              <Text style={styles.authorName}>{authorDetails.name}</Text>
              <Text style={styles.authorLogin}>@{authorDetails.login}</Text>
            </View>
          )}
        </View>
        <Text style={styles.postMessage}>{post.message}</Text>
        <View style={styles.postFooter}>
          <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
            <Feather
              name={isLiked ? "heart" : "heart"}
              size={20}
              color={isLiked ? "#FF0000" : "#666"}
            />
            <Text style={styles.actionText}>
              {isLiked ? "Descurtir" : "Curtir"} ({likesCount})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => onPress(post)}
          >
            <Feather name="message-circle" size={20} color="#666" />
            <Text style={styles.actionText}>Comentários ({commentsCount})</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showDeleteButton && (
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Feather name="trash-2" size={24} color="red" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default Post;
