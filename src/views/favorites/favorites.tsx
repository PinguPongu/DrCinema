import { ShareFavoriteButton } from "@/components/linking/linking";
import { Movie } from "@/components/movies/movies";
import { useMovies, useUpcomingMovies } from "@/hooks/data";
import { RootState } from "@/src/redux/store";
import { Movie as MovieType } from "@/src/types/types";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../redux/favorites/favoritesSlice";
import { saveFavoritesToStorage } from "../../services/favoritesStorage";
import { styles } from "./styles";


type FavoriteMovieItem = {
  key: string;
  movie: MovieType;
};

export default function Favorites() {

  const { movieId } = useLocalSearchParams<{ movieId?:string }>();
  
  const dispatch = useDispatch();
  const movies = useMovies();
  const upComingMovies =useUpcomingMovies();

  const favoriteIds = useSelector((state: RootState) => state.favorites.ids);

  const usedIds: string[] = movieId ? JSON.parse(movieId) : favoriteIds; 


  const favoriteMovies: FavoriteMovieItem[] = usedIds
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
      {movieId !== "undefined" && 
        <ShareFavoriteButton movieId={usedIds}/>
      }
    </SafeAreaView>
  );
}
