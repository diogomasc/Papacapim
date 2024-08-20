import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ActionIcon from "./ActionIcon";
import styles from "./styles";

const DefaultUserIcon = require("../../assets/DefaultUserIcon.png");

const PostItem = ({
  id,
  idUserName,
  nameUser,
  contentPost,
  imageOfUserProfileUri,
  timestampText,
  likesCount: initialLikesCount,
  commentsCount,
  onPress,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(
    Number.parseInt(initialLikesCount)
  );
  const navigation = useNavigation();

  const handleLikePress = (event) => {
    event.stopPropagation();
    setIsLiked((prev) => !prev);
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleCommentPress = (event) => {
    event.stopPropagation();
    onPress(id, true);
  };

  const handleProfilePress = () => {
    navigation.navigate("Profile", { idUserName: idUserName });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(id, false)}>

      <TouchableOpacity
        style={styles.profileWrapper}
        onPress={handleProfilePress}
      >
        <Image
          style={styles.profilePicture}
          source={
            imageOfUserProfileUri
              ? { uri: imageOfUserProfileUri }
              : DefaultUserIcon
          }
        />
      </TouchableOpacity>

      <View style={styles.contentWrapper}>

        <TouchableOpacity style={styles.header} onPress={handleProfilePress}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{nameUser}</Text>
            <Text style={styles.userHandle}>@{idUserName}</Text>
            <Text style={styles.timestampText}>{timestampText}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.postItemContent}>
          <Text style={styles.postItemBody}>{contentPost}</Text>
        </View>

        <View style={styles.actionButtons}>

          <ActionIcon
            iconName="message-reply-outline"
            iconColor="gray"
            actionCount={commentsCount}
            onPress={handleCommentPress}
          />
          <ActionIcon
            iconName={isLiked ? "heart" : "heart-outline"}
            iconColor={isLiked ? "red" : "gray"}
            actionCount={likesCount.toString()}
            onPress={handleLikePress}
          />
        </View>

      </View>

    </TouchableOpacity>
  );
};

export default PostItem;
