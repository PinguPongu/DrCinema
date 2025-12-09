import { useUpcomingMovies } from "@/hooks/data";
import { ScrollView } from "react-native";
import { Movie } from "@/components/movies/movies";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Upcoming() {
  const upcomingMovies = useUpcomingMovies();

  return (
    <ScrollView>
        <SafeAreaView style={styles.topContainer}>
            {upcomingMovies.map((movie) => (
              <Movie key={movie.id} movie={movie}/>
            ))}
        </SafeAreaView>
    </ScrollView>
  );
}
