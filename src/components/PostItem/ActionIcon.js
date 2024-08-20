import React from "react";
import { Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

const ActionIcon = ({ iconName, iconColor, actionCount, onPress }) => (
  <TouchableOpacity style={styles.iconWrapper} onPress={onPress}>
    <MaterialCommunityIcons name={iconName} color={iconColor} size={20} />
    <Text style={styles.countText}>{actionCount}</Text>
  </TouchableOpacity>
);

export default ActionIcon;
