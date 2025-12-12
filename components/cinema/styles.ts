import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  cinemaContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  cinemaHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cinemaName: {
    fontSize: 18,
    fontWeight: "700",
  },
  cinemaBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "#111827", // dark grey / near black
  },
  cinemaBadgeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },
  movieList: {
    marginTop: 4,
  },
  movieRow: {
    paddingVertical: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e5e7eb",
  },
  movieTitle: {
    fontSize: 15,
  },
});
