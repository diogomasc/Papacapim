import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const SIDEBAR_WIDTH = width * 0.7;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    height: "100%",
    backgroundColor: "#101010",
    padding: 20,
    position: "absolute",
    left: 0,
    top: 0,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  nameUser: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  idUserName: {
    color: "#6B6572",
    fontSize: 14,
    marginBottom: 10,
  },
  followContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  followText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: "#6B6572",
    marginVertical: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 10,
  },
  configButton: {
    position: "absolute",
    bottom: 30,
    left: 20,
  },
});

export default styles;
