import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  description: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    paddingRight: 40,
  },
  searchIcon: {
    position: "absolute",
    right: 10,
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  userInfo: {
    marginLeft: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userLogin: {
    fontSize: 14,
    color: "#666",
  },
  noResults: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },
});

export default styles;
