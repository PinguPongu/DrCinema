import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  topContainer:{
    height:100,
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

  titleRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 4, // small gap before the year
  },
  year: {
    fontSize: 14,
    color: "#6b7280",
  },

  genres: {
    marginTop: 2,
  },
  genreText: {
    fontSize: 14,
    color: "#111827",
  },

  certificate: {
    width: 20,
    height: 20,
    marginTop: 4,
  },
});
