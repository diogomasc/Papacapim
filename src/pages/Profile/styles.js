import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  content: {
    flexGrow: 1,
    // padding: 16,
  },
  bannerContainer: {
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: 100,
    backgroundColor: "#6B6572",
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#151515",
    padding: 8,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 5,
  },
  profileImageContainer: {
    position: "absolute",
    bottom: -40,
    left: "50%",
    marginLeft: -40,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  editButton: {
    backgroundColor: "#2F80ED",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    alignSelf: "flex-end",
  },
  followButton: {
    backgroundColor: "#2F80ED",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    alignSelf: "flex-end",
  },
  editButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  followButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  nameUser: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  idUserName: {
    color: "#6B6572",
    fontSize: 16,
    marginBottom: 6,
    textAlign: "center",
  },
  biographyText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  infoContainer: {
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  infoText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  iconInfoContainer: {
    marginRight: 8,
  },
  followContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  followText: {
    color: "#6B6572",
    fontSize: 14,
    marginHorizontal: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#6B6572",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  postsContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  postsTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  noPostsText: {
    color: "#6B6572",
    fontSize: 16,
    textAlign: "center",
  },
  postCard: {
    marginBottom: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#252525",
  },
  postContent: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 10,
  },
  // postImage: {
  // 	width: "100%",
  // 	height: 200,
  // 	marginBottom: 10,
  // },
  postStats: {
    color: "#6B6572",
    fontSize: 14,
    textAlign: "center",
  },
});

export default styles;
