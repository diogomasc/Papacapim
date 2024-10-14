import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "#2F80ED",
  },
  closeButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#2F80ED",
    marginLeft: 8,
    fontSize: 16,
  },
  profileInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  login: {
    fontSize: 18,
    color: "#666",
    marginBottom: 5,
  },
  joinDate: {
    fontSize: 14,
    color: "#888",
    marginBottom: 10,
  },
  followButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginVertical: 10,
  },
  defaultButton: {
    backgroundColor: "#2F80ED",
  },
  followingButton: {
    backgroundColor: "#E74C3C",
  },
  followButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  followersButton: {
    marginTop: 10,
  },
  followersText: {
    fontSize: 16,
    color: "#2F80ED",
    textAlign: "center",
  },
  postsHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  postWrapper: {
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    overflow: "hidden",
  },
  emptyList: {
    textAlign: "center",
    color: "gray",
  },
});

export default styles;
