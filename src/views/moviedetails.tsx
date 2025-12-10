import { useLocalSearchParams } from "expo-router";
import { Image, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Movie as MovieType } from "../types/types";
import { styles } from "./styles";
import YoutubePlayer from "react-native-youtube-iframe";
import { Linking } from 'react-native';
import Review from "@/components/review/review";



export function MovieDetails(){
    const { cinemaId, movie} = useLocalSearchParams<{cinemaId?:string; movie?:string}>();
    const movieData = movie ? JSON.parse(movie) as MovieType : null;
    const cinemaIdInt = cinemaId ? Number(cinemaId) : undefined;

    const showTimeForThisCinema = movieData?.showtimes?.find((s) => s.cinema.id === cinemaIdInt);

    const schedule = showTimeForThisCinema?.schedule ?? [];

    const firstTrailerUrl: string | null =  movieData?.trailers?.[0]?.results?.[0]?.url ?? null;

    const getYoutubeId = (url: string | null): string | null => {
        if (!url) return null;
        const patterns = [
            /v=([^&]+)/,                 // https://www.youtube.com/watch?v=ID
            /youtu\.be\/([^?]+)/,        // https://youtu.be/ID
            /embed\/([^?]+)/,            // https://www.youtube.com/embed/ID
        ];

        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1]) {
            return match[1];
            }
        }

        return null;
        };

    const trailerId = getYoutubeId(firstTrailerUrl);

   return (
    <ScrollView contentContainerStyle={styles.container}>
        {movieData && (
        <>

      <View style={styles.headerRow}>
        <Image
          source={{ uri: movieData?.poster }}
          style={styles.poster}
          resizeMode="cover"
        />

        <View style={styles.headerText}>
          <Text style={styles.title}>{movieData?.title}</Text>

          <Text style={styles.subline}>
            {showTimeForThisCinema?.cinema.name} • {movieData?.year}
          </Text>
          {movieData?.durationMinutes && <Text style={styles.subline}>
            {movieData?.durationMinutes} mínútur
          </Text>}

          <View style={styles.genreRow}>
            {movieData?.genres.map((genre) => (
              <View key={genre.ID} style={styles.genreChip}>
                <Text style={styles.genreText}>{genre.Name}</Text>
              </View>
            ))}
          </View>

          <View style={styles.certificateRow}>
            <Text style={styles.certificateText}>
              Aldurstakmark: {movieData?.certificateIS}
            </Text>
          </View>
        </View>
      </View>

      {trailerId && (
            <View style={styles.trailerContainer}>
              <YoutubePlayer
                height={220}
                width={"100%"}
                videoId={trailerId}
                play={false}
              />
            </View>
          )}

      {schedule.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sýningartímar</Text>
          <View style={styles.showtimeRow}>
            {schedule.map((showtime) => (
              <TouchableOpacity 
                key={showtime.time} 
                style={styles.showtimeChip} 
                onPress={async () => {
                  const url = showtime.purchase_url;

                  const supported = await Linking.canOpenURL(url);
                  if (supported) {
                    await Linking.openURL(url);
                  } else {
                    console.warn("Don't know how to open URI: " + url);
                  }
                }}
                >
                  <Text style={styles.showtimeText}>{showtime.time}</Text>
              </TouchableOpacity>
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
          {movieData?.omdb[0]?.Director}
        </Text>
        <Text style={styles.metaLine}>
          <Text style={styles.metaLabel}>Handrit: </Text>
          {movieData?.omdb[0]?.Writer}
        </Text>
        <Text style={styles.metaLine}>
          <Text style={styles.metaLabel}>Leikarar: </Text>
          {movieData?.omdb[0]?.Actors}
        </Text>
        <Text style={styles.metaLine}>
          <Text style={styles.metaLabel}>Upprunaland: </Text>
          {movieData?.omdb[0]?.Country}
        </Text>
        <Text style={styles.metaLine}>
          <Text style={styles.metaLabel}>IMDb: </Text>
          {movieData?.omdb[0]?.imdbRating}
        </Text>
        {movieData?.omdb[0]?.tomatoUserRating && (
          <Text style={styles.metaLine}>
            <Text style={styles.metaLabel}>Rotten Tomatoes (user): </Text>
            {movieData?.omdb[0]?.tomatoUserRating}
          </Text>
        )}
      </View>
    </>)}
    <Review id={movieData?.id}/>
    </ScrollView>
  );
}
