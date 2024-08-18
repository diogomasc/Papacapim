import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ActionIcon from "./ActionIcon";
import styles from "./styles";

const DefaultUserIcon = "../../assets/DefaultUserIcon.png";

const PostItem = ({
  id,
  idUserName,
  nameUser,
  contentPostItem,
  imageOfUserProfileUri,
  timestampText,
  likesCount: initialLikesCount,
  commentsCount,
  onPress,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(parseInt(initialLikesCount));

  const handleLikePress = (event) => {
    event.stopPropagation();
    setIsLiked((prev) => !prev);
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleCommentPress = (event) => {
    event.stopPropagation();
    onPress(id, true); // Passa o id do post e indica que deve abrir o input de comentário
  };

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => onPress(id, false)} // Passa o id do post sem abrir o input de comentário
    >
      <View style={styles.profileWrapper}>
        <Image
          style={styles.profilePicture}
          source={{ uri: imageOfUserProfileUri || DefaultUserIcon }}
        />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{nameUser}</Text>
            <Text style={styles.userHandle}>@{idUserName}</Text>
            <Text style={styles.timestampText}>{timestampText}</Text>
          </View>
          <MaterialCommunityIcons name="dots-vertical" color="gray" size={20} />
        </View>
        <View style={styles.postItemContent}>
          <Text style={styles.postItemBody}>{contentPostItem}</Text>
        </View>
        <View style={styles.actionButtons}>
          <ActionIcon
            iconName="message-reply-outline"
            iconColor="gray"
            actionCount={commentsCount}
            onPress={handleCommentPress}
          />
          <ActionIcon
            iconName="repeat"
            iconColor="gray"
            actionCount={commentsCount}
          />
          <ActionIcon
            iconName={isLiked ? "heart" : "heart-outline"}
            iconColor={isLiked ? "red" : "gray"}
            actionCount={likesCount.toString()}
            onPress={handleLikePress}
          />
          <MaterialCommunityIcons
            name="share-variant-outline"
            color="gray"
            size={20}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;