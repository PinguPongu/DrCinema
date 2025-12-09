import { Cinema as CinemaType } from "@/src/types/types";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Cinema } from "../cinema/cinema";
import { useMovies } from "@/hooks/data";

type CinemaProps ={
  cinema: CinemaType;
}


export default function CinemaDetailsItem({ cinema } : CinemaProps) {
  const movies = useMovies();
  
  console.log(cinema);
  return (
    <View style={styles.topContainer}>
      <Text>{cinema.name}</Text>
      <Text>{cinema.description}</Text>
      <Text>{cinema.address}</Text>
      <Text>{cinema.city}</Text>
      <Text>{cinema.phone}</Text>
      <Text>{cinema.website}</Text>
      <Cinema cinema={cinema} movies={movies}/>

    </View>
  )
}
