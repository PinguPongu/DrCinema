import { Movie } from "@/components/movies/movies";
import { useUpcomingMovies } from "@/hooks/data";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";


export default function Upcoming() {
  const upcomingMovies = useUpcomingMovies();
  console.log(upcomingMovies);
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
