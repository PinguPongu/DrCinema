import { Movie } from "@/components/movies/movies";
import { useMovies } from "@/hooks/data";
import { RootState } from "@/src/redux/store";
import { Movie as MovieType } from "@/src/types/types";
import { Text, View, StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../redux/favorites/favoritesSlice";
import { saveFavoritesToStorage } from "../../services/favoritesStorage";

type FavoriteMovieItem = {
  key: string;
  movie: MovieType;
};

export default function Favorites() {
  const dispatch = useDispatch();
  const movies = useMovies();
  const favoriteIds = useSelector((state: RootState) => state.favorites.ids);

  const favoriteMovies: FavoriteMovieItem[] = favoriteIds
    .map(id => {
      const movie = movies.find(m => String(m.id) === id);
      if (!movie) return null;
      return { key: id, movie };
    })
    .filter((m): m is FavoriteMovieItem => m !== null);

  const handleDragEnd = async ({ data }: { data: FavoriteMovieItem[] }) => {
    const newOrder = data.map(item => item.key);
    dispatch(setFavorites(newOrder));
    await saveFavoritesToStorage(newOrder);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favorites</Text>

      <DraggableFlatList
        data={favoriteMovies}
        keyExtractor={item => item.key}
        onDragEnd={handleDragEnd}
        renderItem={({ item, drag, getIndex}) => (
          <View>
            <Text style={styles.number}>{(getIndex() ?? 0) +1}.</Text>
            <Movie movie={item.movie} onLongPress={drag} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },


  title: {
    fontSize: 28,
    fontWeight: "800",
    marginVertical: 14,

  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 14,
    marginBottom: 12,
    borderRadius: 12,
  },

  number: {
    fontSize: 20,
    fontWeight: "700",
    color: "#999999ff",
    marginRight: 14,
  },
});
