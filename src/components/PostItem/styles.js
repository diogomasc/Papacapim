import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    flexDirection: "row",
    paddingBottom: 5,
    borderBottomColor: "#2A2E30",
    borderBottomWidth: 1,
    backgroundColor: "#1E1E1E",
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  profileWrapper: {
    margin: 8,
  },
  profilePicture: {
    height: 35,
    width: 35,
    borderRadius: 15,
  },
  contentWrapper: {
    flex: 1,
    paddingVertical: 6,
    marginLeft: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
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
  postItemContent: {
    marginTop: 5,
    marginBottom: 8,
  },
  postItemBody: {
    color: "white",
  },
  postItemImage: {
    width: "100%",
    height: 200,
    marginTop: 5,
    borderRadius: 10,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  countText: {
    color: "gray",
    marginLeft: 5,
  },
});
