import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  backButtonText: {
    color: "#2F80ED",
    fontSize: 16,
    marginLeft: 8,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#101010",
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginLeft: 15,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 18,
    marginLeft: 10,
  },
  containerForm: {
    backgroundColor: "#101010",
    flex: 1,
    paddingStart: "5%",
    paddingEnd: "5%",
    paddingBottom: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  disabledInput: {
    opacity: 0.5,
  },
  textArea: {
    maxHeight: 120,
  },
  message: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#2F80ED",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#444444",
    marginVertical: 16,
  },
});

export default styles;
