import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
 gap: 12,
  },
  poster: {
    width: 60,
    height: 90,
    borderRadius: 6,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  // If you want to use the age rating icon later:
  certificate: {
    width: 20,
    height: 20,
    marginTop: 4,
  },
   year: {
    marginTop: 2,
    fontSize: 14,
    color: "#6b7280",
  },
});