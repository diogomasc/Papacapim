import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "#2F80ED",
  },
  closeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    color: "#2F80ED",
    marginLeft: 8,
    fontSize: 16,
  },
  postDetailContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e8ed",
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
  postContent: {
    marginBottom: 10,
  },
  postFooter: {
    flexDirection: "row",
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeButtonText: {
    marginLeft: 5,
    fontSize: 14,
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  actionText: {
    marginLeft: 5,
    color: "#657786",
    fontSize: 14,
  },
  commentInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  commentInput: {
    flex: 1,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    maxHeight: 100,
    backgroundColor: "#f9f9f9",
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#2F80ED",
    padding: 10,
    borderRadius: 50,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  commentsHeader: {
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 15,
  },
  commentContainer: {
    paddingLeft: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e8ed",
  },
  commentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  commentContent: {
    color: "#333",
  },
});
