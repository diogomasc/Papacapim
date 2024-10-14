import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import styles from "./styles";

const FollowersModal = ({ visible, onClose, userLogin }) => {
  const [followers, setFollowers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (visible) {
      fetchFollowers(userLogin);
    }
  }, [visible, userLogin]);

  const fetchFollowers = async (login) => {
    setIsLoading(true);
    try {
      const response = await api.get(`/users/${login}/followers`);
      const followersData = response.data;

      const detailedFollowers = await Promise.all(
        followersData.map(async (follower) => {
          try {
            const userResponse = await api.get(
              `/users/${follower.follower_login}`
            );
            return {
              ...follower,
              name: userResponse.data.name,
            };
          } catch (error) {
            return {
              ...follower,
              name: "Nome não disponível",
            };
          }
        })
      );

      setFollowers(detailedFollowers);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os seguidores.");
      setFollowers([]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderFollowerItem = ({ item }) => (
    <View style={styles.followerItem}>
      <Feather
        name="user"
        size={24}
        color="#2F80ED"
        style={styles.followerIcon}
      />
      <View style={styles.followerInfo}>
        <Text style={styles.followerName}>{item.name}</Text>
        <Text style={styles.followerLogin}>@{item.follower_login}</Text>
      </View>
    </View>
  );

  const getFollowerKey = (item) => `follower-${item.follower_id}`;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Seguidores</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Feather name="x" size={24} color="#2F80ED" />
            </TouchableOpacity>
          </View>
          {isLoading ? (
            <ActivityIndicator size="large" color="#2F80ED" />
          ) : followers.length > 0 ? (
            <FlatList
              data={followers}
              renderItem={renderFollowerItem}
              keyExtractor={getFollowerKey}
              style={styles.followersList}
            />
          ) : (
            <Text style={styles.noFollowersText}>
              Nenhum seguidor encontrado.
            </Text>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default FollowersModal;
