import { Cinema as CinemaType } from "@/src/types/types";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Cinema } from "../cinema/cinema";
import { useMovies } from "@/hooks/data";
import { IconSymbol } from '@/components/ui/icon-symbol';

type CinemaProps ={
  cinema: CinemaType;
}


export default function CinemaDetailsItem({ cinema } : CinemaProps) {
  const movies = useMovies();
  const regex = /(<([^>]+)>)/gi;
  let cinemaDescription = "";
  if (cinema.description !== null) {
    cinemaDescription = cinema.description.replace(regex, "");
  };
  
  console.log(cinema);
  return (
    <View style={styles.topContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{cinema.name}</Text>
      </View>
      {cinemaDescription.length !== 0 && (
        <View>
          <Text style={styles.descriptionHeading}>Um {cinema.name}:</Text>
          <Text style={styles.description}>{cinemaDescription}</Text>
        </View>
      )}
      <View style={styles.smallContainer}>
        <IconSymbol name="globe" color={"black"}></IconSymbol>
        <Text style={styles.extra}>{cinema.address}, </Text>
        <Text>{cinema.city}</Text>
      </View>
      <View style={styles.smallContainer}>
        <IconSymbol name="phone" color={"black"}></IconSymbol>
        <Text style={styles.extra}>{cinema.phone}</Text>
      </View>
      <View style={styles.smallContainer}>
        <IconSymbol name="link" color={"black"}></IconSymbol>
        <Text style={styles.extra}>{cinema.website}</Text>
      </View>
      <Cinema cinema={cinema} movies={movies}/>

    </View>
  )
}
