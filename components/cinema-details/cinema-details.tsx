import { Cinema as CinemaType } from "@/src/types/types";
import { View, Text } from "react-native";
import { styles } from "./styles";

type CinemaProps ={
  cinema: CinemaType;
}


export default function CinemaDetails({ cinema } : CinemaProps) {
  return (
    <View style={styles.topContainer}>
      <Text>{cinema.name}</Text>
      <Text>{cinema.description}</Text>
      <Text>{cinema.address}</Text>
      <Text>{cinema.city}</Text>
      <Text>{cinema.phone}</Text>
      <Text>{cinema.website}</Text>
    </View>
  )
}
