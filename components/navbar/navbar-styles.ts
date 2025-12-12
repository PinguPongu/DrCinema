import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  topContainer: {

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    margin: 8,
    paddingVertical: 8,

  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  icon: {
    marginRight: 8,
    opacity: 0.6,
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    fontFamily: "Montserrat",
    color: "#888686ff"
  },
  addButton: {
    backgroundColor: "#e2e1e1ff",
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    elevation: 3,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 0,
  },
});