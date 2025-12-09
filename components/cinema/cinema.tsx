import { Cinema as CinemaType, Movie as MovieType } from "@/src/types/types";
import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles"
import { Movie } from "../movies/movies"

type CinemaProps = {
    cinema: CinemaType,
    movies: MovieType[]
}

function isShownAtCinema(movie: MovieType, cinema: CinemaType){
    return movie.showtimes?.some(
        (showtime) => 
            showtime.cinema?.id === cinema.id || showtime.cinema_name === cinema.name 
    ) ?? false;
}

export function Cinema({cinema, movies}: CinemaProps){
    const moviesAtCinema = movies.filter((movie) => isShownAtCinema(movie, cinema))
      return (
        <View style={styles.cinemaContainer}>
        <View style={styles.cinemaHeader}>
            <Text style={styles.cinemaName}>{cinema.name}</Text>
            <View style={styles.cinemaBadge}>
            <Text style={styles.cinemaBadgeText}>
                {moviesAtCinema.length}{" "}
                {moviesAtCinema.length === 1 ? "mynd" : "myndir"}
            </Text>
            </View>
        </View>
        {moviesAtCinema.map((movie) => (
            <Movie key={movie.id} movie={movie}/>
        ))}
        </View>
  );
}
