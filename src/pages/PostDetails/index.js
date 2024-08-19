import React, { useState, useEffect } from "react";
import {
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { DummyData, DummyDataUser, DummyUserAuthSession } from "../../DummyData/DummyData";
import styles from "./styles";

const PostDetails = ({ route, navigation }) => {
  const { postId } = route.params;
  const [postData, setPostData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [showCommentField, setShowCommentField] = useState(false);
  const [comment, setComment] = useState("");
  const [commentInputHeight, setCommentInputHeight] = useState(40);

  const authenticatedUser = DummyUserAuthSession[0];

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setIsLoading(true);
        const post = DummyData.find(post => post.id === postId);
        if (post) {
          setPostData(post);
          setLikesCount(parseInt(post.likesCount));
          const user = DummyDataUser[post.idUserName];
          if (user) {
            setUserData(user);
          } else {
            throw new Error("Usuário não encontrado");
          }
        } else {
          throw new Error("Post não encontrado");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchPostData();
  }, [postId]);

  useEffect(() => {
    const hideKeyboard = Keyboard.addListener("keyboardDidHide", () => {
      setShowCommentField(false);
    });

    return () => {
      hideKeyboard.remove();
    };
  }, []);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile', { idUserName: userData.idUserName });
  };

  const handleLikePress = () => {
    setIsLiked(!isLiked);
    setLikesCount(prevCount => isLiked ? prevCount - 1 : prevCount + 1);
  };

  const handleCommentPress = () => {
    setShowCommentField(true);
  };

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handleContentSizeChange = (event) => {
    setCommentInputHeight(Math.max(40, event.nativeEvent.contentSize.height));
  };

  const handleCommentSubmit = () => {
    if (comment.trim().length > 0) {
      console.log("Comentário enviado:", comment);
      setComment("");
      setShowCommentField(false);
    }
  };

  if (isLoading) {
    return <View style={styles.container}><Text>Carregando...</Text></View>;
  }

  if (error) {
    return <View style={styles.container}><Text>Erro: {error}</Text></View>;
  }

  if (!postData || !userData) {
    return <View style={styles.container}><Text>Nenhum dado encontrado</Text></View>;
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <MaterialCommunityIcons name="arrow-left" size={20} color="#2F80ED" />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleProfilePress} style={styles.header}>
  <Image
    style={styles.profilePicture}
    source={{ uri: userData.imageOfUserProfileUri }}
  />
  <View style={styles.userInfo}>
    <Text style={styles.userName}>{userData.nameUser}</Text>
    <Text style={styles.userHandle}>@{userData.idUserName}</Text>
    <Text style={styles.timestampText}>{postData.timestampText}</Text>
  </View>
</TouchableOpacity>

      <Text style={styles.content}>{postData.contentPost}</Text>

      <View style={styles.actionsContainer}>
        <ActionIcon
          iconName="message-reply-outline"
          iconColor="gray"
          actionCount={postData.commentsCount}
          onPress={handleCommentPress}
        />
        {/** 
         <ActionIcon
          iconName="repeat"
          iconColor="gray"
          actionCount={postData.commentsCount}
        />
        */}
        
        <ActionIcon
          iconName={isLiked ? "heart" : "heart-outline"}
          iconColor={isLiked ? "red" : "gray"}
          actionCount={likesCount.toString()}
          onPress={handleLikePress}
        />
         {/** 
          * <MaterialCommunityIcons
          name="share-variant-outline"
          color="gray"
          size={20}
        />*/}
        
      </View>

      {showCommentField && (
        <View style={styles.commentInputContainer}>
          <TextInput
            style={[styles.commentInput, { height: commentInputHeight }]}
            placeholder="Escreva um comentário..."
            placeholderTextColor="gray"
            value={comment}
            onChangeText={handleCommentChange}
            multiline
            onContentSizeChange={handleContentSizeChange}
            autoFocus
          />
          <TouchableOpacity
            onPress={handleCommentSubmit}
            style={[
              styles.commentSubmitButton,
              { opacity: comment.trim().length > 0 ? 1 : 0.5 },
            ]}
            disabled={comment.trim().length === 0}
          >
            <Text style={styles.commentSubmitButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.separator} />
    </ScrollView>
  );
};

const ActionIcon = ({ iconName, iconColor, actionCount, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.iconWrapper}>
    <MaterialCommunityIcons name={iconName} color={iconColor} size={20} />
    <Text style={styles.countText}>{actionCount}</Text>
  </TouchableOpacity>
);

export default PostDetails;