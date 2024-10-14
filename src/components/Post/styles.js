import { StyleSheet } from "react-native";

export default StyleSheet.create({
  postContainer: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e8ed",
  },
  postContent: {
    flex: 1,
  },
  headerPost: {
    flexDirection: "row",
    marginBottom: 10,
  },
  authorInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  authorName: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 6,
  },
  authorLogin: {
    fontSize: 14,
    color: "#666",
  },
  postMessage: {
    marginBottom: 10,
  },
  postFooter: {
    flexDirection: "row",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  actionText: {
    marginLeft: 5,
    color: "#657786",
  },
  deleteButton: {
    padding: 10,
    justifyContent: "center",
  },
});
