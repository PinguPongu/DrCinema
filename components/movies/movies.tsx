import { Movie as MovieType } from "@/src/types/types";
import {View, Text, Image, TouchableOpacity} from "react-native";
import { styles } from "./styles"
import { router } from "expo-router";

type movieProps = {
    movie: MovieType,
    cinemaId: number
};

export function Movie({movie, cinemaId} : movieProps){
    const handlePress = () => {
        router.push({
            pathname: "/movie-details",
            params: {
                cinemaId: String(cinemaId),
                movie: JSON.stringify(movie)
            }
        })
    }

    return (
        <TouchableOpacity onPress={handlePress}>
         <View style={styles.container}>
            {<Image
            source={{uri: movie.poster}}
            style={styles.poster}
            resizeMode="cover"
            />}
            <View style={styles.info}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}> - {movie.year}</Text>
                </View>
                {movie.genres.map((genre) => (
                    <Text key={genre.ID}>{genre.Name}</Text>
                ))}
                <Image source={{ uri: movie.certificateImg }} style={styles.certificate} />
            </View>
        </View>
        </TouchableOpacity>
  )
}