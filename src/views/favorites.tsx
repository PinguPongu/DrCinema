import { useCinmeas, useMovies } from "@/hooks/data";
import { View, ScrollView, Text } from "react-native";
import  { Cinema }  from "@/components/cinema/cinema"

export default function Home() {
  const movies = useMovies();
  const cinemas = useCinmeas();

  return (
    <ScrollView>
      <Text>HALLÓ</Text>
        <View>
            {cinemas.map((cinema) => (
                <Cinema key={cinema.id} cinema={cinema} movies={movies}/>
            ))}
        </View>
    </ScrollView>
  );
}
