import { Movie } from "@/components/movies/movies";
import { useMovies, useUpcomingMovies } from "@/hooks/data";
import { RootState } from "@/src/redux/store";
import { Movie as MovieType } from "@/src/types/types";
import DraggableFlatList from "react-native-draggable-flatlist";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../redux/favorites/favoritesSlice";
import { saveFavoritesToStorage } from "../services/favoritesStorage";
import { Text,View } from "react-native";

type FavoriteMovieItem = {
  key: string;
  movie: MovieType;
};

export default function Favorites() {
  const dispatch = useDispatch();
  const movies = useMovies();
  const upComingMovies =useUpcomingMovies();
  const favoriteIds = useSelector((state: RootState) => state.favorites.ids);

  const favoriteMovies: FavoriteMovieItem[] = favoriteIds
    .map(id => {
      const movie =
        movies.find(m => String(m.id) === id) ??
        upComingMovies.find(m => String(m.id) === id);
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text>Favorites</Text>
      <DraggableFlatList
        data={favoriteMovies}
        keyExtractor={item => item.key}
        onDragEnd={handleDragEnd}
        renderItem={({ item, drag }) => (
          <View>
            <Text>{2}</Text>
            <Movie movie={item.movie} onLongPress={drag} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
