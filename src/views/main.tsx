import { useCinemas, useMovies } from "@/hooks/data";
import { ScrollView } from "react-native";
import  { Cinema }  from "@/components/cinema/cinema"
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const movies = useMovies();
  const cinemas = useCinemas();

  return (
    <ScrollView>
        <SafeAreaView>
            {cinemas.map((cinema) => (
                <Cinema key={cinema.id} cinema={cinema} movies={movies}/>
            ))}
        </SafeAreaView>
    </ScrollView>
  );
}
