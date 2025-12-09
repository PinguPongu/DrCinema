import { View, Text, TouchableOpacity } from "react-native";
import { Cinema as CinemaType } from "@/src/types/types";
import { styles } from "./styles";
import { useRouter } from "expo-router";

type CinemaProps = {
  cinema: CinemaType,
};


export default function CinemaItem({ cinema } : CinemaProps) {
  const router = useRouter();
  
  return (
    <View>
      <TouchableOpacity
        style={styles.cinemaContainer}
        onPress={() => router.push({
          pathname: "/cinema-details",
          params: { id: String(cinema.id) }})}
        accessibilityLabel="Go to lists"
        accessibilityRole="button"
      >
        <Text style={styles.title}>{cinema.name}</Text>
        <Text style={styles.website}>{cinema.website}</Text>
      </TouchableOpacity>
    </View>
  )
}
