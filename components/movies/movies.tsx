import { Movie as MovieType } from "@/src/types/types";
import {View, Text, Image} from "react-native";
import { styles } from "./styles"

type movieProps = {
    movie: MovieType
};

export function Movie({movie} : movieProps){
    return (
         <View style={styles.container}>
            {<Image
            source={{uri: movie.poster}}
            style={styles.poster}
            resizeMode="cover"
            />}
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        {
        <Text style={styles.year}>{movie.year}</Text>}
        {
        <Image source={{ uri: movie.certificateImg }} style={styles.certificate} />
        }
      </View>
    </View>
  )
}