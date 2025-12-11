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
    onLongPress?: () => void;
};

export function Movie({ movie, cinemaId, onLongPress }: movieProps) {
  const handlePress = () => {
    router.push({
      pathname: "/movie-details",
      params: {
        cinemaId: String(cinemaId),
        movie: JSON.stringify(movie),
        movieId: String(movie.id)
      },
    });
  };

  const dispatch = useDispatch();
  const favIds = useSelector((state: RootState) => state.favorites.ids);
  const movieIdString = movie.id.toString();
  const isFavorite = favIds.includes(movieIdString);

  const toggleFavorite = async () => {
    let updated;

    if (isFavorite) {
      updated = favIds.filter((id) => id !== movieIdString);
      dispatch(removeFavorite(movieIdString));
    } else {
      updated = [...favIds, movieIdString];
      dispatch(addFavorite(movieIdString));
    }

    await saveFavoritesToStorage(updated);
  };

  return (
      <TouchableOpacity
        onPress={handlePress}
        onLongPress={onLongPress}
        activeOpacity={0.9}
        style={styles.topContainer}
      >
        <TouchableOpacity
          style={{ position: "absolute", top: 8, right: 8, zIndex: 20 }}
          onPress={(e) => {
            e.stopPropagation();
            toggleFavorite();
          }}
        >
          <Ionicons
            name={isFavorite ? "star" : "star-outline"}
            size={28}
            color={isFavorite ? "#FFD700" : "#ccc"}
          />
        </TouchableOpacity>

        <View style={styles.container}>
          <Image source={{ uri: movie.poster }} style={styles.poster} />
          <View style={styles.info}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
            <View style={styles.genreRow}>
              {movie.genres.map((genre) => (
                <View key={genre.ID} style={styles.genreChip}>
                  <Text style={styles.genreText}>{genre.Name}</Text>
                </View>
              ))}
            </View>
            <Image source={{ uri: movie.certificateImg }} style={styles.certificate} />
          </View>
        </View>
      </TouchableOpacity>
  );
}
