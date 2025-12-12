import { Cinema as CinemaType } from "@/src/types/types";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Cinema } from "../cinema/cinema";
import { useMovies } from "@/hooks/data";
import { IconSymbol } from '@/components/ui/icon-symbol';
import { MaterialIcons } from "@expo/vector-icons";

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
        <MaterialIcons name="location-pin" color={"black"} size={25}></MaterialIcons>
        <Text style={styles.extra}>{cinema.address}, </Text>
        <Text>{cinema.city}</Text>
      </View>
      <View style={styles.smallContainer}>
        <MaterialIcons name="phone" color={"black"} size={25}></MaterialIcons>
        <Text style={styles.extra}>{cinema.phone}</Text>
      </View>
      <View style={styles.smallContainer}>
        <MaterialIcons name="link" color={"black"} size={25}></MaterialIcons>
        <Text style={styles.extra}>{cinema.website}</Text>
      </View>
      <Cinema cinema={cinema} movies={movies}/>
    </View>
  )
}
