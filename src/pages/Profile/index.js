import React, { useState, useEffect } from "react";
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DummyData, DummyDataUser, DummyUserAuthSession } from "../../DummyData/DummyData";
import styles from "./styles";

const Profile = ({ route, navigation }) => {
  const { idUserName } = route.params || {};
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  const authenticatedUser = DummyUserAuthSession[0]; // Usuário autenticado da sessão
  const isCurrentUser = idUserName === authenticatedUser.idUserName;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const user = idUserName ? DummyDataUser[idUserName] : authenticatedUser; // Se o idUserName estiver presente, buscar o usuário correspondente
        if (user) {
          setUserData(user);
        } else {
          throw new Error("Usuário não encontrado");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [idUserName]);

  if (isLoading) {
    return <View style={styles.container}><Text>Carregando...</Text></View>;
  }

  if (error) {
    return <View style={styles.container}><Text>Erro: {error}</Text></View>;
  }

  if (!userData) {
    return <View style={styles.container}><Text>Nenhum dado encontrado</Text></View>;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.bannerContainer}>
          <Image
            style={styles.bannerImage}
            source={{ uri: userData.bannerImageUri || "https://example.com/default-banner.jpg" }}
          />
          <TouchableOpacity style={styles.profileImageContainer}>
            <Image
              style={styles.profileImage}
              source={{ uri: userData.imageOfUserProfileUri || "https://example.com/default-profile.jpg" }}
            />
          </TouchableOpacity>
        </View>

        {/* Botão de Voltar */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome5 name="arrow-left" size={16} color="#FFFFFF" />
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>

        {/* Botão Seguir/Editar */}
        {isCurrentUser ? (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate("Settings")}
          >
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.followButton}
            onPress={() => setIsFollowing(!isFollowing)}
          >
            <Text style={styles.followButtonText}>
              {isFollowing ? "Deixar de Seguir" : "Seguir"}
            </Text>
          </TouchableOpacity>
        )}

        {/* Informações do Usuário */}
        <View style={styles.infoContainer}>
          <Text style={styles.nameUser}>{userData.nameUser}</Text>
          <Text style={styles.idUserName}>@{userData.idUserName}</Text>
          <Text style={styles.biographyText}>{userData.biography}</Text>
          {userData.Address?.[0]?.country && (
            <Text style={styles.infoText}>
              <FontAwesome5 name="map-marker-alt" size={16} color="#FFFFFF" /> {userData.Address[0].country}, {userData.Address[0].city}, {userData.Address[0].state}
            </Text>
          )}
          {userData.webSite && (
            <TouchableOpacity onPress={() => handlePressLink(userData.webSite)}>
              <Text style={styles.infoText}>
                <FontAwesome5 name="link" size={16} color="#FFFFFF" /> {userData.webSite}
              </Text>
            </TouchableOpacity>
          )}
          <Text style={styles.infoText}>
            <FontAwesome5 name="birthday-cake" size={16} color="#FFFFFF" /> {userData.dateOfBirth}
          </Text>
          <View style={styles.followContainer}>
            <Text style={styles.followText}>{userData.following} Seguindo</Text>
            <Text style={styles.followText}>{userData.followers} Seguidores</Text>
          </View>
        </View>

        {/* Seção de Posts */}
        <View style={styles.divider} />
        <View style={styles.postsContainer}>
          <Text style={styles.postsTitle}>Posts</Text>
          {userData.post && userData.post.length > 0 ? (
            userData.post.map((postId) => {
              const post = DummyData.find((p) => p.id === postId);
              return post ? (
                <View key={post.id} style={styles.post}>
                  <Text style={styles.postContent}>{post.contentPost}</Text>
                  {post.imageOfPostUri && (
                    <Image style={styles.postImage} source={{ uri: post.imageOfPostUri }} />
                  )}
                  <Text style={styles.postStats}>{post.likesCount} Likes | {post.commentsCount} Comentários</Text>
                </View>
              ) : null;
            })
          ) : (
            <Text style={styles.noPostsText}>Nenhum post disponível.</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};


export default Profile;