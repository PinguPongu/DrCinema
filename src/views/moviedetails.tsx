import { useLocalSearchParams } from "expo-router";
import { Image, Text, View, ScrollView } from "react-native";
import { Movie as MovieType } from "../types/types";
import { styles } from "./styles";



export function MovieDetails(){
   const { cinemaId, movie} = useLocalSearchParams<{cinemaId?:string; movie?:string}>();
   const movieData = movie ? JSON.parse(movie) as MovieType : null;
   const cinemaIdInt = cinemaId ? Number(cinemaId) : undefined;

   const showTimeForThisCinema = movieData?.showtimes.find((s) => s.cinema.id === cinemaIdInt);

   const schedule = showTimeForThisCinema?.schedule;

   return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerRow}>
        <Image
          source={{ uri: movieData?.poster }}
          style={styles.poster}
          resizeMode="cover"
        />

        <View style={styles.headerText}>
          <Text style={styles.title}>{movieData?.title}</Text>

          <Text style={styles.subline}>
            {showTimeForThisCinema?.cinema.name} • {movieData?.year} •{" "}
            {movieData?.durationMinutes} mínútur
          </Text>

          <View style={styles.genreRow}>
            {movieData?.genres.map((genre) => (
              <View key={genre.ID} style={styles.genreChip}>
                <Text style={styles.genreText}>{genre.Name}</Text>
              </View>
            ))}
          </View>

          <View style={styles.certificateRow}>
            <Text style={styles.certificateText}>
              Aldurstakmörk: {movieData?.certificateIS}
            </Text>
          </View>
        </View>
      </View>

      {schedule && schedule.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sýningartímar</Text>
          <View style={styles.showtimeRow}>
            {schedule.map((showtime) => (
              <View key={showtime.time} style={styles.showtimeChip}>
                <Text style={styles.showtimeText}>{showtime.time}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Söguþráður</Text>
        <Text style={styles.plot}>{movieData?.plot}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upplýsingar</Text>
        <Text style={styles.metaLine}>
          <Text style={styles.metaLabel}>Leikstjórar: </Text>
          {movieData?.omdb[0].Director}
        </Text>
        <Text style={styles.metaLine}>
          <Text style={styles.metaLabel}>Handrit: </Text>
          {movieData?.omdb[0].Writer}
        </Text>
        <Text style={styles.metaLine}>
          <Text style={styles.metaLabel}>Leikarar: </Text>
          {movieData?.omdb[0].Actors}
        </Text>
        <Text style={styles.metaLine}>
          <Text style={styles.metaLabel}>Upprunaland: </Text>
          {movieData?.omdb[0].Country}
        </Text>
        <Text style={styles.metaLine}>
          <Text style={styles.metaLabel}>IMDb: </Text>
          {movieData?.omdb[0].imdbRating}
        </Text>
        {movieData?.omdb[0].tomatoUserRating && (
          <Text style={styles.metaLine}>
            <Text style={styles.metaLabel}>Rotten Tomatoes (user): </Text>
            {movieData?.omdb[0].tomatoUserRating}
          </Text>
        )}
      </View>
    </ScrollView>
  );
}