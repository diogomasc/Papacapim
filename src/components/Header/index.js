import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DummyUserAuthSession } from "../../DummyData/DummyData";
import styles from "./styles";

const Header = ({ onOpenSidebar }) => {
  const user = DummyUserAuthSession[0];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onOpenSidebar}>
        <Image
          style={styles.profileImage}
          source={{ uri: user.imageOfUserProfileUri }}
        />
      </TouchableOpacity>
      <FontAwesome5
        style={styles.twitterIcon}
        name="twitter"
        size={25}
        color={"#6B6572"}
      />
    </View>
  );
};

export default Header;