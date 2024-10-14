import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStoragedData();
  }, []);

  const loadStoragedData = async () => {
    try {
      const storagedUser = await AsyncStorage.getItem("user");
      const storagedToken = await AsyncStorage.getItem("token");

      console.log("Recuperando dados do AsyncStorage...");
      console.log("Usuário armazenado:", storagedUser);
      console.log("Token armazenado:", storagedToken);

      if (storagedUser && storagedToken) {
        const parsedUser = JSON.parse(storagedUser);
        setUser(parsedUser);
        api.defaults.headers["x-session-token"] = storagedToken;
        console.log("Usuário e token configurados com sucesso:", parsedUser);

        try {
          if (parsedUser.login) {
            await api.get("/users/" + parsedUser.login);
          } else {
            console.log("Usuário não encontrado no AsyncStorage.");
            await signOut();
          }
        } catch (error) {
          if (error.response && error.response.status === 401) {
            console.log("Token expirado, fazendo logout...");
            await signOut();
          }
        }
      } else {
        console.log("Usuário ou token não encontrados.");
      }
    } catch (error) {
      console.error("Erro ao carregar dados do AsyncStorage:", error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (login, password) => {
    try {
      const response = await api.post("/sessions", { login, password });
      const userData = {
        id: response.data.id,
        login: response.data.user_login,
        token: response.data.token,
      };
      setUser(userData);
      api.defaults.headers["x-session-token"] = userData.token;
      await AsyncStorage.setItem("user", JSON.stringify(userData));
      await AsyncStorage.setItem("token", userData.token);
      console.log("Dado do usuário após login: ", userData);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };
  const signOut = async () => {
    try {
      await AsyncStorage.removeItem("user");
      await AsyncStorage.removeItem("token");
      setUser(null);
      delete api.defaults.headers["x-session-token"];
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const register = async (userData) => {
    try {
      const response = await api.post("/users", { user: userData });
      return response.data;
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      throw error;
    }
  };

  const updateUser = async (userData) => {
    try {
      const response = await api.patch(`/users/${user.login}`, {
        user: userData,
      });
      const updatedUser = { ...user, ...response.data };
      setUser(updatedUser);
      await AsyncStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      throw error;
    }
  };

  const deleteUser = async () => {
    try {
      await api.delete(`/users/${user.login}`);
      await signOut();
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signIn,
        signOut,
        register,
        updateUser,
        deleteUser,
        loadStoragedData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
