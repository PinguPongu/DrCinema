import { addFavorite, removeFavorite } from "@/src/redux/favorites/favoritesSlice";
import { RootState } from "@/src/redux/store";
import { saveFavoritesToStorage } from "@/src/services/favoritesStorage";
import { Movie as MovieType } from "@/src/types/types";
import { Ionicons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { router } from "expo-router";

type movieProps = {
    movie: MovieType,
    cinemaId?: number
};

export function Movie({movie, cinemaId} : movieProps){
  const handlePress = () => {
      router.push({
          pathname: "/movie-details",
          params: {
              cinemaId: String(cinemaId),
              movie: JSON.stringify(movie)
          }
      })
  }
  const dispatch = useDispatch();
  const favIds = useSelector((state: RootState) => state.favorites.ids);
  const movieIdString = movie.id.toString();
  const isFavorite = favIds.includes(movieIdString);
  

  const toggleFavorite = async () => {
    let updated;

    if (isFavorite) {
      updated = favIds.filter(id => id !== movieIdString);
      dispatch(removeFavorite(movieIdString));
    } else {
      updated = [...favIds, movieIdString];
      dispatch(addFavorite(movieIdString));
    }

    await saveFavoritesToStorage(updated);
  };

  return (
    <View>
      <TouchableOpacity
        style={{ position: "absolute", top: 8, right: 8, zIndex: 20 }}
        onPress={toggleFavorite}
      >
        <Ionicons
          name={isFavorite ? "star" : "star-outline"}
          size={28}
          color={isFavorite ? "#FFD700" : "#ccc"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        <View style={styles.container}>
          <Image
            source={{ uri: movie.poster }}
            style={styles.poster}
            resizeMode="cover"
          />
          <View style={styles.info}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
            <Text style={styles.year}>{movie.durationMinutes} min</Text>
            <Image source={{ uri: movie.certificateImg }} style={styles.certificate} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}