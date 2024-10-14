import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  profileInfo: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  login: {
    fontSize: 18,
    color: "gray",
  },
  createdAt: {
    fontSize: 14,
    color: "gray",
    marginTop: 8,
  },
  followersContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  followersInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  followersButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  followersText: {
    fontSize: 16,
    color: "#007AFF",
    marginLeft: 5,
    textAlign: "center",
  },
  postsHeader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  postContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    minHeight: 100,
    maxHeight: 150,
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  postContent: {
    flex: 1,
    marginRight: 10,
  },
  postWrapper: {
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    overflow: "hidden",
  },
  deleteButton: {
    padding: 10,
  },
  deleteButton: {
    marginLeft: 10,
  },
  emptyList: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
});

export default styles;
