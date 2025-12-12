import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9fafb",
  },

  
  headerRow: {
    flexDirection: "row",
    gap: 16,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 8,
    backgroundColor: "#e5e7eb",
  },
  headerText: {
    flex: 1,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },
  subline: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 8,
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
  genreText: {
    fontSize: 12,
    color: "#374151",
  },

  
  certificateRow: {
    marginTop: 4,
  },
  certificateText: {
    fontSize: 13,
    color: "#111827",
    fontWeight: "500",
  },

  
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },

  
  showtimeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  showtimeChip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#d1d5db",
    backgroundColor: "#ffffff",
  },
  showtimeText: {
    fontSize: 13,
    color: "#111827",
  },

  
  plot: {
    fontSize: 14,
    lineHeight: 20,
    color: "#111827",
  },

  metaLine: {
    fontSize: 14,
    color: "#111827",
    marginBottom: 2,
  },
  metaLabel: {
    fontWeight: "600",
  },

  trailerContainer: {
    marginTop: 16,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#000",
    aspectRatio: 16 / 9,
  },
});