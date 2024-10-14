import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 40,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
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
  subHeader: {
    flexDirection: "row",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
  },
  input: {
    flex: 1,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: "top",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  charCount: {
    fontSize: 16,
    color: "#555",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 16,
  },
});

export default styles;
