import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "https://api.papacapim.just.pro.br",
});

api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        config.headers["x-session-token"] = token;
        console.log(`[API] Requisição para ${config.url} com token: ${token}`);
      } else {
        console.log("[API] Token não encontrado no AsyncStorage.");
      }
    } catch (error) {
      console.log("[API] Erro ao recuperar o token:", error);
    }
    return config;
  },
  (error) => {
    console.error("[API] Erro na configuração da requisição:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(`[API] Resposta bem-sucedida de ${response.config.url}`);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(
        `[API] Erro ${error.response.status} em ${error.config.url}:`,
        error.response.data
      );
    } else if (error.request) {
      console.error("[API] Sem resposta recebida:", error.request);
    } else {
      console.error("[API] Erro ao configurar requisição:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
