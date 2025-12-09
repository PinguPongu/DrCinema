import { Movie } from "@/components/movies/movies";
import { useMovies } from "@/hooks/data";
import { RootState } from "@/src/redux/store";
import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Favorites() {
  const movies = useMovies();
  const favoriteIds = useSelector((state: RootState) => state.favorites.ids);
  const favoriteMovies = movies.filter(m => favoriteIds.includes(String(m.id)));
  const sortedMovies = [...favoriteMovies].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 16 }}>
          {sortedMovies.length === 0 && (
            <Text>No favorites yet</Text>
          )}

          {sortedMovies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
