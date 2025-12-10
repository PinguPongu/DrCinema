import { Movie } from "@/components/movies/movies";
import { useUpcomingMovies } from "@/hooks/data";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";


export default function Upcoming() {
  const upcomingMovies = useUpcomingMovies();
  const sortedMovies = [...upcomingMovies].sort((a, b) =>
    a.year.localeCompare(b.year)
  );
  
  return (
    <ScrollView>
        <SafeAreaView style={styles.topContainer}>
            {sortedMovies.map((movie) => (
              <Movie key={movie.id} movie={movie}/>
            ))}         
        </SafeAreaView>
    </ScrollView>
  );
}
