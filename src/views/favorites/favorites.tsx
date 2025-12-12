import { ShareFavoriteButton } from "@/components/linking/linking";
import { Movie } from "@/components/movies/movies";
import { useMovies, useUpcomingMovies } from "@/hooks/data";
import { RootState } from "@/src/redux/store";
import { Movie as MovieType } from "@/src/types/types";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../redux/favorites/favoritesSlice";
import { saveFavoritesToStorage } from "../../services/favoritesStorage";
import { styles } from "./styles";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

type FavoriteMovieItem = {
  key: string;
  movie: MovieType;
};

export default function Favorites() {
  const { movieId } = useLocalSearchParams<{ movieId?: string }>();
  const router =useRouter();

  const dispatch = useDispatch();
  const movies = useMovies();
  const upcomingMovies = useUpcomingMovies();
  const favoriteIds = useSelector((state: RootState) => state.favorites.ids);

  // Tracks whether you're viewing a shared list
  const [sharedMode, setSharedMode] = useState(false);

  // When screen comes into focus, determine which mode we’re in
  useFocusEffect(
    useCallback(() => {
      if (movieId) setSharedMode(true);
      else setSharedMode(false);

      return () => {
        if (movieId) {
          router.setParams({ movieId: undefined });
        }
      };
    }, [movieId, router])
  );

  // Determine which favorite IDs to use
  const usedIds: string[] =
    sharedMode && movieId ? JSON.parse(movieId) : favoriteIds;

  // Build movie objects from IDs
  const favoriteMovies: FavoriteMovieItem[] = usedIds
    .map((id) => {
      const movie =
        movies.find((m) => String(m.id) === id) ??
        upcomingMovies.find((m) => String(m.id) === id);

      if (!movie) return null;
      return { key: id, movie };
    })
    .filter((m): m is FavoriteMovieItem => m !== null);

  const handleDragEnd = async ({
    data,
  }: {
    data: FavoriteMovieItem[];
  }) => {
    if (sharedMode) return; // Prevent editing shared lists

    const newOrder = data.map((item) => item.key);
    dispatch(setFavorites(newOrder));
    await saveFavoritesToStorage(newOrder);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {sharedMode ? "Shared Favorites" : "Favorites"}
      </Text>

      <DraggableFlatList
        data={favoriteMovies}
        keyExtractor={(item) => item.key}
        onDragEnd={handleDragEnd}
        renderItem={({ item, drag, getIndex }) => (
          <View>
            <Text style={styles.number}>{(getIndex() ?? 0) + 1}.</Text>
            <Movie movie={item.movie} onLongPress={sharedMode ? undefined : drag} />
          </View>
        )}
      />

      {!sharedMode && (
        <ShareFavoriteButton movieId={usedIds} />
      )}
    </SafeAreaView>
  );
}
