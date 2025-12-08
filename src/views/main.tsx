import { useCinmeas, useMovies } from "@/hooks/data";
import { Text } from "react-native";

export default function Home() {
  const movies = useMovies();
  const cinemas = useCinmeas();


  return (
    <>
      {cinemas.map(movie => (
        <Text key={movie.id}>{movie.name}</Text>
      ))}


    </>
  );
}
