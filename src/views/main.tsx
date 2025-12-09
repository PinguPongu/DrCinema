import { useCinmeas, useMovies } from "@/hooks/data";
import { View, ScrollView } from "react-native";
import  { Cinema }  from "@/components/cinema/cinema"

export default function Home() {
  const movies = useMovies();
  const cinemas = useCinmeas();

  return (
    <ScrollView>
        <View>
            {cinemas.map((cinema) => (
                <Cinema key={cinema.id} cinema={cinema} movies={movies}/>
            ))}
        </View>
    </ScrollView>
  );
}
