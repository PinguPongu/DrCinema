import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  topContainer:{
    // height:150,
    // paddingVertical: 20,
    marginVertical:10,
  },
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
  genreRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 8,
  },
  genreChip: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    backgroundColor: "#e5e7eb",
  },
  titleRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 4,
  },
  year: {
    fontSize: 14,
    color: "#6b7280",
  },

  genres: {
    marginTop: 2,
  },
  genreText: {
    fontSize: 12,
    color: "#111827",
  },

  certificate: {
    width: 18,
    height: 18,
    marginTop: 4,
  },
});
