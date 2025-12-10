import { useCinemas, useMovies } from "@/hooks/data";
import { ScrollView, View } from "react-native";
import  { Cinema }  from "@/components/cinema/cinema"
import { useMemo, useState } from "react"
import  Navbar  from "@/components/navbar/navbar"
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [search, setSearch] = useState("");
  const movies = useMovies();
  const cinemas = useCinemas();

  const filteredMovies = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return movies;

    return movies.filter((c) => {
      const title = c.title?.toLowerCase() ?? "";
      const rating_imdb = c.omdb?.[0]?.imdbRating?.toLowerCase() ?? "";
      const rating_rotten = c.omdb?.[0]?.tomatoRating?.toLowerCase() ?? "";
      const actors = c.omdb?.[0]?.Actors?.toLowerCase() ?? "";
      const directors = c.omdb?.[0]?.Director?.toLowerCase() ?? "";
      const pg = c.certificate?.is?.toLowerCase() ?? "";
      return title.includes(term) || rating_imdb.includes(term) || rating_rotten.includes(term) || actors.includes(term) || directors.includes(term) || pg.includes(term);
    });
  }, [movies, search]);

  return (
    <SafeAreaView>
      <ScrollView>
          <View>
            <Navbar value={search} onChangeText={setSearch} />
              {cinemas.map((cinema) => (
                  <Cinema key={cinema.id} cinema={cinema} movies={filteredMovies}/>
              ))}
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}
