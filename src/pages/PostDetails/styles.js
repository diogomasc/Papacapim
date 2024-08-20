import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#1E1E1E",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backButtonText: {
    color: "#2F80ED",
    fontSize: 16,
    marginLeft: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    flexDirection: "row",
  },
  userName: {
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 5,
  },
  userHandle: {
    color: "gray",
    marginLeft: 5,
  },
  timestampText: {
    color: "gray",
    marginLeft: 5,
  },
  content: {
    color: "white",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  countText: {
    color: "gray",
    fontSize: 16,
    marginLeft: 5,
  },
  separator: {
    height: 1,
    backgroundColor: "#2F80ED",
  },
  commentInputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 10,
    marginBottom: 15,
  },
  commentInput: {
    flex: 1,
    minHeight: 40,
    maxHeight: 120,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    color: "white",
    textAlignVertical: "top",
  },
  commentSubmitButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#2F80ED",
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  commentSubmitButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  commentsSection: {
    marginTop: 20,
  },
  commentsSectionTitle: {
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  commentCard: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#252525",
    borderRadius: 10,
  },
  commentUser: {
    fontWeight: "bold",
    color: "#2F80ED",
    marginBottom: 5,
  },
  commentContent: {
    color: "white",
  },
});

export default styles;
