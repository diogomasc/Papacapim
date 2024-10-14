import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import styles from "./styles";

const Comment = ({ comment }) => {
  const [authorDetails, setAuthorDetails] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchAuthorDetails();
  }, []);

  const fetchAuthorDetails = async () => {
    try {
      const response = await api.get(`/users/${comment.user_login}`);
      setAuthorDetails(response.data);
    } catch (error) {
      console.error("Erro ao buscar detalhes do autor:", error);
    }
  };

  const handleAuthorPress = () => {
    navigation.navigate("Profile", { userLogin: comment.user_login });
  };

  return (
    <View style={styles.commentContainer}>
      <View style={styles.commentHeader}>
        {authorDetails && (
          <TouchableOpacity onPress={handleAuthorPress}>
            <View style={styles.authorInfo}>
              <Text style={styles.authorName}>{authorDetails.name}</Text>
              <Text style={styles.authorLogin}>@{authorDetails.login}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.commentContent}>{comment.message}</Text>
    </View>
  );
};

const PostDetails = ({
  post,
  visible,
  onClose,
  onLike,
  isLiked,
  onCommentAdded,
}) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [authorDetails, setAuthorDetails] = useState(null);
  const [likesCount, setLikesCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);
  const commentInputRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (post) {
      fetchComments();
      fetchAuthorDetails();
      fetchLikesCount();
      fetchCommentsCount();
    }
  }, [post]);

  useEffect(() => {
    if (visible && commentInputRef.current) {
      commentInputRef.current.focus();
    }
  }, [visible]);

  const fetchComments = async () => {
    try {
      const response = await api.get(`/posts/${post.id}/replies`);
      setComments(response.data);
    } catch (error) {
      console.error("Erro ao buscar comentários:", error);
    }
  };

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
      console.error("Erro ao buscar quantidade de curtidas:", error);
    }
  };

  const fetchCommentsCount = async () => {
    try {
      const response = await api.get(`/posts/${post.id}/replies`);
      setCommentsCount(response.data.length);
    } catch (error) {
      console.error("Erro ao buscar quantidade de comentários:", error);
    }
  };

  const handleComment = async () => {
    if (comment.trim() === "") {
      Alert.alert("Erro", "O campo de comentário não pode estar vazio.");
      return;
    }

    try {
      await api.post(`/posts/${post.id}/replies`, {
        reply: { message: comment },
      });
      setComment("");
      fetchComments();
      setCommentsCount((prevCount) => prevCount + 1);
      if (onCommentAdded) {
        onCommentAdded();
      }
    } catch (error) {
      console.error("Erro ao postar comentário:", error);
      Alert.alert(
        "Erro",
        "Não foi possível postar o comentário. Tente novamente."
      );
    }
  };

  const handleLike = async () => {
    try {
      await onLike(post);
      setLikesCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
    } catch (error) {
      console.error("Erro ao atualizar curtida:", error);
    }
  };

  const handleAuthorPress = () => {
    navigation.navigate("Profile", { userLogin: post.user_login });
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.modalContainer}
      >
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Detalhes da Postagem</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Feather name="x" size={24} color="#2F80ED" />
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>

        {post && (
          <>
            <View style={styles.postDetailContainer}>
              {authorDetails && (
                <TouchableOpacity onPress={handleAuthorPress}>
                  <View style={styles.authorInfo}>
                    <Text style={styles.authorName}>{authorDetails.name}</Text>
                    <Text style={styles.authorLogin}>
                      @{authorDetails.login}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              <Text style={styles.postContent}>{post.message}</Text>
              <View style={styles.postFooter}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={handleLike}
                >
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
                  onPress={() => {}}
                >
                  <Feather name="message-circle" size={20} color="#666" />
                  <Text style={styles.actionText}>
                    Comentários ({commentsCount})
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.commentInputContainer}>
              <TextInput
                ref={commentInputRef}
                style={styles.commentInput}
                placeholder="Adicione um comentário..."
                value={comment}
                onChangeText={setComment}
                multiline
              />
              <TouchableOpacity
                style={styles.sendButton}
                onPress={handleComment}
              >
                <Feather name="send" size={24} color="#f2f2f2" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={comments}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <Comment comment={item} />}
              ListHeaderComponent={
                <Text style={styles.commentsHeader}>Comentários</Text>
              }
            />
          </>
        )}
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default PostDetails;
