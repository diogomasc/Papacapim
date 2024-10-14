import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./styles";

const SearchUser = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { user: currentUser } = useAuth();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        fetchUsers();
      } else {
        setUsers([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await api.get("/users", {
        params: {
          search: searchQuery,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenProfile = (userData) => {
    navigation.navigate("Profile", { userLogin: userData.login });
  };

  const renderUserItem = ({ item }) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => handleOpenProfile(item)}
    >
      <Feather name="user" size={24} color="#2F80ED" />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userLogin}>@{item.login}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="users" size={24} color="#2F80ED" />
        <Text style={styles.description}>
          Procurando um usuário? Comece a escrever o nome e vamos procurá-lo!
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar usuários..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Feather
          name="search"
          size={24}
          color="#2F80ED"
          style={styles.searchIcon}
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#2F80ED" />
      ) : (
        <FlatList
          data={users}
          renderItem={renderUserItem}
          keyExtractor={(item) =>
            item.login || item.id?.toString() || Math.random().toString()
          }
          ListEmptyComponent={
            searchQuery ? (
              <Text style={styles.noResults}>Nenhum usuário encontrado</Text>
            ) : null
          }
        />
      )}
    </View>
  );
};

export default SearchUser;
